// function solve(height, width) {
//     function createMatrix(h, w) {
//         let mtx = [] ;
//         for ( let i = 0; i < h; i++ ){
//             mtx[i] = [];
//             for ( let j = 0; j < w; j++ ){
//                 mtx[i].push(0);
//             }
//         }
//     return mtx;
//     }
//
//     function printMatrix(matrix) {
//         for (let i = 0; i < matrix.length; i++) {
//             console.log(matrix[i].join(' '));
//         }
//     }
//
//     let matrix = createMatrix(height, width);
//     printMatrix(matrix);
//
//
// }


function solve(n, m) {

    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }
    let total = n*m;
    let result= [];

    for(let i=0;i<n;i++) {
        let rs = [];
        for(let j=0;j<n;j++) {
            rs.push(0);
        }
        result.push(rs);
    }

    let x=0;
    let y=0;
    let step = 0;
    for(let i=0;i<total;){
        while(y+step<n){
            i++;
            result[x][y]=i;
            y++;

        }
        y--;
        x++;

        while(x+step<n){
            i++;
            result[x][y]=i;
            x++;
        }
        x--;
        y--;

        while(y>=step){
            i++;
            result[x][y]=i;
            y--;
        }
        y++;
        x--;
        step++;

        while(x>=step){
            i++;
            result[x][y]=i;
            x--;
        }
        x++;
        y++;
    }
     printMatrix(result);
}


solve(5, 5);

solve(5, 5);

solve(3, 3);