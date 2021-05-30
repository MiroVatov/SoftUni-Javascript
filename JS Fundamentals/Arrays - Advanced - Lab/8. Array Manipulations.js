function arrayManipulations(inputArr) {
    let arrayToManipulate = inputArr.shift();
    let finalArray = arrayToManipulate.split(' ').map(Number);
    for (let command of inputArr){
        let actualCommand = command.split(' ').shift();
        if (actualCommand ==='Add'){
            let item = findIndexOrItem(command);
            finalArray.push(Number(item));
        }
        else if (actualCommand ==='Remove') {
            let item = Number(findIndexOrItem(command));
            if (finalArray.includes(Number(item))) {
                let indexOfItem = finalArray.indexOf(item);
                finalArray = removeElement(finalArray, indexOfItem);
            }
        }
        else if (actualCommand ==='RemoveAt'){
            let index = Number(findIndexOrItem(command));
            if (index >= 0 && index < finalArray.length){
                finalArray = removeElement(finalArray, index);
                }
            }
        else if (actualCommand === 'Insert'){
            let valueToAdd = command.split(' ')[1];
            let index = findIndexOrItem(command);
            finalArray.splice(Number(index), 0, Number(valueToAdd));
            }
        function findIndexOrItem(command) {
            return command.split(' ').pop();
        }
        function removeElement(finalArray, index) {
            finalArray.splice(index, 1);
            return finalArray;
        }
        }
        console.log(finalArray.join(' '))
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);