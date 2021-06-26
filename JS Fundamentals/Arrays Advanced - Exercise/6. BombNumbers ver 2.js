function bombNumbers(bombsSequence, bombData){
    let bombNumber = bombData[0];
    let bombPower = bombData[1];

    function findBomb(bombsSequence, bomb){
        if (bombsSequence.includes(bomb)){
            return bombsSequence.indexOf(bomb)
        }
        else{
            return undefined
        }
    }

    function checkIfStartIndexIsValid(bombsSequence, startIndex){
        return startIndex >= 0;
    }

    function checkIfEndIndexIsValid(bombsSequence, endIndex){
        return endIndex < bombsSequence.length
    }

    while (findBomb(bombsSequence, bombNumber) !== undefined){
        let bombIndex = findBomb(bombsSequence, bombNumber);
        let startIndex = bombIndex - bombPower
        if (! checkIfStartIndexIsValid(bombsSequence, startIndex)){
            startIndex = 0;
        }

        let endIndex = bombIndex + bombPower
        if (! checkIfEndIndexIsValid(bombsSequence, endIndex)){
            endIndex = bombsSequence.length - 1
        }
        let index = startIndex
        while (index <= endIndex){
            bombsSequence.splice(startIndex, 1);
            index += 1;
        }
    }

    // let sumLeftElements = 0;
    //  if (bombsSequence.length > 0){
    //     for (let el of bombsSequence) {
    //         sumLeftElements += el;
    //     }
    //  }
    //  return sumLeftElements;

    return bombsSequence.reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0)
}


console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]));
console.log(bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]));
console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));