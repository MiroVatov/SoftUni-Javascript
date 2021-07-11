function solve(heroesData){
    const maximumHitPoints = 100;
    const maximumManaPoints = 200;
    let heroesNumber = heroesData.shift();

    function fillHeroesDict(data) {
       let [ heroName, hitPoints, manaPoints ] = data.split(' ');
        if (!heroesDict.hasOwnProperty(heroName)){
            if (hitPoints > maximumHitPoints){
                hitPoints = maximumHitPoints;
            }
            if (manaPoints > maximumManaPoints){
                manaPoints = maximumManaPoints;
            }
            heroesDict[heroName] = {'hitPoints': Number(hitPoints), 'manaPoints': Number(manaPoints)};
        }

        return heroesDict;
    }

    let heroesDict = {};
    for (let i = 0; i < heroesNumber; i++){
        let data = heroesData.shift();
        heroesDict = fillHeroesDict(data);
    }

    let command = heroesData.shift().split(' - ');

    function castSpell(heroesDict, heroName, manaNeeded, spellName) {
        heroesDict[heroName].manaPoints -= manaNeeded;
        console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesDict[heroName].manaPoints} MP!`);
        return heroesDict;
    }

    function takeDamage(heroesDict, heroName, damage, attacker) {
        heroesDict[heroName].hitPoints -= damage;
        if (heroesDict[heroName].hitPoints <= 0){
            console.log(`${heroName} has been killed by ${attacker}!`)
            delete heroesDict[heroName];
        }
        else{
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesDict[heroName].hitPoints} HP left!`)
        }
        return heroesDict;
    }

    function rechargeHero(heroesDict, heroName, amount) {
        if (heroesDict[heroName].manaPoints + amount > maximumManaPoints){
            console.log(`${heroName} recharged for ${maximumManaPoints - heroesDict[heroName].manaPoints} MP!`);
            heroesDict[heroName].manaPoints = maximumManaPoints;
        }
        else{
            heroesDict[heroName].manaPoints += amount;
            console.log(`${heroName} recharged for ${amount} MP!`);
        }
        return heroesDict;
    }

    function healHero(heroesDict, heroName, amount) {
        if (heroesDict[heroName].hitPoints + amount > maximumHitPoints){
            console.log(`${heroName} healed for ${maximumHitPoints - heroesDict[heroName].hitPoints} HP!`);
            heroesDict[heroName].hitPoints = maximumHitPoints;
        }
        else{
            heroesDict[heroName].hitPoints += amount;
            console.log(`${heroName} healed for ${amount} HP!`);
        }
        return heroesDict;
    }

    while (command[0] !== 'End'){
        if (command[0] === 'CastSpell'){
            let [ heroName, manaNeeded, spellName ] = [command[1], Number(command[2]), command[3]];
            if (heroesDict[heroName].manaPoints < manaNeeded){
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
            else{
                heroesDict = castSpell(heroesDict,heroName, manaNeeded, spellName);
            }
        }
        else if (command[0] === 'TakeDamage'){
            let [ heroName, damage, attacker ] = [command[1], Number(command[2]), command[3]];
            heroesDict = takeDamage(heroesDict, heroName, damage, attacker);
        }

        // TODO check if one function can be used for heal and recharge --- >>> what amount is recharged or healed if amount is over the Maximum points
        else if (command[0] === 'Recharge'){
            let [ heroName, amount ] = [command[1], Number(command[2])];
            heroesDict = rechargeHero(heroesDict, heroName, amount);
        }
        else if (command[0] === 'Heal'){
            let [ heroName, amount ] = [command[1], Number(command[2])];
            heroesDict = healHero(heroesDict, heroName, amount);
        }

        command = heroesData.shift().split(' - ');
    }
    let sorted = Object.entries(heroesDict).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1].hitPoints - a[1].hitPoints);

    for (let hero of sorted){
        console.log(`${hero[0]}` + '\n' + `  HP: ${hero[1].hitPoints}` + '\n' + `  MP: ${hero[1].manaPoints}`);
    }

}

solve([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);

solve([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);

solve([4,
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);