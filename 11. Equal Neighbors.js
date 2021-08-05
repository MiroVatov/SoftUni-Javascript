function solve(params) {
    let equalPairs = 0;
    for (let row = 0; row < params.length; row++){
        for (let col = 0; col < params[row].length; col++){
            let current = params[row][col];
            let nextHotizontal = params[row][col + 1];
            if (nextHotizontal === current){
                equalPairs += 1;
            }
            if (row < params.length - 1){
            let nextVertical = params[row + 1][col];
                if (nextVertical === current){
                    equalPairs += 1;
                }
        }
    }
}
    console.log(equalPairs);
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);

solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);

solve([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]);