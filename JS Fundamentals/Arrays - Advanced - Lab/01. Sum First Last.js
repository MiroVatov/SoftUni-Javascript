function sumFirstLast(arr) {
    arr = arr.map(Number);
    let first = arr.shift();
    let last = arr.pop();
    console.log(first + last);
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);