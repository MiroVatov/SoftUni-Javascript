function inventory(inputArr) {
    let heroesArr = [];

    for (let data of inputArr){
        let heroObj = {};
        let heroData = data.split(' / ');
        let heroName = heroData[0];
        let heroLevel = Number(heroData[1]);
        let heroItems = heroData[2];
        heroObj.Hero = heroName;
        heroObj.level = heroLevel;
        heroObj.items = heroItems.split(', ').sort((a, b) => a.localeCompare(b));
        heroesArr.push(heroObj);
    }

        let sortedArr = heroesArr.sort((hero1, hero2) => {return hero1.level - hero2.level});
        for (let hero of sortedArr){
            for (let data of Object.entries(hero)){
                console.log(`Hero: ${hero.Hero}`);
                console.log(`level => ${hero.level}`);
                console.log(`items => ${hero.items.join(', ')}`);
                break;
        }
        }
    }


inventory(["Isacc / 25 / Apple, GravityGun",
"Derek / 12 / BarrelVest, DestructionSword",
"Hes / 1 / Desolator, Sentinel, Antara"]);

