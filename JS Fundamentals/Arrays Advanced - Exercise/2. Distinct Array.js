function distinctArray(inputArr) {

    let itemsToDelete = [];
    for (let i = 0; i < inputArr.length; i++){
        let searchedItem = inputArr[i];

        for (let j = i + 1; j < inputArr.length; j++){
            let itemToCompare = inputArr[j];
            if (searchedItem === itemToCompare){
                itemsToDelete.push(searchedItem);
            }
        }
    }
    for (let element = 0; element <= itemsToDelete.length; element++){
        let lastIndex = 0;
        if (itemsToDelete.length === 1){
            element = 0;
        }
        else {
            lastIndex = inputArr.indexOf(itemsToDelete[element], 2);
            }

        inputArr.splice(lastIndex, 1);
        let removeItems = itemsToDelete.indexOf(itemsToDelete[element]);
        itemsToDelete.splice(removeItems, 1);
            }
    console.log(inputArr.join(' '));

        }
// console.log(itemsIndexesToDelete.join(', '))

distinctArray([1, 2, 3, 4]);
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
