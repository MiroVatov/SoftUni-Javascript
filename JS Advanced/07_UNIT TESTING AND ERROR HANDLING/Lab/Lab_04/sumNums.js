function sum(arr) {
    return arr.reduce((acc, curr) => acc + +curr, 0);
}

function product(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
}

console.log(sum([1, 2, 3]));

console.log(product( [2, 2, 3]));

module.exports = { sum, product };