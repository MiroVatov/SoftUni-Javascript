function solve(inputArr) {
    let heroesData = [];

    for ( let data of inputArr ) {
        let [name, level, items] = data.split(' / ');
        if (items) {
            heroesData.push({name: name, level: +level, items: items.split(', ')});
        }
        else{
             heroesData.push({name: name, level: +level, items: []});
        }
    }
    return JSON.stringify(heroesData);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));

console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));

console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']));

console.log(solve(['Jake / 1000']));