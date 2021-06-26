function buildAWall(inputArray) {

    let floorLimit = 30;

    inputArray = inputArray.map(x => +x);

    function checkIfFloorsAreFull(inputArray) {

        for (let i = 0; i < inputArray.length; i++){
            if (inputArray[i] === floorLimit){
                inputArray[i] = undefined;
            }
        }
        inputArray = inputArray.filter(x => x !== undefined);
        return inputArray;
    }

    let daysWorked = [];
    while (inputArray.length > 0){
        inputArray = checkIfFloorsAreFull(inputArray);
        for (let i = 0; i < inputArray.length; i++){
            inputArray[i] += 1;
        }
        let concretePerDay = inputArray.length * 195;
        daysWorked.push(concretePerDay);
        inputArray = checkIfFloorsAreFull(inputArray);
    }

    let finalCost = daysWorked.reduce((acc, curr) => {
        acc += (curr * 1900);
        return acc;
    }, 0)
    console.log(daysWorked.join(', '));
    return `${finalCost} pesos`

}

// console.log(buildAWall([21, 25, 28]));
//
// console.log(buildAWall([21, 25, 28]));
//
// console.log(buildAWall([17]));
//
// console.log(buildAWall([17, 22, 17, 19, 17]));

console.log(buildAWall([30]));

console.log(buildAWall([30]));