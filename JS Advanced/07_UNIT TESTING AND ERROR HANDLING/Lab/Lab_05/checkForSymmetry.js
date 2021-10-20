function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    return (JSON.stringify(arr) === JSON.stringify(reversed));
}

// input array is not symmetric
console.log(isSymmetric([1, 2, 3]))

// input array is not an array
console.log(isSymmetric({'1': '1, 2, 3'}))

// input array is symmetric
console.log(isSymmetric([1, 2, 3, 2, 1]))

// input array is empty
console.log(isSymmetric([]));

console.log(isSymmetric([1]));

console.log(isSymmetric(["1", 1]));

console.log(1 === '1');

module.exports = { isSymmetric };