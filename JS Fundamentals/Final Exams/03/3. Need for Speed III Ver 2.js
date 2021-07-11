function solve(carsData) {
    const maximumFuelCapacity = 75;
    const minimumMileageAllowed = 10000;
    let carsDict = {};
    let carsNumber = carsData.shift();

    function fillCarsDict(data, carsDict) {
        let [ carMaker, distance, fuel ] = data.split('|');
        if (! carsDict.hasOwnProperty(carMaker)){
            carsDict[carMaker] = {'mileage': Number(distance), 'fuel': Number(fuel)};
        }
        return carsDict;
    }

    for (let i = 0; i < carsNumber; i++){
        let data = carsData.shift();
        carsDict = fillCarsDict(data, carsDict);
    }

    let command = carsData.shift().split(' : ');

    function driveFunc(command, carsDict) {
        let [ carMaker, distance, fuelNeeded ] = [command[1], Number(command[2]), Number(command[3])];
            if (carsDict[carMaker].fuel < fuelNeeded){
                    console.log(`Not enough fuel to make that ride`);
             }
             else {
                 carsDict[carMaker].mileage += distance;
                 carsDict[carMaker].fuel -= fuelNeeded;
                 console.log(`${carMaker} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`)
                 if (carsDict[carMaker].mileage >= 100_000) {
                     delete carsDict[carMaker];
                     console.log(`Time to sell the ${carMaker}!`)
                 }
        }
        return carsDict;
    }

    function refuelCarFunc(command, carsDict) {
        let [ carMaker, fuelToRefill ] = [command[1], Number(command[2])];
        if (carsDict[carMaker].fuel + fuelToRefill > maximumFuelCapacity){
            let refilledFuel = maximumFuelCapacity - carsDict[carMaker].fuel;
            carsDict[carMaker].fuel = maximumFuelCapacity;
            console.log(`${carMaker} refueled with ${refilledFuel} liters`)
        }
        else{
            carsDict[carMaker].fuel += fuelToRefill;
            console.log(`${carMaker} refueled with ${fuelToRefill} liters`)
        }
        return carsDict;
    }

    function revertCars(command, carsDict) {
          let [ carMaker, kilometers ] = [command[1], Number(command[2])];
            carsDict[carMaker].mileage -= kilometers;
            if (carsDict[carMaker].mileage < minimumMileageAllowed){
                carsDict[carMaker].mileage = minimumMileageAllowed;
            }
            else{
                console.log(`${carMaker} mileage decreased by ${kilometers} kilometers`);
            }
        return carsDict;
    }

    while (command[0] !== 'Stop'){

         if (command[0] === 'Drive') {
             carsDict = driveFunc(command, carsDict);}
        else if (command[0] === 'Refuel'){
            carsDict = refuelCarFunc(command, carsDict);
        }
        else if (command[0] === 'Revert'){
            carsDict = revertCars(command, carsDict);
        }
        command = carsData.shift().split(' : ');
    }

    let sorted = Object.entries(carsDict).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1].mileage - a[1].mileage);
    for (let data of sorted){
        console.log(`${data[0]} -> Mileage: ${data[1].mileage} kms, Fuel in the tank: ${data[1].fuel} lt.`);
    }
}

solve([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop'
]);

solve([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop'
]);

solve([
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop'
]);
