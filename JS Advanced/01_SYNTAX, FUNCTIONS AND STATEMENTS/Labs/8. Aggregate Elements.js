function solve(inputArray) {
    let sum = inputArray.reduce(function(p,n){
        return p+n;
       },0);
       console.log(sum);

    let invertedSum = inputArray.reduce(function(acc , currVal){
        return acc + 1 / currVal;
    }, 0);
        console.log(invertedSum);
    let concatedResult = inputArray.join('');
    console.log(concatedResult); 
}

solve([1, 2, 3]);

solve([2, 4, 8, 16]);
