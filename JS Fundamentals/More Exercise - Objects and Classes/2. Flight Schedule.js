function flightSchedule(nestedArray) {
    let allFlightsArray = nestedArray[0];
    let changedFlightStatuses = nestedArray[1];
    let finalStatusToCheck = String(nestedArray[2]);

    let flightsArrOfObjects = [];

    function checkIfFlightIsAlreadyInTheArray(flightNumber) {
        for (let flight of flightsArrOfObjects){
            if (flight.flightnumber === flightNumber){
                return flight;
            }
        }
        return false;
    }

    for (let flightData of allFlightsArray){
        let flightsObj = {};
        flightData = flightData.split(' ');
        let flightNumber = flightData.shift();
        let destination = flightData;
        flightsObj.flightnumber = flightNumber;
        flightsObj.Destination = destination.join(' ');
        flightsObj.Status = 'Ready to fly';

        if (! checkIfFlightIsAlreadyInTheArray(flightsObj.flightnumber)) {
            flightsArrOfObjects.push(flightsObj);
        }
    }
    for (let status of changedFlightStatuses){
        status = status.split(' ');
        let flightNum = status[0];
        let flightStatus = status[1];
        let flightObject = checkIfFlightIsAlreadyInTheArray(flightNum);
        if (typeof flightObject === 'object'){
            flightObject.Status = flightStatus;
            delete flightObject.flightnumber;
        }
    }

    for (let flight of flightsArrOfObjects){
        if (flight.Status === finalStatusToCheck){
            delete flight.flightnumber;
            console.log(flight);
        }
    }
}

flightSchedule([['WN269 Delaware',
   'WN269 Delaware',
   'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],

    ['DL2120 Cancelled',
	'WN612 Cancelled',
	'WN1173 Cancelled',
	'SK430 Cancelled'],

	['Cancelled']
]);

flightSchedule([
    ['WN269 Delaware',
   'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],

    ['DL2120 Cancelled',
	'WN612 Cancelled',
	'WN1173 Cancelled',
	'SK330 Cancelled'],

	['Ready to fly']
]);