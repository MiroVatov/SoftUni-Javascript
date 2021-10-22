const { expect, assert } = require('chai');
const { lookupChar } = require('./1_CharLookup');

describe("test function that retrieves a character at a given index from a passed in string", function () {
    it("should return undefined -> input first parameter is NOT a string", function (){
        assert.isUndefined(lookupChar([], 2));
    });
    it("should return undefined -> input second parameter is NOT a number", function () {
        assert.isUndefined(lookupChar("Evolution", 'R'));
    });
    it("should return undefined -> both inputs are valid, but the index is less than zero", function () {
        assert.equal(lookupChar("Evolution", -1), "Incorrect index");
    });
    it("should return undefined -> both inputs are valid, but the index is bigger than the string length", function () {
        assert.equal(lookupChar("Evolution", 15), "Incorrect index");
    });
    it("should return undefined -> both inputs are valid, but the index is equal to the string length", function () {
        assert.equal(lookupChar("Evolution", 9), "Incorrect index");
    });
     it("should return undefined -> both inputs are valid, but the index is floating point number", function () {
        assert.isUndefined(lookupChar("Evolution", 1.2));
    });
    it("should return the character at the correct index -> input correct", function () {
        assert.equal(lookupChar("Evolution", 3), 'l');
    });
});