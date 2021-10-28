const {expect} = require('chai');
const {StringBuilder} = require('./string-builder.js');

describe("test class stringBuilder", function () {
    describe("test constructor", function () {

        it("should return array from the input, input: string", function () {
            let str = new StringBuilder('messi');
            expect(str._stringArray).eql(['m', 'e', 's', 's', 'i']);
        });

        it("should return instance object with empty array, input: undefined", function () {
            let str = new StringBuilder();
            expect(str._stringArray).eql([]);
        });

        it("test method _vrfyParam, it should throw TypeError, input: number", function () {
            let func = function () {
                new StringBuilder(9);
            };
            expect(func).to.throw(TypeError, 'Argument must be a string');
        });

        describe("test method append", function () {

            it("should return changed array, input: string with length - 3", function () {
                let str = new StringBuilder('messi');
                str.append('GOD');
                expect(str._stringArray).eql(['m', 'e', 's', 's', 'i', 'G', 'O', 'D']);
            });

            it("should return unchanged array, input: blank string", function () {
                let str = new StringBuilder('messi');
                str.append('');
                expect(str._stringArray).eql(['m', 'e', 's', 's', 'i']);
            });

            it("test method append, it should throw TypeError, input: number", function () {
                let str = new StringBuilder('messi');
                expect(() => str.append(9)).to.throw('Argument must be a string');
            });
        });

        describe("test method prepend", function () {

            it("should return changed array, input: 'string with length - 3", function () {
                let str = new StringBuilder('messi');
                str.prepend('GOD');
                expect(str._stringArray).eql(['G', 'O', 'D', 'm', 'e', 's', 's', 'i']);
            });

            it("test method prepend, it should throw TypeError, input: number", function () {
                let str = new StringBuilder('messi');
                expect(() => str.prepend(9)).to.throw('Argument must be a string');
            });
        });

        describe("test method insertAt", function () {

            it("should add new characters at the middle of the string", function () {
                let str = new StringBuilder('messi');
                str.insertAt('GOD', 2);
                expect(str._stringArray).eql(['m', 'e', 'G', 'O', 'D', 's', 's', 'i']);
            });

            it("test method insertAt, it should throw TypeError, input: number", function () {
                let str = new StringBuilder('messi');
                expect(() => str.insertAt(2, 2)).to.throw('Argument must be a string');
            });

        });
        describe("test method remove", function () {

            it("should delete last 3 characters from the input: messi", function () {
                let str = new StringBuilder('messi');
                str.remove(1, 4);
                expect(str._stringArray).eql(['m']);
            });
        });
        describe("test method toString", function () {
            it("should return messi, input, messi", function () {
                let str = new StringBuilder('messi');
                expect(str.toString()).eql('messi');
            });
        });
    });
});