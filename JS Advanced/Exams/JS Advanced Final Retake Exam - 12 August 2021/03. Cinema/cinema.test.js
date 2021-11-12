const {expect, assert} = require('chai');
const {cinema} = require('./cinema.js');

describe("Test cinema object", function () {
    describe("test method showMovies", function () {
        it("should return -> There are currently no movies to show., input: empty array", function () {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });

        it("should return -> Godfather, Aliens, input: [Godfather, Aliens]", function () {
            expect(cinema.showMovies(["Godfather", "Aliens"])).to.equal('Godfather, Aliens');
        });
    });


    describe("test method ticketPrice", function () {
        it("should throw an Error with message: Invalid projection type.", function () {
            expect(() => cinema.ticketPrice("P")).to.throw('Invalid projection type.');
        });

        it("should return 7.50, input: Normal", function () {
            expect(cinema.ticketPrice("Normal")).to.equal(7.50);
        });

        it("should return 12.00, input: Normal", function () {
            expect(cinema.ticketPrice("Premiere")).to.equal(12.00);
        });

        it("should return 5.50, input: Discount", function () {
            expect(cinema.ticketPrice("Discount")).to.equal(5.50);
        });
    });

    describe("test method swapSeatsInHall", function () {

        it("should return -> Successful change of seats in the hall., input: 1 and 2", function () {
            expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.');
        });

        it("should return -> Successful change of seats in the hall., input: 2 and 1", function () {
            expect(cinema.swapSeatsInHall(2, 1)).to.equal('Successful change of seats in the hall.');
        });

        it("should return -> Successful change of seats in the hall., input: 19 and 20", function () {
            expect(cinema.swapSeatsInHall(19, 20)).to.equal('Successful change of seats in the hall.');
        });

        it("should return -> Successful change of seats in the hall., input: 20 and 19", function () {
            expect(cinema.swapSeatsInHall(20, 19)).to.equal('Successful change of seats in the hall.');
        });

        it("should return -> Unsuccessful change of seats in the hall., input: first seat is not Number", function () {
            expect(cinema.swapSeatsInHall("T", 2)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return -> Unsuccessful change of seats in the hall., input: second seat is not Number", function () {
            expect(cinema.swapSeatsInHall(2, "T")).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return -> Unsuccessful change of seats in the hall., input: both seats are not Number", function () {
            expect(cinema.swapSeatsInHall("M", "T")).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return -> Unsuccessful change of seats in the hall., input: first seat is under 0", function () {
            expect(cinema.swapSeatsInHall(-1, 2)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return -> Unsuccessful change of seats in the hall., input: second seat is under zero", function () {
            expect(cinema.swapSeatsInHall(2, -1)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return -> Unsuccessful change of seats in the hall., input: both seats are under zero", function () {
            expect(cinema.swapSeatsInHall(-2, -1)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return -> Unsuccessful change of seats in the hall., input: first seat is = 0", function () {
            expect(cinema.swapSeatsInHall(0, 2)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return -> Unsuccessful change of seats in the hall., input: second seat is = zero", function () {
            expect(cinema.swapSeatsInHall(2, 0)).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: both seats are = zero", function () {
            expect(cinema.swapSeatsInHall(0, 0)).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: both seats are the same", function () {
            expect(cinema.swapSeatsInHall(1, 1)).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: first seat is above 20", function () {
            expect(cinema.swapSeatsInHall(21, 2)).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: second seat is above 20", function () {
            expect(cinema.swapSeatsInHall(2, 22)).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: second seat not provided", function () {
            expect(cinema.swapSeatsInHall(2, )).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: first seat not provided", function () {
            expect(cinema.swapSeatsInHall()).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: first seat is not Number", function () {
            expect(cinema.swapSeatsInHall('2', 22)).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: second seat is not Number", function () {
            expect(cinema.swapSeatsInHall(22, '2')).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: second seat is not Number", function () {
            expect(cinema.swapSeatsInHall(22, -3)).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: second seat is not Number", function () {
            expect(cinema.swapSeatsInHall(22, "T")).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: second seat is not Number", function () {
            expect(cinema.swapSeatsInHall("T", 22)).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: second seat is not Number", function () {
            expect(cinema.swapSeatsInHall(-22, "T")).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: second seat is not Number", function () {
            expect(cinema.swapSeatsInHall("T", -22)).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: second seat is not Number", function () {
            expect(cinema.swapSeatsInHall("T", "T")).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: second seat is not Number", function () {
            expect(cinema.swapSeatsInHall(-22, -21)).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: second seat is not Number", function () {
            expect(cinema.swapSeatsInHall(-2, -3)).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: second seat is not Number", function () {
            expect(cinema.swapSeatsInHall(20, -21)).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("should return -> Unsuccessful change of seats in the hall., input: second seat is not Number", function () {
            expect(cinema.swapSeatsInHall(5, ["text"])).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("test10", function () {
            expect(cinema.swapSeatsInHall(2.4, 2)).to.equal("Unsuccessful change of seats in the hall.");
        });

         it("test21", function () {
            expect(cinema.swapSeatsInHall(['text'], 4)).to.equal("Unsuccessful change of seats in the hall.");
        });


        it("test11", function () {
            expect(cinema.swapSeatsInHall(2, 2.5)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("test19", function () {
            expect(cinema.swapSeatsInHall(-4, 40)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("test20", function () {
            expect(cinema.swapSeatsInHall(40, -40)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("test20", function () {
            expect(cinema.swapSeatsInHall(20, 20)).to.equal("Unsuccessful change of seats in the hall.");
        });

    });
});
