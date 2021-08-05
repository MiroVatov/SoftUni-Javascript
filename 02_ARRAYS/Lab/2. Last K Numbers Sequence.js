function solve(sequenceLength, previousElements) {
    let newArr = [1];
    for (let i = 1; i < sequenceLength; i++){
        if (newArr.length <= previousElements){
            let element = newArr.reduce((a,b) => a + b, 0);
            newArr.push(element);
        }
        else{
            let startIndex = i - previousElements;
            let elementsToSum = newArr.slice(startIndex, i + 1);
            element = elementsToSum.reduce((a, b) => a + b, 0);
            newArr.push(element);
        }
    }
    return newArr
}

console.log(solve(6, 3));

console.log(solve(8, 2));