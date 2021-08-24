function solve(inputArray, condition) {

    if ( condition === 'asc' ){
        inputArray.sort((a, b) => a - b);
    } else {
        inputArray.sort((a, b) => b - a);
    }
    return inputArray;
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));

console.log(solve([14, 7, 17, 6, 8], 'desc'));