function solve(inputArray) {
    let productsDict = {};

    for ( let data of inputArray ){
        let firstLetter = data[0];
        let [ productName, productPrice ] = data.split(' : ');
        if ( ! productsDict.hasOwnProperty(firstLetter) ){
            productsDict[firstLetter] = [{productName: productName, productPrice: Number(productPrice)}];
        }
        else{
            productsDict[firstLetter].push({productName: productName, productPrice: Number(productPrice)});
        }
    }


    let sorted = Object.entries(productsDict).sort((a, b) => a[0].localeCompare(b[0]));

    function printData(sorted) {
        for ( let prodInfo of sorted){
            console.log(prodInfo[0]);
            for ( let inner of prodInfo[1].sort((a, b) => a.productName.localeCompare(b.productName))){
                console.log(` ${inner.productName}: ${inner.productPrice}`);
            }
        }
    }
    printData(sorted);

}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);

solve(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
);