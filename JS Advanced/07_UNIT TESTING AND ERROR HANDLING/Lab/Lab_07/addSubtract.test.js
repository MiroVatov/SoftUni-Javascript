const {expect} = require("chai");
const {createCalculator} = require('./addSubtract');

describe("test an object methods", function () {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it("calc value should be 0 -> input: 0", function () {
        calc.add(0);
        let value = calc.get();
        expect(value).to.equal(0);
    });
    it("value should be 5 after adding 5 to initial value", function () {
        calc.add(5);
        let value = calc.get();
        expect(value).to.equal(5);
    });
    it("should return 5 -> input: 2 and '3'", function () {
        calc.add(2);
        calc.add('3');
        let value = calc.get();
        expect(value).to.equal(5);
    });
    it("test subtract method -> input add(5), subtract(2)", function () {
        calc.add(5);
        calc.subtract(3);
        let value = calc.get();
        expect(value).to.equal(2);
    });
        it("should return NanN for subtarct(string)", function () {
        calc.subtract('hello');
        let value = calc.get();
        expect(value).to.be.NaN;
    });
});
