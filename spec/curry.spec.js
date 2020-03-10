const F = require("../lib");

describe("curry function", function() {
  it("testing the function has been curried", function() {
    const threeSums = (a, b, c) => a + b + c;
    const curriedThreeSums = F.curry(threeSums);

    const curriedThreeSumsAddTwo = curriedThreeSums(2);

    const curriedThreeSumsAddTwoAddThree = curriedThreeSumsAddTwo(3);
    const curriedThreeSumsAddTwoAddFour = curriedThreeSumsAddTwo(4);

    expect(curriedThreeSumsAddTwoAddThree(5)).toEqual(10);
    expect(curriedThreeSumsAddTwoAddFour(4)).toEqual(10);
  });

  it("testing if curried function equals the normal call", function() {
    const threeSums = (a, b, c) => a + b + c;
    const curriedThreeSums = F.curry(threeSums);

    const curriedThreeSumsAddTwo = curriedThreeSums(2);
    const curriedThreeSumsAddTwoAddThree = curriedThreeSumsAddTwo(3);
    const result = curriedThreeSumsAddTwoAddThree(4);

    expect(result).toEqual(threeSums(2, 3, 4));
 
    })
});
