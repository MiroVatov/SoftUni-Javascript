const { expect, assert } = require('chai');
const { isOddOrEven } = require('./2_EvenOrOdd');


describe("checks if input string length in even ot odd", function () {
    let multipleDifferentStrings = ["even", "odd", "try", "exel"];

    it("should return undefined -> input is not a string", function () {
        expect(isOddOrEven([1, 2 ,'3'])).to.undefined;
    });
    it("should return even -> input string length is even", function () {
        expect(isOddOrEven("even")).to.equal("even");
    });
    it("should return odd -> input string length is even", function () {
        expect(isOddOrEven("odd")).to.equal("odd");
    });
    it("should return even or odd -> input will be different length strings from array in for loop", function () {
        for (let testString of multipleDifferentStrings){
            if (testString.length % 2 === 0 ){
                expect(isOddOrEven(testString)).to.equal("even");
            } else {
                expect(isOddOrEven(testString)).to.equal("odd");
            }
        }
    });
});