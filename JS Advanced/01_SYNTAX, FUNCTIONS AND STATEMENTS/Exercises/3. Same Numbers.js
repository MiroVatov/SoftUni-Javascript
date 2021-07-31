function solve(inputNumber) {
    inputNumber = Array.from(String(inputNumber));
    let equal = true;
    let sumNumbers = 0;
    for (let i = 0; i < inputNumber.length; i++){
        var currentNum = inputNumber[i];
        let nextNum = inputNumber[i + 1];
        sumNumbers += Number(currentNum);
    
        if (currentNum !== nextNum && nextNum !== undefined){
            let leftArray = inputNumber.slice(i + 1);
            sumNumbers += leftArray.reduce(function(acc , currVal){
                return acc + Number(currVal)} , 0);
            equal = false;
            break;
        }
    }
    console.log(`${equal}` + '\n' + `${sumNumbers}`);

}

solve(2222222);

solve(1234);