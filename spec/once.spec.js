const F = require('../lib');

describe("once", () => {
    let spyObject = {};

    beforeEach(() => {
      spyObject.myFn = () => {};
      spyOn(spyObject, "myFn");
    });  
   
    it("without 'once', a function always runs", () => {
      spyObject.myFn();
      spyObject.myFn();
      spyObject.myFn();
      expect(spyObject.myFn).toHaveBeenCalledTimes(3);
    });

    it("with 'once' a function runs one time", () => {
      spyObject.onceFn = F.once(spyObject.myFn);
      spyOn(spyObject, "onceFn").and.callThrough();

      spyObject.onceFn();
      spyObject.onceFn();
      spyObject.onceFn();

      expect(spyObject.onceFn).toHaveBeenCalledTimes(3);
      expect(spyObject.myFn).toHaveBeenCalledTimes(1);
    });
});

describe("onceAndAfter", () => {
    let spyObject = {};

    it("should call the first function once, and the other after", () => {
      spyObject.funcOne = () => {};
      spyOn(spyObject, "funcOne");

      spyObject.funcTwo = () => {};
      spyOn(spyObject, "funcTwo");

      const onceAndAfter = F.onceAndAfter(spyObject.funcOne, spyObject.funcTwo);
      
      onceAndAfter();
      expect(spyObject.funcOne).toHaveBeenCalledTimes(1);
      expect(spyObject.funcTwo).toHaveBeenCalledTimes(0);

      onceAndAfter();
      expect(spyObject.funcOne).toHaveBeenCalledTimes(1);
      expect(spyObject.funcTwo).toHaveBeenCalledTimes(1);

      onceAndAfter();
      expect(spyObject.funcOne).toHaveBeenCalledTimes(1);
      expect(spyObject.funcTwo).toHaveBeenCalledTimes(2);

      onceAndAfter();
      expect(spyObject.funcOne).toHaveBeenCalledTimes(1);
      expect(spyObject.funcTwo).toHaveBeenCalledTimes(3);

    });
});
