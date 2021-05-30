function reversedArray(n, inputArray) {
    let newArr = inputArray.slice(0, n).reverse().join(' ');
    console.log(newArr)
}

reversedArray(3, [10, 20, 30, 40, 50])
reversedArray(4, [-1, 20, 99, 5])
reversedArray(2, [66, 43, 75, 89, 47])