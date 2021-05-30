function revArrayOfStrings(inputArr) {
    let newArr = "";
    for (let i = inputArr.length - 1; i >= 0 ; i--){
        newArr += inputArr[i] + ' '
    }
    console.log(newArr);
}

revArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
revArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
revArrayOfStrings(['33', '123', '0', 'dd']);