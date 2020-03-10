const F = require("../lib");

describe("compose", function() {
  let spyObject = {};

  beforeEach(() => {
    spyObject.fn1 = () => { return 111 };
    spyObject.fn2 = () => { return 222 };
    spyObject.fn3 = () => { return 333 };
    spyObject.fn4 = () => { return 444 };
  });

  it("works with 4 functions, multiple", () => {
    spyOn(spyObject, "fn1").and.callThrough();
    spyOn(spyObject, "fn2").and.callThrough();
    spyOn(spyObject, "fn3").and.callThrough();
    spyOn(spyObject, "fn4").and.callThrough();

    const pipe = F.compose(spyObject.fn4, spyObject.fn3, spyObject.fn2, spyObject.fn1);
    const result = pipe(24, 11, 63);


    expect(spyObject.fn1).toHaveBeenCalledTimes(1);
    expect(spyObject.fn2).toHaveBeenCalledTimes(1);
    expect(spyObject.fn3).toHaveBeenCalledTimes(1);
    expect(spyObject.fn4).toHaveBeenCalledTimes(1);

    expect(spyObject.fn1).toHaveBeenCalledWith(24, 11, 63);
    expect(spyObject.fn2).toHaveBeenCalledWith(111);
    expect(spyObject.fn3).toHaveBeenCalledWith(222);
    expect(spyObject.fn4).toHaveBeenCalledWith(333);

  });
});
