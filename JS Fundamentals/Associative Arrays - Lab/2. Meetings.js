function meetings(inputArr) {
    let meetingsDict = {};
    for (let data of inputArr){
        let [ day, name ] = data.split(' ');
        if (meetingsDict.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }
        else{
            meetingsDict[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let schedule in meetingsDict){
        console.log(`${schedule} -> ${meetingsDict[schedule]}`);
    }
}

meetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']);

// meetings(['Monday Peter',
//  'Wednesday Bill',
//  'Monday Tim',
//  'Friday Tim']);