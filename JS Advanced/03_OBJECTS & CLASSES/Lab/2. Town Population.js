function solve(inputArray) {
    let towns = {};

    for ( let townData of inputArray){
        let [ townName, population ] = townData.split(' <-> ');
        if ( !towns.hasOwnProperty(townName)){
            towns[townName] = 0;
        }
        towns[townName] += Number(population);
    }
    for ( let key in towns){
        console.log(`${key} : ${towns[key]}`);
    }
}


solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);