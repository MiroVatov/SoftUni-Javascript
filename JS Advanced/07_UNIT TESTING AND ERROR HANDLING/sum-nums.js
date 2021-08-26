function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += +num;
    }
    return sum;
}

// sum([1, 2, 3]);


module.exports = { sum };