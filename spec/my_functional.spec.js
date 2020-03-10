const F = require("../lib");

describe("alternator", () => {
  it("should alternate between results", () => {
    const funcOne = () => "A";
    const funcTwo = () => "B";

    const alternator = F.alternator(funcOne, funcTwo);

    expect(alternator()).toBe("A");
    expect(alternator()).toBe("B");
    expect(alternator()).toBe("A");
    expect(alternator()).toBe("B");
  });
});

describe("thatManyTimes", () => {
  let spyObject = {};

  it("should be only called 2 times", () => {
    spyObject.someFunc = () => {};
    spyOn(spyObject, "someFunc");

    const twoTimes = F.thatManyTimes(2);


    twoTimes(spyObject.someFunc);
    twoTimes(spyObject.someFunc);
    twoTimes(spyObject.someFunc);

    expect(spyObject.someFunc).toHaveBeenCalledTimes(2);

  });
});
