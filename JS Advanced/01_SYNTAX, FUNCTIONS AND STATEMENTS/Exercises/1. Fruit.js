function solve(fruitName, weightGrams, pricePerKilo) {
    weightGrams /= 1000;
    let moneyNeeded = weightGrams * pricePerKilo;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightGrams.toFixed(2)} kilograms ${fruitName}.`);
}

solve('orange', 2500, 1.80);

solve('apple', 1563, 2.35);