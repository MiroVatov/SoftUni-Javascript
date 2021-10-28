function solve(inputArray) {

    let carsObj = {};
    for (let carData of inputArray) {
        let [brand, model, quantity] = carData.split(' | ');
        if (!carsObj.hasOwnProperty(brand)) {
            carsObj[brand] = {};
            carsObj[brand][model] = Number(quantity);
        } else {
            if (carsObj[brand].hasOwnProperty(model)) {
                carsObj[brand][model] += Number(quantity);
            } else {
                carsObj[brand][model] = Number(quantity);
            }
        }
    }
    let data = '';
    for ( let [ brandName, carData ] of Object.entries(carsObj)){
        data += `${brandName}` + '\n';
        for ( let [model ,qty] of Object.entries(carData)){
            data += `###${model} -> ${qty}` + '\n';
        }
    }

    return data;
}


console.log(solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
    'Audi | Q7 | 5000']
));