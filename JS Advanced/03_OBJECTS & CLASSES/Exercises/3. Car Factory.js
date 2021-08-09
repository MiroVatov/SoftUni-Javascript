function solve(inputCriteria) {
    const storage = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 },
        "Hatchback": { type: 'hatchback', color: '' },
        "Coupe": { type: 'coupe', color: '' },
    }
    let car = {"model": '', "engine": {"power": 0, "volume": 0},
        "carriage": {"type": '', "color": ''},
        "wheels": [0, 0 ,0 ,0],
    };
    car["model"] = inputCriteria.model;

    if ( inputCriteria.power <= 90 ){
        car["engine"]["power"] = storage["Small engine"].power;
        car["engine"]["volume"] = storage["Small engine"].volume;
    }
    else if ( inputCriteria.power <= 120 ){
        car["engine"]["power"] = storage["Normal engine"].power;
        car["engine"]["volume"] = storage["Normal engine"].volume;
    }
    else if ( inputCriteria.power > 120 ){
        car["engine"]["power"] = storage["Monster engine"].power;
        car["engine"]["volume"] = storage["Monster engine"].volume;
    }
    if ( inputCriteria.carriage === 'hatchback' ){
        car["carriage"]["type"] = storage["Hatchback"].type;
        car["carriage"]["color"] = inputCriteria.color;
    }
    else if ( inputCriteria.carriage === 'coupe' ){
        car["carriage"]["type"] = storage["Coupe"].type;
        car["carriage"]["color"] = inputCriteria.color;
    }
    if ( inputCriteria.wheelsize % 2 === 0 ){
        car["wheels"] = car["wheels"].fill(inputCriteria.wheelsize - 1, 0);
    }
    else{
        car["wheels"] = car["wheels"].fill(inputCriteria.wheelsize, 0);
    }
    return car;
}

console.log(solve({ model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }
));

console.log(solve({ model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }
));


console.log(solve({ model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17 }
));