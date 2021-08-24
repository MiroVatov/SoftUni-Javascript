function getFibonator() {
    let sequence = [0];
    let nextNumber = 1;
    sequence.push(nextNumber);
    return function next () {
        nextNumber = sequence[sequence.length -1] + sequence[sequence.length - 2];
        sequence.push(nextNumber);
        return sequence[sequence.length - 2];
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
