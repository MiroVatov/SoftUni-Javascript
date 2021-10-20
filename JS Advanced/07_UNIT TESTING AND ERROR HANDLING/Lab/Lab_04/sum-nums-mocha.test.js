const { expect, assert } = require("chai");
const { sum } = require("./sumNums");  // destructuring objects


describe("sum(arr) - sum array of numbers", function () {
    it("should return 3 for [1,2]", function () {
        let expectedSum = 3;
        let actualSum = sum([1, 2]);
        // chai.expect(actualSum).equal(expectedSum);
        expect(actualSum).to.equal(expectedSum);
    });

    it("should return 1 for [1]", function () {
        let expectedSum = 1;
        let actualSum = sum([1]);
        expect(actualSum).to.equal(expectedSum);
    });

    it("should return 0 for empty array", function () {
        let expectedSum = 0;
        let actualSum = sum([]);
        expect(actualSum).to.equal(expectedSum);
    });
});

