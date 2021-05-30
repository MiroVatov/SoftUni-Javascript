function searchForNumber(inputArray, details) {
    let numberOfElementsToTake = details[0];  // NOTE -> number of elements you have to take from the first array -> starting from the first one;
    let numberOfElementsToDelete = details[1];
    let searchedNumber = details[2];
    let newArr = inputArray.slice(0, numberOfElementsToTake);
    newArr.splice(0, numberOfElementsToDelete);
    if (newArr.includes(searchedNumber)){
        let counter = 0;
        for (let el of newArr){
            if (el === searchedNumber){
                counter += 1;
            }
        }
        console.log(`Number ${searchedNumber} occurs ${counter} times.`)
    }
    else {
        console.log(`Number ${searchedNumber} occurs 0 times.`)
    }
}

searchForNumber([5, 2, 3, 4, 1, 6],
[5, 2, 3]);

searchForNumber([5, 2, 3, 4, 1, 6],
[5, 2, 3]);

searchForNumber([5, 2, 3, 4, 1, 6, 3, 6, 1, 9],
[6, 5, 3]);

searchForNumber([]);