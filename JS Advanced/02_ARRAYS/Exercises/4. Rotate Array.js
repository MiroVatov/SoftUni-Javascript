function solve(inputArray, rotations) {
    
    for (let i = 0; i < rotations; i++){
        let element = inputArray.pop();
        inputArray.unshift(element);
    }
    console.log(inputArray.join(' '));
}

solve(['1', 
'2', 
'3', 
'4'], 
2
);

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);