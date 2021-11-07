const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function (booksArr, desiredBook) {
        if (booksArr.length === 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e === desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

const {expect, assert} = require('chai');

describe("Tests Library", function () {
    describe("method calcPriceOfBook", function () {
        it("should throw Error -> input: nameOfBook is not string", function () {
            expect(() => library.calcPriceOfBook(99, 1990)).to.throw("Invalid input");
        });
        it("should throw Error -> input: year is not Number", function () {
            expect(() => library.calcPriceOfBook("Kudjo", "99")).to.throw("Invalid input");
        });
        it("should validate the price is 20 -> input: correct", function () {
            let lib = library.calcPriceOfBook("Kudjo", 1990);
            expect(lib).to.equal("Price of Kudjo is 20.00");
        });
        it("should validate the price is with 50% discount -> input: correct", function () {
            let lib = library.calcPriceOfBook("Kudjo", 1979);
            expect(lib).to.equal("Price of Kudjo is 10.00");
        });
        it("should validate the price is with 50% discount -> input: correct", function () {
            let lib = library.calcPriceOfBook("Kudjo", 1980);
            expect(lib).to.equal("Price of Kudjo is 10.00");
        });

    });
    describe("Test method findBook", function () {
        it("should throw Error => input: books Arr is empty", function () {
            expect(() => library.findBook([], "Kudjo")).to.throw("No books currently available");
        });
        it("should return: We found the book you want. => input correct", function () {
            let lib = library.findBook(["Troy", "Life Style", "Torronto"], "Troy");
            expect(lib).to.equal("We found the book you want.");
        });
        it("should return: The book you are looking for is not here. => input correct", function () {
            let lib = library.findBook(["Troy", "Life Style", "Torronto"], "Lilly");
            expect(lib).to.equal("The book you are looking for is not here!");
        });
    });
    describe("Test method arrangeBooks", function () {
        it("should throw an Error, input: countBooks is not a Number", function () {
            expect(() => library.arrangeTheBooks("")).to.throw("Invalid input");
        });
        it("should throw an Error, input: countBooks is not a negative Number", function () {
            expect(() => library.arrangeTheBooks(-5)).to.throw("Invalid input");
        });
        it("should return: Great job, the books are arranged.", function () {
            expect(library.arrangeTheBooks(10)).to.equal("Great job, the books are arranged.");
        });
        it("should return: Great job, the books are arranged.", function () {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });
        it("should return: Insufficient space, more shelves need to be purchased.", function () {
            expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.");
        });
    });
});
