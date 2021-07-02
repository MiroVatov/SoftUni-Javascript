function neighbourhoods(inputArray) {
    let neighbourhoods = inputArray.shift().split(', ');
    let neighbourhoodsMap = new Map();
    for (let hood of neighbourhoods){
        neighbourhoodsMap.set(hood, []);
    }
    for (let inhabitantData of inputArray){
       let [ hood, inhabitant ]  = inhabitantData.split(' - ');
       if (neighbourhoodsMap.has(hood)){
           let inhabitantsArray = neighbourhoodsMap.get(hood);
           inhabitantsArray.push(inhabitant);
       }
    }
    let sorted = Array.from(neighbourhoodsMap).sort((a, b) => b[1].length - a[1].length);
    for (let [ hood, inhabitants ] of sorted){
        console.log(`${hood}: ${inhabitants.length}`);
        for (let i of inhabitants) {
            console.log(`--${i}`);
        }
    }
}

neighbourhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']);