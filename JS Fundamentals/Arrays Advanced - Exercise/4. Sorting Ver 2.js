function sortingVer2(inputArr){
    let decrementedArr = inputArr.slice();
    decrementedArr.sort((a, b) => b - a);
    let finalArr = [];
    while(decrementedArr.length > 0){
        let beginningElement = decrementedArr.shift();
        finalArr.push(beginningElement);
        let endElement = decrementedArr.pop();
        finalArr.push(endElement);
    }
    console.log(finalArr.join(' '));
}

sortingVer2([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);