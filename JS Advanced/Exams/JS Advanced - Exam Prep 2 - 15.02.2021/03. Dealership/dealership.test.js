const {expect} = require('chai');
const {dealership} = require('./dealership');


describe("Test dealership object", function() {
    describe("test method newCarCost", function() {
        let result;
        it("should return 20000, input: Old carModel: Audi A6 4K,new CarPrice: 40000", function() {
            result = dealership.newCarCost("Audi A6 4K", 40000);
            expect(result).to.equal(20000);
        });

        it("should return -20000, input is 0: Old carModel: Audi A6 4K, new CarPrice: 0", function() {
            result = dealership.newCarCost("Audi A6 4K", 0);
            expect(result).to.equal(-20000);
        });

        it("should return the new car price, input: old carModel is not in the oldCarsDiscount", function () {
            result = dealership.newCarCost("Opel Zafira", 10000);
            expect(result).to.equal(10000);
        });
     });
    describe("test method carEquipment", function () {
        it("should return , input correct", function () {
           let result = dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'],[0, 3]);
           expect(result).to.eql(['heated seats', 'navigation']);
        });

        it("should return empty array, input: empty array", function () {
            expect(dealership.carEquipment([], [])).to.eql([]);
        })
    });

     describe("test method euroCategory", function () {
         it("should return: Your euro category is low, so there is no discount from the final price!, input: 3", function () {
             expect(dealership.euroCategory(3)).to.equal("Your euro category is low, so there is no discount from the final price!");
         });

         it("should return: We have added 5% discount to the final price: ., input: 5", function () {
            expect(dealership.euroCategory(5)).to.equal("We have added 5% discount to the final price: 14250.")
         });

         it("should return: We have added 5% discount to the final price: ., input: 4", function () {
            expect(dealership.euroCategory(4)).to.equal("We have added 5% discount to the final price: 14250.")
         });
     });
});
