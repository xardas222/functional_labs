const F = require("../lib");

describe("after addLoggin2()", function() {
  let dummy;

  beforeEach(() => {
    dummy = { logger() {} };
    spyOn(dummy, "logger");
  });

  it("should call the provided logger", () => {
    let something = (a, b) => `result=${a}:${b}`;
    something = F.addLogging(something, dummy.logger);

    something(22, 9);
    expect(dummy.logger).toHaveBeenCalledTimes(2);
    expect(dummy.logger).toHaveBeenCalledWith("entering something: 22,9");
    expect(dummy.logger).toHaveBeenCalledWith("exiting something: result=22:9");
  });

  it("a throwing function should be reported", () => {
    let thrower = (a, b, c) => {
      throw "CRASH!";
    };
    thrower = F.addLogging(thrower, dummy.logger);

    try {
      thrower(1, 2, 3);
    } catch (e) {
      expect(dummy.logger).toHaveBeenCalledTimes(2);
      expect(dummy.logger).toHaveBeenCalledWith("entering thrower: 1,2,3");
      expect(dummy.logger).toHaveBeenCalledWith(
        "exiting thrower: threw CRASH!"
      );
    }
  });
});
