function negativePositiveNum(arr) {
    let newArr = [];
    for (let element of arr){
        if (element >= 0){
            newArr.push(element);
        }
        else {
            newArr.unshift(element);
        }
    }
    console.log(newArr.join('\n'));
}

negativePositiveNum([7, -2, 8, 9]);
negativePositiveNum([3, -2, 0, -1]);