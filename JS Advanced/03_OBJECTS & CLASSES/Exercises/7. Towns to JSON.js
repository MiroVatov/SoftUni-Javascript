function solve(inputArray) {
    let result = [];
    for ( let i = 1; i < inputArray.length; i++ ){
        let [ townName, latitude, longitude ] = inputArray[i].split(' | ');
        townName = townName.replace('| ', '')
        longitude = longitude.replace(' |', '');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let object = {"Town": townName, "Latitude": Number(latitude), "Longitude": Number(longitude)};
        result.push(object);
    }
    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));

console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));

console.log(solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
));