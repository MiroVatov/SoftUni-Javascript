function condense(array) {
    var totalSum = 0;
    if (array.length === 1){
        totalSum = Number(array[0]);
    }
    while (array.length > 1) {
        let newArr = [];

        for (let i = 0; i < array.length - 1; i++) {
            var currentSum = 0;
            let currentElement = Number(array[i]);
            let nextElement = Number(array[i + 1]);
            currentSum += (currentElement + nextElement);
            newArr[i] = currentSum;

        }
        array.shift();
        array = newArr;
        totalSum = currentSum;
    }

    console.log(totalSum);
}

condense([2,10,3]);
condense([5,0,4,1,2]);
condense([1]);