function janNotation(operatorsArray) {

    let operands = [];
    let possibleOperations =['+', '-', '*','/'];

    for (let i = 0; i < operatorsArray.length; i++){
        let element = operatorsArray[i];
        if (typeof element === 'number'){
            operands.push(element)
        }
        else{
            if (possibleOperations.includes(element)){
                if (operands.length < 2){
                    return "Error: not enough operands!";
                }
                else {
                        let result = 0;
                        let operandOne = operands[operands.length - 2];
                        let operandTwo = operands[operands.length - 1];
                        operands.pop();
                        operands.pop();
                        if (element === '+') {
                            result = operandOne + operandTwo;
                        } else if (element === '-') {
                            result = operandOne - operandTwo;
                        } else if (element === '*') {
                            result = operandOne * operandTwo;
                        } else if (element === '/') {
                            result = operandOne / operandTwo;
                        }
                        operands.push(result);
                }
            }
        }
    }
    if (operands.length > 1){
        return "Error: too many operands!"
    }
    else{
        return operands.join('')
    }
}

console.log(janNotation([3, 4, '+']));

console.log(janNotation([3, 4, '+']));
console.log(janNotation([5, 3, 4, '*', '-']));
console.log(janNotation([7, 33, 8, '-']));
console.log(janNotation([15, '/']));
console.log(janNotation([31, 2, '+', 11, '/']));
console.log(janNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']));
