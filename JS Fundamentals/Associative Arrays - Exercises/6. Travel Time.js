function travelTime(townsArray) {
    let townsDict = {};

    for (let data of townsArray){
        let [ countryName, townName, travelCost ] = data.split(' > ');
        if (! townsDict.hasOwnProperty(countryName)){
            townsDict[countryName] = {};
        }
        if (! townsDict[countryName].hasOwnProperty(townName)) {
            townsDict[countryName][townName] = Number(travelCost);
        }
        else{
            if (townsDict[countryName][townName] > travelCost){
            townsDict[countryName][townName] = Number(travelCost);
            }
        }

    }
    let sorted = Object.entries(townsDict).sort((a, b) => a[0].localeCompare(b[0]));

    for (let data of Object.entries(sorted)){
        let printData = '';
        printData +=`${data[1][0]} -> `;
        for (let data1 of Object.entries(data[1][1]).sort((a, b) => a[1] - b[1])){
            printData += `${data1[0]}` + ` -> ${data1[1]} ` ;

        }
         console.log(printData);
    }

}

travelTime([
"Bulgaria > Sofia > 500",
"Bulgaria > Sopot > 800",
"France > Paris > 2000",
"Albania > Tirana > 1000",
"Bulgaria > Sofia > 200",
"Bulgaria > Vraca > 100"]);

travelTime([
"Bulgaria > Sofia > 500",
"Bulgaria > Sopot > 800",
"France > Paris > 2000",
"Albania > Tirana > 1000",
"Bulgaria > Sofia > 200",
"Bulgaria > Vraca > 100"]);