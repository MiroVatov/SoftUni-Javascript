function solve(inputData){
    let activationKey = inputData.shift();
    let command = inputData.shift().split('>>>');

    function flipKey(activationKey, caseUpperOrLower, startIndex, endIndex) {
        let substring = activationKey.substring(startIndex, endIndex);
        if (caseUpperOrLower === 'Upper') {
            let newSubstring = substring.toUpperCase();
            activationKey = activationKey.slice(0, startIndex) + newSubstring + activationKey.slice(endIndex);
        }
        else if (caseUpperOrLower === 'Lower'){
            let newSubstring = substring.toLowerCase();
            activationKey = activationKey.slice(0, startIndex) + newSubstring + activationKey.slice(endIndex);
        }
        return activationKey;
    }

    while (command[0] !== 'Generate'){

        if (command[0] === 'Contains'){
            let substring = command[1];
            if (activationKey.includes(substring)){
                console.log(`${activationKey} contains ${substring}`)
            }
            else{
                console.log(`Substring not found!`);
            }
        }
        else if (command[0] === 'Flip'){
            let [ caseUpperOrLower, startIndex, endIndex ] = [ command[1], Number(command[2]), Number(command[3]) ];
            activationKey = flipKey(activationKey, caseUpperOrLower, startIndex, endIndex);
            console.log(activationKey);
        }
        else if (command[0] === 'Slice'){
            let [ startIndex, endIndex ] = [Number(command[1]), Number(command[2])];
            // let substring = activationKey.substring(startIndex, endIndex);
            activationKey = activationKey.slice(0, startIndex) + activationKey.slice(endIndex);
            console.log(activationKey);
        }

        command = inputData.shift().split('>>>');
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