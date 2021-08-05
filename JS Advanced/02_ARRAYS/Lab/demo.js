function solve(inputArr) {
    
    let newOutput = [];
    for (let i = 1; i < inputArr.length; i += 2){
        newOutput.push(inputArr[i]);
    }
    let output = newOutput.map(n => n * 2);

    let sorted = output.reverse();
    
    return sorted.join(' ');
}