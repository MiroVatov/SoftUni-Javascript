function solve(inputArr){
    let message = inputArr.shift();
    let command = inputArr.shift();

    while (command !== "Reveal"){
        command = command.split(':|:');
        let action = command.shift();

        if (action === 'InsertSpace'){
            let index = Number(command);
            message = message.split('');
            message.splice(index, 0, ' ');
            message = message.join('');
            console.log(`${message}`);
        }
        else if (action === 'Reverse'){
            let substring = command[0];
            if (message.includes(substring)){
                message = message.replace(substring, '');
                substring = substring.split('').reverse().join('');
                message = message.concat(substring);
                console.log(`${message}`);
            }
            else{
                console.log(`error`);
            }
        }

        else if (action === 'ChangeAll'){
            let substring = command.shift();
            let replacement = command.shift();
            if (message.includes(substring)){
                message = message.split(substring).join(replacement);
            }
            console.log(`${message}`);
        }
        command = inputArr.shift();

    }
    return `You have a new text message: ${message}`
}

console.log(solve([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal']));

console.log(solve([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal']));

console.log(solve([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal']));