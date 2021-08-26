let expect = require("mocha").expect;
let sum = require("../sum-nums").sum;

describe("sum(arr) - sum array of numbers", function () {
    it("should return 3 for [1,2]", function () {
        let expectedSum = 3;
        let actualSum = sum([1, 2]);
        assert(actualSum).to.be.equal(expectedSum);
    });
    it("should return 1 for [1]", function (){});

    it("should return 0 for empty array", function (){});
});

