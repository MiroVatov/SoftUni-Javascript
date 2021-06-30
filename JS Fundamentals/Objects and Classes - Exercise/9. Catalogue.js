function catalogue(productsString) {
    let products = [];
    for (let prod of productsString){
        products.push(prod);
    }
    let sortedArr = products.sort((a, b) => a.localeCompare(b));
    let count = 0;
    let previousLetter = '';
    for (let i = 0; i < sortedArr.length; i++){
        let word = sortedArr[i];
        let firstLetter = word[0];
        if (firstLetter !== previousLetter){
            count = 0;
        }
        if (word.startsWith(firstLetter) && count === 0 && firstLetter !== previousLetter) {
            console.log(firstLetter);
            word = word.split(' : ');
            word = word[0] + ': ' + word[1];
            console.log(`  ${word}`);
            count += 1;
            previousLetter = word[0];
        }
        else{
            word = word.split(' : ');
            word = word[0] + ': ' + word[1];
            console.log(`  ${word}`);
            previousLetter = word[0];

        }
    }

}

    /* TODO check if the array is with objects with nam and price */


catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant: 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
    'AliBaba : 23',
    'TommyGun : 10']);