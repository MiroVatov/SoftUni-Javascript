const {expect} = require("chai");
const {rgbToHexColor} = require("./rgb-to-hex");

describe("test for rgbToHexColors as input are correct", function () {
    it("should return undefined -> red color is less than 0", function () {
        expect(rgbToHexColor(-1, 22, 99)).to.undefined;
    });
    it("should return undefined -> red color is more than 255", function () {
        expect(rgbToHexColor(256, 33, 55)).to.undefined;
    });
    it("should return undefined -> red color is not a Number", function () {
        expect(rgbToHexColor([], 33, 55)).to.undefined;
    });
    it("should return undefined -> green color is less than 0", function () {
        expect(rgbToHexColor(22, -1, 45)).to.undefined;
    });
    it("should return undefined -> green color is more than 255", function () {
        expect(rgbToHexColor(22, 300, 25)).to.undefined;
    });
    it("should return undefined -> green color is not a Number", function () {
        expect(rgbToHexColor(22, '', 254)).to.undefined;
    });
    it("should return undefined -> blue color is less than 0", function () {
        expect(rgbToHexColor(22, 33, -1)).to.undefined;
    });
    it("should return undefined -> blue color is more than 255", function () {
        expect(rgbToHexColor(22, 33, 257)).to.undefined;
    });
    it("should return undefined -> blue color is not a Number", function () {
        expect(rgbToHexColor(22, 33, ""));
    });
    it("upper border case should return #FFFFFF -> input (255, 255, 255)", function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it("lower border case should return #010101 -> input (1, 1, 1)", function () {
        expect(rgbToHexColor(1, 1, 1)).to.equal('#010101');
    });
    it("should return #1E283C -> input (30, 40, 60)", function () {
        expect(rgbToHexColor(30, 40, 60)).to.equal('#1E283C');
    });
    it("should return undefined -> input (0, 0, 0)", function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

});
