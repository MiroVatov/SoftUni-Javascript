function solve(params) {
    let maxNum = -1_000_000;
        for (let outer of params){
            for ( let inner of outer){
                if (inner > maxNum){
                    maxNum = inner;
            }
        }
    }
    return maxNum;
}

console.log(solve([
    [20, 50, 10],
    [8, 33, 145]]
));

console.log(solve([
    [3, 5, 7, 12],
     [-1, 4, 33, 2],
     [8, 3, 0, 4]
]
));