function bombNumbers(initialSequence, bombN) {
     let bombNumber = bombN.shift();
     let bombPower = bombN.shift();

     for (let i = 0; i < initialSequence.length; i++){
         let sequenceValue = initialSequence[i];
         let bombIndex = 0;
         if (sequenceValue === bombNumber){
             bombIndex = initialSequence.indexOf(bombNumber);
             let endIndex = bombIndex + bombPower;
             let startIndex = bombIndex - bombPower;
             let numberOfElementsToDelete = 0;
             if (checkStartAndEndIndexes(startIndex, endIndex)){

                 numberOfElementsToDelete = (bombPower * 2) + 1;
                 initialSequence.splice(startIndex, numberOfElementsToDelete);
             }

             else if (checkStartIndex(startIndex) && ! checkEndIndex(endIndex)){
                 let lastIndex = initialSequence.length - 1;
                 numberOfElementsToDelete = initialSequence.slice(startIndex, lastIndex + 1);
                 initialSequence.splice(startIndex, numberOfElementsToDelete.length);
             }
             else if (checkEndIndex(endIndex) && ! checkStartIndex(startIndex)){
                 numberOfElementsToDelete = endIndex + 1;
                 initialSequence.splice(0, numberOfElementsToDelete.length);
             }
         }
         function checkStartAndEndIndexes(startIndex, endIndex) {
             return startIndex >= 0 && endIndex < initialSequence.length;
         }

         function checkStartIndex(startIndex) {
             return startIndex >= 0;
         }
         function checkEndIndex(initialSequence, endIndex) {
              return endIndex < initialSequence.length;
         }
     }
     let sumLeftElements = 0;
     if (initialSequence.length > 0){
        for (let el of initialSequence) {
            sumLeftElements += el;
        }
     }
     return sumLeftElements;
}

console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]));
console.log(bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]));
console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));
 