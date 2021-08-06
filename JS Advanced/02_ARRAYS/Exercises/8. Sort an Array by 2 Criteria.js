function solve(inputArray) {
    let sortedArray = inputArray.sort((a, b) => a.localeCompare(b)
    ).sort((a, b) => a.length - b.length);
    console.log(sortedArray.join('\n'));
}               

solve(['alpha', 
'beta', 
'gamma']
);

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);

solve(['test', 
'Deny', 
'omen', 
'Default']
);