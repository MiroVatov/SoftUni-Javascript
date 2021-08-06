function solve(inputArray) {
    // function createMatrix(d1, d2) {
        // let arr = [];
        // for(let i = 0; i < d2; i++) {
            // arr.push(new Array(d1));
        // }
        // return arr;
        // }

    let directions = [-1, 0, -1, +1, 0, +1, +1, +1, +1, 0, +1, -1, 0, -1, -1, -1];

    function createMatrix(r, c) {
        myArray = [];
        for (let i = 0; i < r; i++){
            myArray[i] = [];
            for (let j = 0; j < c; j++){
                myArray[i][j] = null;
            }
        }
        return myArray;
    }

    // function createMatrix(rows, cols) {
        // let myArray = new Array(rows);

        // for (let i = 0; i < inputArray.length; i++){
            // myArray[i] = new Array(cols);
        // }
        // return myArray;
    // }
    
    let [ widtht, height, x, y ] = inputArray;
    let matrix = createMatrix(widtht, height);

    matrix[x][y] = 1;
    // console.log(matrix);

    let iterations = 0;
    let lastIndex = matrix.length - 1;
    let middle = 
    
    console.log(lastIndex);
    
    console.log();

}

solve([4, 4, 0, 0]);

solve([5, 5, 2, 2]);

solve([3, 3, 2, 2]);

solve([5, 5, 3, 3]);

solve([6, 6, 1, 1]);