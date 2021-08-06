function solve(params) {
    let output = [];
    let initialNumber = 0;
    // let currentNumber = 0;
    for (let command of params){
        initialNumber += 1;
        if (command === 'add'){
            // currentNumber = initialNumber;
            output.push(initialNumber);
        }
        else{
            output.pop();
        }
    }
    if (output.length > 0){
        console.log(output.join('\n'));
    }
    else{
        console.log('Empty');
    }
}

solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);