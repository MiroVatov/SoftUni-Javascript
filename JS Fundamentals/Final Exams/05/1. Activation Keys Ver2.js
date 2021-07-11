function solve(inputData){
    let actions = {

        Contains(activationKey, substring){
            if (activationKey.includes(substring)){
                console.log(`${activationKey} contains ${substring}`)
            }
            else{
                console.log(`Substring not found!`);
            }
            return activationKey;
        },

        Flip(activationKey, caseUpperOrLower, startIndex, endIndex) {
            [startIndex, endIndex] = [Number(startIndex), Number(endIndex)];
            let substring = activationKey.substring(startIndex, endIndex);
            if (caseUpperOrLower === 'Upper') {
                let newSubstring = substring.toUpperCase();
                activationKey = activationKey.slice(0, startIndex) + newSubstring + activationKey.slice(endIndex);
            }
            else if (caseUpperOrLower === 'Lower'){
                let newSubstring = substring.toLowerCase();
                activationKey = activationKey.slice(0, startIndex) + newSubstring + activationKey.slice(endIndex);
            }
            console.log(activationKey);
            return activationKey;
            },

        Slice(activationKey, startIndex, endIndex){
            activationKey = activationKey.slice(0, startIndex) + activationKey.slice(endIndex);
            console.log(activationKey);
            return activationKey;
            }
    }


    let activationKey = inputData.shift();
    let line;


    while ((line = inputData.shift()) !== 'Generate'){
        let tokens = line.split('>>>');
        let actionName = tokens[0];
         let action = actions[actionName];
         activationKey = action(activationKey, tokens[1], tokens[2], tokens[3]);  // In Javascript, if we give to the function more parameters than they are in the input,
        // there wont be an index error, but the function will take as much as there are needed for the function!!!

    }
    console.log(`Your activation key is: ${activationKey}`);
}

solve(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]);

solve(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]);

solve(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);

solve(["134softsf5softuni2020rockz42",
"Slice>>>10>>>14",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);