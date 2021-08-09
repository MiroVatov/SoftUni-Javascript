function solve(inputArr) {
    let productsData = {"productName":{ productName, townName, productPrice}};

    function printOutput(productsData) {
        for ( let product of Object.keys(productsData) ){
            console.log(`${product} -> ${productsData[product].productPrice} (${productsData[product].townName})`);
        }
    }

    for ( let data of inputArr ){
        let [ townName, productName, price ] = data.split(' | ');
        if ( ! productsData.hasOwnProperty(productName) && ! productsData.hasOwnProperty(townName) ){
            productsData = { "productName": productName ,"townName": townName,  "productPrice": Number(price) };
        }
        else if ( productsData.hasOwnProperty(productName) && productsData.hasOwnProperty(townName) ){
            if ( price > productsData[productName].productPrice ){
                productsData = { "productName": productName ,"townName": townName,  "productPrice": Number(price) };
            }
        }
        else if ( productsData.hasOwnProperty(productName) && ! productsData.hasOwnProperty(townName) ) {

            productsData = { "productName": productName ,"townName": townName,  "productPrice": Number(price) };
        }

    }
    printOutput(productsData);
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);

/*
    Sample Product -> 1000 (Sample Town)
    Orange -> 2 (Sample Town)
    Peach -> 1 (Sample Town)
    Burger -> 10 (New York)
*/

solve(['Sofia City | Audi | 100000',                        
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']
    );


/*  Audi -> 100000 (Sofia City)
    BMW -> 99999 (Mexico City)
    Mitsubishi -> 1000 (New York City)
    Mercedes -> 1000 (Washington City)
    NoOffenseToCarLovers -> 0 (Sofia City)
*/