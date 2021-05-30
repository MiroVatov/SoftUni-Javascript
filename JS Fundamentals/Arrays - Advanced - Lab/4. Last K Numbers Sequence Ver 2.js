function lastKNumbersSequenceVer2(n, k){
    let arr = [1,];
    for (let i = 1; i < n; i++){
        let res = sumLastK(arr, k);
        arr.push(res);
        }
    console.log(arr.join(' '));
    }

    function sumLastK(arr, k) {
        let result = 0;
        let elementsToAdd = arr.slice(-k);
        for (let el of elementsToAdd) {
            result += el;
        }
        return result;
}

lastKNumbersSequenceVer2(6, 3);
lastKNumbersSequenceVer2(6, 3);
lastKNumbersSequenceVer2(8, 2);