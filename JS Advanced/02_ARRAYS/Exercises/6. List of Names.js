function solve(inputArray) {
    let sorted = inputArray.sort((a, b) => a.localeCompare(b));
    let index = 1;
    for (let name of sorted){
        console.log(`${index}.${name}`);
        index++;
    }
}

solve(["John", "Bob", "Christina", "Ema"]);
