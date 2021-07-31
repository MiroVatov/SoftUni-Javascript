function solve(speed, area) {
    let speedLimits = {'motorway': 130, 'interstate': 90, 'city': 50, 'residential': 20};
    if (speedLimits[area] >= speed && speedLimits.hasOwnProperty(area)){
        console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`)
    }
    else {
        let difference = speed - speedLimits[area];
        if (difference <= 20){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - speeding`);
        }
        else if (difference <= 40){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - excessive speeding`)
        }
        else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - reckless driving`);
        }

    }

}

solve(40, 'city');

solve(40, 'city');

solve(21, 'residential');

solve(120, 'interstate');

solve(200, 'motorway');