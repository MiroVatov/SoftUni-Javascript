function solve(inputArray) {
    let bottlesData = {};
    let finalBottles = {};
    for (let juiceData of inputArray) {
        let [juiceType, quantity] = juiceData.split(' => ');
        if (!bottlesData.hasOwnProperty(juiceType)) {
            bottlesData[juiceType] = 0;
        }
        bottlesData[juiceType] += Number(quantity);
        if (bottlesData[juiceType] >= 1000) {
             if (!finalBottles.hasOwnProperty(juiceType)) {
                finalBottles[juiceType] = 0;
            }
             let bottlesQty = Math.floor(Number(bottlesData[juiceType]) / 1000);
            finalBottles[juiceType] += bottlesQty;
            bottlesData[juiceType] -= bottlesQty * 1000;
        }
    }
    let data = '';
    for ( let obj of Object.entries(finalBottles)){
        data += `${obj[0]} => ${obj[1]}` + '\n';
    }
    return data;
}

console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
));

console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
));

console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
));