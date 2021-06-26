function equalNeighbors(inputMatrix) {
    let pairsFound = 0;
    for (let i = 0; i < inputMatrix.length; i++) {
        let innerArray = inputMatrix[i];
        for (let j = 0; j < innerArray.length; j++){
            let currentElement = inputMatrix[i][j];
            if (i < inputMatrix.length - 1) {
                let elementToCompareV = inputMatrix[i + 1][j];
                if (currentElement === elementToCompareV) {
                    pairsFound += 1;
                }
            }
            let nextElement = inputMatrix[i][j + 1]
            if (currentElement === nextElement){
                pairsFound += 1;
            }
        }
    }
    return pairsFound;
}


console.log(equalNeighbors([
 ['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']]
));

console.log(equalNeighbors([
 ['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']]
));


console.log(equalNeighbors([
 ['test', 'yes', 'yo', 'ho'],
 ['well', 'done', 'yo', '6'],
 ['not', 'done', 'yet', '5']]
));

console.log(equalNeighbors([
["2", "2", "5", "7", "4"],
["4", "0", "5", "3", "4"],
["2", "5", "5", "4", "2"]]
));