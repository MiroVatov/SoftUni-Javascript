function solve(inputArr) {

    let isMagical = true;
    let previousSum = 0;

    function checkIfMatrixIsSquare(inputArr) {

        for ( let i = 0; i < inputArr.length; i++ ){
            if (inputArr.length !== inputArr[i].length){
                return false;
            }
        }
        return true;
    }
    if ( checkIfMatrixIsSquare(inputArr) === true ) {
        
        for (let i = 0; i < inputArr.length; i++) {
            let currentSum = 0;
            for (let j = 0; j < inputArr[i].length; j++) {
                currentSum += inputArr[i][j];
            }
            if (currentSum !== previousSum && i > 0) {
                isMagical = false;
                break;
            }
            previousSum = currentSum;
        }
        if (isMagical === true) {
            for (let a = 0; a < inputArr.length; a++) {
                let currentSum = 0;
                for (let b = 0; b < inputArr[a].length; b++) {
                    currentSum += inputArr[b][a];
                }
                if (currentSum !== previousSum) {
                    isMagical = false;
                    break;
                }
                previousSum = currentSum;
            }
        }

        console.log(isMagical);
    }
    else {
        isMagical = false;
        console.log(isMagical);
    }
}

solve([[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]
);

solve([[4, 5, 6],
 [6, 5, 4],
 ]
);

solve([[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]
);

solve([[11, 32, 45],
 [21, 0, 1],
 [21, 1, 1]]
);

solve([[1, 0, 0],
 [0, 0, 1],
 [0, 1, 0]]
);