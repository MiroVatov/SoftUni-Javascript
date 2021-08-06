// Version 1

// function solve(inputArray) {
//     let biggestNum = -1_000_000;
//     let output = [];
//     for (let num of inputArray){
//         if (num >= biggestNum){
//             biggestNum = num;
//             output.push(num);
//         }
//     }
    
//     return output;
// }


// Version 2

function solve(inputArray) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let output = [];
    output = inputArray.reduce((acc, curr) => {
        if (curr >= maxNumber){
            maxNumber = curr;
            output.push(maxNumber);
        }
        return output;
    }, []);
    return output;
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
));

console.log(solve([1, 
    2, 
    3,
    4]
));

console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
));
