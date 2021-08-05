function solve(params) {
    let primary = [];
    let secondary = [];
    let output = [];
    let index = 0;
    for ( let i = 0; i < params.length; i++ ){
        index = i;      
        primary.push(params[i][index]);
    }
    
    let primarySum = 0;
    primarySum = primary.reduce((a, b) => a + b, 0);
    output.push(primarySum);

    index = 0;
    for (let a = params.length - 1; a >= 0; a--){
        secondary.push(params[a][index]);
        index ++;
        }
    
    let secondarySum = 0;
    secondarySum = secondary.reduce((a, b) => a + b, 0);
    output.push(secondarySum);
    console.log(output.join(' '));
    }

solve([[20, 40],
    [10, 60]]
   );

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );