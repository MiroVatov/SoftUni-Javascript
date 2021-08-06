function solve(inputArray) {

    let sortedArray = [];
    let len = inputArray.length / 2;
    for (let i = 0; i < len; i++){
        let maxNum = Math.max(...inputArray);
        let minNum = Math.min(...inputArray);
        sortedArray.push(minNum);
        if (inputArray.length > 1){
        sortedArray.push(maxNum);
        }
        let maxIndex = inputArray.indexOf(maxNum);
        inputArray.splice(maxIndex, 1);
        let minIndex = inputArray.indexOf(minNum);
        inputArray.splice(minIndex, 1);
    }
    return sortedArray;
    

    
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 9]));