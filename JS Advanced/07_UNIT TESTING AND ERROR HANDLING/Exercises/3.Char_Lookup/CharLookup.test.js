const { expect, assert } = require('chai');
const { lookupChar } = require('./1_CharLookup');

describe("test function that retrieves a character at a given index from a passed in string", function () {
    it("should return undefined -> input first parameter is NOT a string", function (){
        expect(lookupChar([], 2)).to.undefined;
    });
    it("should return undefined -> input second parameter is NOT a number", function () {
        expect(lookupChar("Evolution", 'R')).to.undefined;
    });
    it("should return undefined -> both inputs are valid, but the index is less than zero", function () {
        expect(lookupChar("Evolution", -1)).to.equal("Incorrect index");
    });
    it("should return undefined -> both inputs are valid, but the index is bigger than the string length", function () {
        expect(lookupChar("Evolution", 15)).to.equal("Incorrect index");
    });
    it("should return undefined -> both inputs are valid, but the index is equal to the string length", function () {
        expect(lookupChar("Evolution", 9)).to.equal("Incorrect index");
    });
     it("should return undefined -> both inputs are valid, but the index is floating point number", function () {
        expect(lookupChar("Evolution", 1.2)).to.undefined;
    });
    it("should return the character at the correct index -> input correct", function () {
        expect(lookupChar("Evolution", 3)).to.equal('l');
    });
});