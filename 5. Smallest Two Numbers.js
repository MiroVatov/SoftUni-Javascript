function solve(params) {
    let sorted = params.sort((a, b) => a - b);
    let [ first, second ] = sorted;
    console.log(first, second);
}

solve([30, 15, 50, 5]);

solve([3, 0, 10, 4, 7, 3]);
