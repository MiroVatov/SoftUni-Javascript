function processOddNumbersVer2(arr) {

    let filtered = arr.filter((val, ind) => ind % 2 === 1);
    let doubled = filtered.map(x => x * 2).reverse();

    console.log(doubled.join(' '));
}

processOddNumbersVer2([10, 15, 20, 25]);
processOddNumbersVer2([10, 15, 20, 25]);
processOddNumbersVer2([3, 0, 10, 4, 7, 3]);