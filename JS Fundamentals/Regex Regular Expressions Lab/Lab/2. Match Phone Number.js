function solve(inputStr){
    // let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g
    let pattern = /(?<country_code>[+]359)( ?<separator>[ -])2\2\d{3}\2\d{4}\b/g
    let validPhoneNumbers = [];
    let validPhone = null;

    while ((validPhone = pattern.exec(inputStr)) !== null) {
         validPhoneNumbers.push(validPhone[0]);
    }

    console.log(validPhoneNumbers.join(', '));
}

solve('+359 2 222 2222, 359-2-222-2222, +359/2/222/2222, +359-2 222 2222, +359 2-222-2222,' +
    ' +359-2-222-222, +359-2-222-22222, +359-2-222-2222');