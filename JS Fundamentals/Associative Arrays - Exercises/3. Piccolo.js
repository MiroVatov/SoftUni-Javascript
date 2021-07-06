function piccolo(inputArr) {
    let carLotDict = {};

    for (let i = 0; i < inputArr.length; i++) {
        let [ action, carNumber ] = inputArr[i].split(', ');

        if (action === 'IN' && !carLotDict.hasOwnProperty(carNumber)) {
            carLotDict[carNumber] = action;
        }
        else if (action === 'OUT' && carLotDict.hasOwnProperty(carNumber)) {
            delete carLotDict[carNumber];
        }
    }
    if (Object.keys(carLotDict).length > 0) {
        let sortedCarsArray = Object.entries(carLotDict).sort((a, b) => a[0].localeCompare(b[0]));
        for (let carNumber of sortedCarsArray) {
            console.log(`${carNumber[0]}`);
        }
    }
    else{
        console.log(`Parking Lot is Empty`)
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);