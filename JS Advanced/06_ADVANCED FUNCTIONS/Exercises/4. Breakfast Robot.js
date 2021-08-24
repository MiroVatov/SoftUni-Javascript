function solution() {
    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }
    let productsInStock = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};

    return function manager(inputString) {
        if (inputString === 'report') {
            let reportOutput = '';
            for (let productName of Object.keys(productsInStock)) {
                reportOutput += `${productName}=${productsInStock[productName]} `;
            }
            return reportOutput.trimRight();

        } else {
            let [activity, productName, quantity] = inputString.split(' ');

            if (activity === 'restock') {
                productsInStock[productName] += Number(quantity);
                return 'Success';

            } else if (activity === 'prepare') {
                let neededProductsQuantity = {};
                for (let [key, product] of Object.entries(recipes)) {
                    if (key === productName) {
                        for (let productData of Object.keys(product)) {
                            if (product[productData] * quantity > productsInStock[productData]) {
                                return `Error: not enough ${productData} in stock`;
                            } else {
                                neededProductsQuantity[productData] = Number(product[productData]) * quantity;
                            }
                        }
                        for (let tempData of Object.keys(neededProductsQuantity)) {
                            productsInStock[tempData] -= neededProductsQuantity[tempData];
                        }
                        return 'Success';
                    }
                }
            }
        }
    }
}

// let manager = solution();
//
// console.log(manager('restock flavour 50'));
// console.log(manager('prepare lemonade 4'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));


// let manager = solution();
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock protein 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('report'));

// let manager = solution();
//
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 5'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));