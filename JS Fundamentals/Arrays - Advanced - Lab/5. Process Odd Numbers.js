function processOddNumbers(arr) {
    let oddArr = [];
    for (let i = 0; i < arr.length; i++){
        if (i % 2 === 1){
            oddArr.push(arr[i]);
        }
    }
    let newArr = oddArr.map(x => x * 2).reverse();
    console.log(newArr.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);