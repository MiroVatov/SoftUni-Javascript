const {expect} = require('chai');
const {numberOperations} = require('./03. Number Operations_Resources');


describe("Test Number Operations", function () {
    describe("test method powNumber", function () {
        it("should return 9, input: 3", function () {
            expect(numberOperations.powNumber(3)).to.equal(9);
        });


    });

    describe("test method numberChecker", function () {
        it("test if the input is not a number convertible, input: Err", function () {
            expect(() => numberOperations.numberChecker("Err")).to.throw("The input is not a number!");
        });

        it("should return The number is lower than 100!, input: 99", function () {
            expect(numberOperations.numberChecker(99)).to.equal("The number is lower than 100!");
        });

        it("should return The number is greater than 100!, input: 101", function () {
            expect(numberOperations.numberChecker(101)).to.equal("The number is greater or equal to 100!");
        });

        it("should return The number is greater than 100!, input: 100", function () {
            expect(numberOperations.numberChecker(100)).to.equal("The number is greater or equal to 100!");
        });
    });

    describe("test method sumArrays", function () {
        it("should return [ 2, 4, 6, 8, 10 ]", function () {
            expect(numberOperations.sumArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).to.eql([2, 4, 6, 8, 10]);
        });

        it("should return [ 2, 4, 6, 8, 5 ]", function () {
            expect(numberOperations.sumArrays([1, 2, 3, 4, 5], [1, 2, 3, 4])).to.eql([2, 4, 6, 8, 5]);
        });

        it("should return [ 2, 4, 6, 8, 5 ]", function () {
            expect(numberOperations.sumArrays([1, 2, 3, 4], [1, 2, 3, 4, 5])).to.eql([2, 4, 6, 8, 5]);
        });
    });
});
