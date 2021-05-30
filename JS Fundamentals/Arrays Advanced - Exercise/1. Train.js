function train(inputArr) {
    let wagonsArr = inputArr.shift().split(' ').map(x => Number(x));
    let maxCapacity = Number(inputArr.shift());

    for (let command of inputArr){
        if (command.includes('Add')){
            let pass = command.split(' ');
            let passengers = Number(pass[1]);
            wagonsArr.push(passengers);
        }
        else{
            let passengersCount = Number(command);

            // Version 1  ==> NOT WORKING -> map arrow Function

            // wagonsArr.map(x => {
            //     if (passengersCount + x <= maxCapacity) {
            //         x += passengersCount;
            //         return x;
            //     }
            //
            //     return x;
            //
            // })

            // Version 2 == > WORKING 100 %!!!
            for (let i = 0; i < wagonsArr.length; i++){
                if(wagonsArr[i] + passengersCount <= maxCapacity){
                    wagonsArr[i] += passengersCount;
                    break;
                }
            }

        }
    }

    console.log(wagonsArr.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);