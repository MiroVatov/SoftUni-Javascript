function arenaTier(inputArr) {
    let gladiatorsDict = {};

    function battleApproved(gladiator1Name, gladiator2Name) {
        for (let [ technique, power ] of Object.entries(gladiatorsDict[gladiator1Name])){
            if (gladiatorsDict[gladiator2Name].hasOwnProperty(technique)){
                return true;
            }
        }
    }

    function calculateGladiatorPower(gladiator1) {
        let gladiatorPower = 0;
        for (let [ name, power ] of Object.entries(gladiatorsDict[gladiator1])){
            gladiatorPower += power;
        }
        return gladiatorPower;
    }

    for (let data of inputArr){
        if (data === 'Ave Cesar'){
            break;
        }
        if (data.includes('vs')){
            let [ gladiator1, gladiator2 ] = data.split(' vs ');
            if (gladiator1 !== gladiator2 && gladiatorsDict.hasOwnProperty(gladiator1) && gladiatorsDict.hasOwnProperty(gladiator2)){
                 if( battleApproved(gladiator1, gladiator2) === true){
                    let gladiator1Power = calculateGladiatorPower(gladiator1);
                    let gladiator2Power = calculateGladiatorPower(gladiator2);
                    if (gladiator1Power > gladiator2Power){
                        delete gladiatorsDict[gladiator2];
                    }
                    else {
                        delete gladiatorsDict[gladiator1];
                    }
                 }
            }
        }
        else{
            let [ gladiatorName, technique, power ] = data.split(' -> ');
            if (! gladiatorsDict.hasOwnProperty(gladiatorName)){
                gladiatorsDict[gladiatorName] = {};
                gladiatorsDict[gladiatorName][technique] = Number(power);
            }
            else {
                if (! gladiatorsDict[gladiatorName].hasOwnProperty(technique)){
                    gladiatorsDict[gladiatorName][technique] = Number(power);
                }
                else{
                    if (power > gladiatorsDict[gladiatorName][technique]){
                        gladiatorsDict[gladiatorName][technique] = power;
                    }
                }
            }
        }
    }
    let sorted = Object.entries(gladiatorsDict).sort( (a, b) => a[0].localeCompare(b[0]));
    sorted.sort( ([ keyA, refA ], [ keyB, refB ]) => {
        let power1 = calculateGladiatorPower(keyA);
        let power2 = calculateGladiatorPower(keyB);
        return power2 - power1;

    } );

    let printData = "";
    for (let data of Object.entries(sorted)){
        printData += `${data[1][0]}: ${calculateGladiatorPower(data[1][0])} skill` + '\n';
        for (let data1 of Object.entries(data[1][1]).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1] - a[1])){
            printData += `- ${data1[0]}` + ` <!> ${data1[1]}` + '\n' ;
        }
    }
    console.log(printData);
}

arenaTier([
'Peter -> BattleCry -> 400',
'Alex -> PowerPunch -> 300',
'Stefan -> Duck -> 200',
'Stefan -> Tiger -> 250',
'Ave Cesar']);

arenaTier([
'Peter -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Peter vs Gladius',
'Gladius vs Julius',
'Gladius vs Maximilian',
'Ave Cesar']);
