function sorting(inputArr) {
    let incrementedArr = inputArr.slice();
    let decrementedArr = inputArr.slice();
    let finalArr = [];
    let len = inputArr.length;
    for (let j = 0; j < inputArr.length; j++){
        finalArr.push(0);
    }
    incrementedArr = incrementedArr.sort((a, b) => a - b);
    decrementedArr = decrementedArr.sort((a, b) => b - a);

    let counter = 0;
    for (let i = 0; i < len; i += 2){

        let incrementedValue = incrementedArr[counter];
        let decrementedValue = decrementedArr[counter];
        finalArr[i] = decrementedValue;
        finalArr[i + 1] = incrementedValue;
        counter += 1;
    }
    if (inputArr.length % 2 !== 0){
        finalArr.pop();
    }
    console.log(finalArr.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 55, 9, 2]);