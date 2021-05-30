function houseParty(guestList) {
    let guestsArrived = [];
    for (let guest of guestList) {
        let guestArrAsSeparateStrings = guest.split(' ');
        let guestName = guestArrAsSeparateStrings[0];
        if (guestArrAsSeparateStrings.length === 3) {

             if (! guestsArrived.includes(guestName)){
                 guestsArrived.push(guestName);
             }
             else{
                 console.log(`${guestName} is already in the list!`)
             }
        }

        else if (guestArrAsSeparateStrings.length === 4) {
            if (guestsArrived.includes(guestName)){
                let guestIndex = guestsArrived.indexOf(guestName);
                guestsArrived.splice(guestIndex, 1);
            }
            else{
                console.log(`${guestName} is not in the list!`)
            }
        }
    }
    console.log(guestsArrived.join('\n'));
}


houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);