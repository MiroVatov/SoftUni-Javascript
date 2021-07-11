function solve(inputArray) {
    let password = inputArray.shift();
    let command = inputArray.shift();

    function takeOddIndexes(password) {
        let newPass = '';
        for (let i = 1; i < password.length; i+= 2){
            newPass += password[i];
        }
        return newPass;
    }

    function cutPassword(password, index, len) {
        let substr = password.substring(index, index + len);
        password = password.replace(substr, '');
        return password;
    }

    function substitutePassword(password, substring, substitute) {
        password = password.split(substring).join(substitute);
        return password;
    }

    while (command !== 'Done'){
        command = command.split(' ');
        if (command[0] === 'TakeOdd'){
            password = takeOddIndexes(password);
            console.log(`${password}`);
        }

        else if (command[0] === 'Cut'){
            let [ index, len ] = [Number(command[1]), Number(command[2]) ];
            password = cutPassword(password, index, len);
            console.log(`${password}`);
        }
        else if (command[0] === 'Substitute'){
            let [ substring, substitute ] = [command[1], command[2]];
            if (password.includes(substring)){
            password = substitutePassword(password, substring, substitute);
            console.log(`${password}`);
            }
            else{
                console.log(`Nothing to replace!`)
            }
        }

        command = inputArray.shift();
    }
    console.log(`Your password is: ${password}`)
}

solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]));

solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]));

solve((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]));