const {expect, assert} = require("chai");
const {PaymentPackage} = require("./PaymentPackage");


describe("test class PaymentPackage", function () {
    describe("test constructor", function () {
        it("should create instance of class PaymentPackage, inputs: correct data", function () {
            const paymentPack = new PaymentPackage('Visa', 25);
            expect(paymentPack.name).to.equal("Visa");
            expect(paymentPack.value).to.equal(25);
            expect(paymentPack.VAT).to.equal(20);
            expect(paymentPack.active).to.equal(true);
        });

        describe("test name", function () {
            it("should throw an Error, inputs: name is empty string", function () {
                let fcn = function () {
                    new PaymentPackage('', 25);
                };
                expect(fcn).to.throw(Error, 'Name must be a non-empty string');
            });

            it("should throw an Error, inputs: name param is missing", function () {
                let fcn = function () {
                    new PaymentPackage(25);
                };
                expect(fcn).to.throw(Error, 'Name must be a non-empty string');
            });

            it("should change the name, input: correct", function () {
                const paymentPack = new PaymentPackage('Visa', 25);
                paymentPack.name = "Master";
                expect(paymentPack.name).to.equal("Master");
            });

        });
        describe("test value property", function () {
            it("should throw an Error, inputs: value is below 0", function () {
                let fcn = function () {
                    new PaymentPackage('Visa', -1);
                };
                expect(fcn).to.throw(Error, 'Value must be a non-negative number');
            });

            it("should throw an Error, inputs: value is not a Number", function () {
                let fcn = function () {
                    new PaymentPackage('Visa', "Three");
                };
                expect(fcn).to.throw(Error, 'Value must be a non-negative number');
            });

            it("should change the value to 0, input: correct", function () {
                const paymentPack = new PaymentPackage('Visa', 25);
                paymentPack.value = 0;
                expect(paymentPack.value).to.equal(0);
            });

            it("should change the value, input: correct", function () {
                const paymentPack = new PaymentPackage('Visa', 25);
                paymentPack.value = 9;
                expect(paymentPack.value).to.equal(9);
            });
        });

        describe("test active property", function () {
            it("should change the active status, input: false", function () {
                const paymentPack = new PaymentPackage('Visa', 25);
                paymentPack.active = false;
                expect(paymentPack.active).to.equal(false);
            });

            it("should throw an Error, inputs: active is set to string", function () {
                let paymentPack = new PaymentPackage('abc', 123);
                expect(() => paymentPack.active = '0').to.throw('Active status must be a boolean');
            });
        });


        describe("test property VAT", function () {

            it("should change the VAT, input: 30", function () {
                const paymentPack = new PaymentPackage('Visa', 25);
                paymentPack.VAT = 30;
                expect(paymentPack.VAT).to.equal(30);
            });

            it('Should throw error when the new VAT is negative', () => {
                let flagClass = new PaymentPackage('abc', 123);
                expect(() => flagClass.VAT = -123).to.throw('VAT must be a non-negative number');
            });

            it('Should throw error when the new VAT is an array', () => {
                let flagClass = new PaymentPackage('abc', 123);
                expect(() => flagClass.VAT = [123]).to.throw('VAT must be a non-negative number');
            });
        });


        describe("test method to String", function () {
            it("test method-> toString(), should return the toString() method, input: correct", function () {
                let newPackage = new PaymentPackage('HR Services', 1500);
                let result = `Package: HR Services` + '\n';
                result += `- Value (excl. VAT): 1500` + '\n';
                result += `- Value (VAT 20%): 1800`;
                expect(newPackage.toString()).to.equal(result);
            });

            it("test method-> toString(), should return the toString() method, input: correct", function () {
                let newPackage = new PaymentPackage('HR Services', 1500);
                newPackage.active = false;
                let result = `Package: HR Services (inactive)` + '\n';
                result += `- Value (excl. VAT): 1500` + '\n';
                result += `- Value (VAT 20%): 1800`;
                expect(newPackage.toString()).to.equal(result);
            });
        });

    });

});