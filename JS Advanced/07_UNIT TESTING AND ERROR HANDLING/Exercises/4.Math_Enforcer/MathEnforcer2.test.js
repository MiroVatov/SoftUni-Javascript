const {expect} = require("chai");
const {mathEnforcer} = require("./MathEnforcer");

describe("test methods addFive, subtractTen, sum", function () {
    let num;

    describe("test method addFive", function () {
        it("test function addFive return undefined -> input not a number", function () {
            expect(mathEnforcer.addFive('5')).to.undefined;
        });
        it("test function addFive should return 5, input -> number: 5", function () {
            num = mathEnforcer.addFive(5);
            expect(num).to.equal(10);
        });
        it("test function addFive should return 0, input is negative number -> -5", function () {
            num = mathEnforcer.addFive(-5);
            expect(num).to.equal(0);
        });
        it("test function addFive should return 10.5, input is floating point number -> 5.5", function () {
            num = mathEnforcer.addFive(5.5);
            expect(num).to.equal(10.5);
        });

    });


    describe("test method subtractTen", function () {

        it("test function subtractTen should return undefined, input is not a number", function () {
            num = mathEnforcer.subtractTen('10');
            expect(num).to.undefined;
        });
        it("test function subtractTen should return 5, input -> 15", function () {
            num = mathEnforcer.subtractTen(15);
            expect(num).to.equal(5);
        });
        it("test function subtractTen should return -15, input -> -5", function () {
            num = mathEnforcer.subtractTen(-5);
            expect(num).to.equal(-15);
        });
        it("test function subtractTen should return 15.5, input -> 5.5", function () {
            num = mathEnforcer.subtractTen(5.5);
            expect(num).to.equal(-4.5);
        });
    });

    describe("test method sum", function () {
        it("test function sum should return undefined -> first input is not a number", function () {
            num = mathEnforcer.sum('10', 5);
            expect(num).to.undefined;
        });
        it("test function sum should return undefined -> second input is not a number", function () {
            num = mathEnforcer.sum(5, '10');
            expect(num).to.undefined;
        });
        it("test function sum should return undefined -> both inputs are not numbers", function () {
            num = mathEnforcer.sum('4', '3');
            expect(num).to.undefined;
        });
        it("test function sum should return 10, input -> 5 ,5", function () {
            num = mathEnforcer.sum(5, 5);
            expect(num).to.equal(10);
        });
        it("test function sum should return 11, input -> 5.5, 5,5", function () {
            num = mathEnforcer.sum(5.5, 5.5);
            expect(num).to.equal(11);
        });
    });

});