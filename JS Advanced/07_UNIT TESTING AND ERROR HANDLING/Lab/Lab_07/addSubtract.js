function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

module.exports = { createCalculator }

let returnedObj = createCalculator();
returnedObj.add(5);
console.log(returnedObj.get());
console.log(returnedObj);
