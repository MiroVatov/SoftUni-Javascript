function solve(inputArr) {
    let first = Number(inputArr[0]);
    let last = Number(inputArr.pop());
    return first + last;
}

console.log(solve(['20', '30', '40']));

console.log(solve(['5', '10']));