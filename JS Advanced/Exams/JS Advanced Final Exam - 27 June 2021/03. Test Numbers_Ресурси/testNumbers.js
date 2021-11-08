const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};


const {expect, assert} = require('chai');

describe("Tests testNumbers", function () {
    describe("test method sumNumbers", function () {

        it("should return undefined, input: num1 not a Number", function () {
            expect(testNumbers.sumNumbers(1, "r")).to.undefined;
        });

        it("should return undefined, input: num2 not a Number", function () {
            expect(testNumbers.sumNumbers("r", 2)).to.undefined;
        });

        it("should return undefined, input: num1 and num2 not a Numbers", function () {
            expect(testNumbers.sumNumbers("r", "l")).to.undefined;
        });

        it("should return 0, input: num1 and num2 are Zero's", function () {
            let res = testNumbers.sumNumbers(0, 0);
            expect(res).to.equal("0.00");
        });

        it("should return 5, input: num1: 2, num2: 3", function () {
            let res = testNumbers.sumNumbers(2, 3);
            expect(res).to.equal("5.00");
        });

        it("should return 5.50, input : num1(floating number): 2.50, num2: 3", function () {
            let res = testNumbers.sumNumbers(2.5, 3);
            expect(res).to.equal("5.50");
        });

    });

    describe("test method numberChecker", function () {

        it("should throw an Error, input: is not a convertible to Number value", function () {
            expect(() => testNumbers.numberChecker("Err")).to.throw("The input is not a number!");
        });

        it("should return -> The number is even!, input: 4", function () {
            let res = testNumbers.numberChecker(4);
            expect(res).to.equal("The number is even!");
        });

        it("should return -> 'The number is odd!, input: 5", function () {
            let res = testNumbers.numberChecker(5);
            expect(res).to.equal("The number is odd!");
        });

        it("should return -> 'The number is odd!, input 5.50", function () {
            let res = testNumbers.numberChecker(5.50);
            expect(res).to.equal("The number is odd!");
        });

        it("should return -> 'The number is even!, input 4.50", function () {
            let res = testNumbers.numberChecker(4.00);
            expect(res).to.equal("The number is even!");
        });

        it("should return -> 'The number is even!, input(negative number) -4", function () {
            let res = testNumbers.numberChecker(-4);
            expect(res).to.equal("The number is even!");
        });

    });

    describe("test method averageSumArray", function () {
        it("should return 10, input: [1, 2, 3, 3, 1]", function () {
            expect(testNumbers.averageSumArray([1, 2, 3, 3, 1])).to.equal(2);
        });
    });

});
