function solve(inputArray, step) {
    let output = [];
    for (let i = 0; i < inputArray.length; i+= step){
        output.push(inputArray[i]);
    }
    return output;
}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));

console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2
));

console.log(solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
));