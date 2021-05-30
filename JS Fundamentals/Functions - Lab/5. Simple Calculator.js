function simpleCalculator(numOne, numTwo, operator) {
    let result = 0;

    if (operator === 'multiply'){
        result = multiply(numOne, numTwo);
    }
    else if (operator === 'divide'){
        result = divide(numOne, numTwo);
    }

    else if (operator === 'add'){
        result = add(numOne, numTwo);
    }

    else if (operator === 'subtract'){
        result = subtract(numOne, numTwo)
    }

    console.log(result);

    function multiply(numOne, numTwo) {
        return numOne * numTwo;
    }

    function divide(numOne, numTwo) {
        return numOne / numTwo;
    }

    function add(numOe, numTwo) {
        return numOne + numTwo;
    }

    function subtract(numOne, numTwo) {
        return numOne - numTwo;
    }
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');