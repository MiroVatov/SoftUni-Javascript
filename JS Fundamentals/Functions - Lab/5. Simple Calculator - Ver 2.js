function simpleCalculator(numOne, numTwo, operator) {

    if (operator === 'multiply'){
       let result = (numOne, numTwo) => numOne * numTwo;
       console.log(result(numOne, numTwo));
    }

    else if (operator === 'divide'){
        let divide = (numOne, numTwo) => numOne / numTwo;
        console.log(divide(numOne, numTwo));
    }

    else if (operator === 'add'){
        let add = (numOne, numTwo) => numOne + numTwo;
        console.log(add(numOne, numTwo));
    }

    else if (operator === 'subtract'){
        let subtract = (numOne, numTwo) => numOne - numTwo;
        console.log(subtract(numOne, numTwo));
    }

}

simpleCalculator(5, 10, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');