function distinctArrayVer2(input) {
    let output = [];
    for (let i = 0; i < input.length; i++){
        if (! output.includes(input[i])){
            output.push(input[i]);
        }
    }
    return output.join(' ');
}

console.log(distinctArrayVer2([7, 8, 9, 7, 2, 3, 4, 1, 2]));
console.log(distinctArrayVer2([20, 8, 12, 13, 4, 4, 8, 5]));