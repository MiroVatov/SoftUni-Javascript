function arrayManipulator(inputArray, commands) {
    let initialArray = inputArray;

    for (let command of commands){
        let c = command.split(' ');
        let actualCommand = c[0];
        if (actualCommand === 'add'){
            let element = Number(c[2]);
            let index = Number(c[1]);
            if (checkIndex(initialArray, index)){
                initialArray.splice(index, 0, element);
            }
        }

        else if (actualCommand === 'addMany'){
            let index = Number(c[1]);

            let arrayToAdd = c.slice(2).map((x => Number(x)));
            let counter = 0;
            for (let i = 0; i < arrayToAdd.length; i++) {
                let elementToAdd = arrayToAdd[counter];
                initialArray.splice(index, 0, elementToAdd);   // IT can be done with he spread operator -> initialArray.splice(index, 0, ...arrayToAdd);
                counter += 1;
                index += 1;
                }
            }

        else if(actualCommand === 'contains'){
            let element = Number(c[1]);
            console.log(initialArray.indexOf(element));
        }
        else if (actualCommand === 'remove'){
            let index = Number(c[1]);
            if (checkIndex(initialArray, index)){
                initialArray.splice(index, 1);
            }
        }
        else if (actualCommand === 'shift'){
            let index = Number(c[1]);
            if (checkIndex(initialArray, index)){
                let partToMove = initialArray.splice(0, index);
                for (let el of partToMove) {
                    initialArray.push(el);
                }
            }
        }

        else if (actualCommand === 'sumPairs'){
            let newArray = [];
            while (initialArray.length > 0){
                let elementsToSum = initialArray.splice(0, 2);
                let sum = 0;
                for (let digit of elementsToSum){
                    sum += digit;
                }
                newArray.push(sum);
            }
            initialArray = newArray;
        }
        else if (actualCommand === 'print'){
            console.log(`[ ${initialArray.join(', ')} ]`);
            break;
        }
    }

    function checkIndex(initialArray, index){
        return index < initialArray.length && index >= 0;
    }

}



arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'addMany 4 9 8 9 8 9 8', 'contains 3', 'print']);
arrayManipulator([1, 2, 4, 5, 6, 7],
['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'shift 2', 'sumPairs','print']);
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'add 1 8', 'contains 1', 'contains 3', 'shift 2', 'print']);
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
arrayManipulator([1, 2, 3, 4, 5],
["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]);