const { expect } = require("chai");
const {isSymmetric} = require("./checkForSymmetry");

describe("check for symmetry in input array", function () {
    it("should return false -> for input [1, 2, 3]", function () {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });
    it("should return false -> input object is not an array", function () {
        expect(isSymmetric({'1': '1, 2, 3'})).to.be.false;
    });
    it("should return false -> input is tuple", function () {
        expect(isSymmetric('1', '2' , '4')).to.be.false;
    })
    it("should return false -> input is string", function () {
        expect(isSymmetric('appa')).to.false;
    })
    it("should return true -> input is empty array", function () {
        expect(isSymmetric([])).to.be.true;
    });
    it("should return true -> input is an symmetric array", function () {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });
    it("should return true -> input is one number", function () {
        expect(isSymmetric([1])).to.be.true;
    });
    it("should return false -> input is type coerced elements in array", function () {
        expect(isSymmetric(["1", 1])).to.false;
    });
    it("should return false -> input is non-symmetric string in array", function () {
        expect(isSymmetric(["hello", "helleh"])).to.false;
    })
});