function solve(params) {
    let output = [];
    let sorted = params.sort((a, b) => a - b);
    let middle = sorted.length / 2;
    if (middle % 2 === 0){
        output = sorted.slice(middle);
    }
    else{
        output = sorted.slice(Math.floor(middle));
    }
    return output;
}

console.log(solve([4, 7, 2, 5]));

console.log(solve([3, 19, 14, 7, 2, 19, 6]));