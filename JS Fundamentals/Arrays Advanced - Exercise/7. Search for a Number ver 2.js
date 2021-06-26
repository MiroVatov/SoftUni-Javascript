function searchForANumber(firstArray, elementsData){
    let numberOfElementsToTake = elementsData[0];
    let numberOfElementsToDelete = elementsData[1];
    let searchedElement = elementsData[2];

    firstArray = firstArray.splice(0, numberOfElementsToTake);
    firstArray.splice(0, numberOfElementsToDelete);

    let numberOfOccurences =  firstArray.filter(v => (v === searchedElement)).length;
    console.log(`Number ${searchedElement} occurs ${numberOfOccurences} times.`)
}

searchForANumber([5, 2, 3, 4, 1, 6],
[5, 2, 3]
);
searchForANumber([5, 2, 3, 4, 1, 6],
[5, 2, 3]
);