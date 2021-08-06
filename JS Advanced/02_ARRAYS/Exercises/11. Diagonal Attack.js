function solve(inputMatrix) {
     function createMatrix(inputMatrix) {
         let newMatrix = [];
         for (let i = 0; i < inputMatrix.length; i++){
             newMatrix[i] = inputMatrix[i].split(' ').map(x => Number(x));
         }
         return newMatrix;
     }

    let matrix = createMatrix(inputMatrix);
    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++){
            console.log(matrix[i].join(' '));
        }
    }
     function primarySum(matrix) {
         let index = 0;
         let sum = 0;
         for ( let i = 0; i < matrix.length; i++ ){
            index = i;
            sum += matrix[i][index];
        }
         return sum;
     }
    function secondarySum(matrix) {
        let index = 0;
         let sum = 0;
         for ( let a = matrix.length - 1; a >= 0; a-- ){
            sum += matrix[a][index];
            index++;
        }
         return sum;
    }

    let sumPrimaryDiagonal = primarySum(matrix);
    let sumSecondaryDiagonal = secondarySum(matrix);

    function changeMatrix(matrix) {
        let index = matrix.length - 1;
        for ( let i = 0; i < matrix.length; i++ ){
            for (let j = 0; j < matrix[i].length; j++){
                if ( j === i || index === j ){
                }
                else{
                    matrix[i][j] = sumPrimaryDiagonal;
                }
            }
            index--;
        }
        return matrix;
    }

    if (sumPrimaryDiagonal === sumSecondaryDiagonal) {
        matrix = changeMatrix(matrix);
        printMatrix(matrix);
    }
    else {
        printMatrix(matrix);
    }
}

solve(['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']
                );

solve(['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']
                );

solve(['1 1 1',
                '1 1 1',
                '1 1 0']
                );