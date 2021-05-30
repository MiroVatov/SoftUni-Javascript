function lastKNumbersSequence(n, k){
    let arr = [1,];
    for (let i = 1; i < n; i++){
        let elementsToAdd = arr.slice(-k);
        let result = 0;
        for (let el of elementsToAdd){
            result += el;
        }
        arr.push(result);
    }
    console.log(arr.join(' '))
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);