function negativePositive(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let element = arr[i];
        if (element >= 0){
            newArr.push(element);
        }
        else {
            newArr.unshift(element);
        }
    }
    console.log(newArr.join('\n'));
}

negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);