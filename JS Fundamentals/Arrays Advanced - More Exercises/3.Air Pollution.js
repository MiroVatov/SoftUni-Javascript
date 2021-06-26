function airPollution(sofiaMap, commands){

    let pollutionMinimum = 50;
    let breezePower = 15;
    // index is the row where all column’s value drops by 15 PM

    let galePower = 20;
    //index is the column in all rows where value drops by 20 PM

    let pollutedBlocks = [];
    sofiaMap = convertMapToNumbers(sofiaMap);

    function checkForPollutedBlocks(sofiaMap) {
        for (let i = 0; i < sofiaMap.length; i++){
            let row = sofiaMap[i];
            for (let j = 0; j < row.length; j++){
                if (sofiaMap[i][j] >= pollutionMinimum){
                    pollutedBlocks.push([i, j]);
                }
            }
        }
        return pollutedBlocks;
    }

    function convertMapToNumbers(sofiaMap) {
        for (let i = 0; i < sofiaMap.length; i++){
            sofiaMap[i] = sofiaMap[i].split(' ').map(x => +x);
        }
        return sofiaMap;
    }

    function breezeFunc(sofiaMap, index) {
        for (let i = index; i < index + 1; i++){
            let row = sofiaMap[i];
            for (let j = 0; j < row.length; j++){
                sofiaMap[i][j] -= breezePower;
            }
        }
        return sofiaMap;
    }

    function galeFunc(sofiaMap, index) {
        for (let i = 0; i < sofiaMap.length; i++){
            for (let j = index; j < index + 1; j++){
                sofiaMap[i][j] -= galePower;
            }
        }
        return sofiaMap;
    }

    function smogFunc(sofiaMap, index) {

        for (let i = 0; i < sofiaMap.length; i++){
            let row = sofiaMap[i];
            for (let j = 0; j < row.length; j++){
                sofiaMap[i][j] += index;
            }
        }
        return sofiaMap;
    }

    for (let action of commands ){
        let currentCommand = action.split(' ');
        let pollutionType = currentCommand[0];
        let index = +currentCommand[1];

        switch (pollutionType) {
            case "breeze":
                sofiaMap = breezeFunc(sofiaMap, index)
                break;
            case "gale":
                sofiaMap = galeFunc(sofiaMap, index)
                break;
            case "smog":
                sofiaMap = smogFunc(sofiaMap, index);
                break;
        }
    }
    pollutedBlocks = checkForPollutedBlocks(sofiaMap);

    if (pollutedBlocks.length > 0){
        let data = "Polluted areas: ";
        for (let i = 0; i < pollutedBlocks.length; i++){
            for (let j = 0; j < 1; j++){
                data += `[${pollutedBlocks[i][0]}-${pollutedBlocks[i][1]}]` + ', ';
            }
        var finalData = data.replace(/,\s*$/, "");
        }
        return finalData;
    }
    else {
        return `No polluted areas`
    }

}


console.log(airPollution([
    "5 7 72 14 4",
  "41 35 37 27 33",
  "23 16 27 42 12",
  "2 20 28 39 14",
  "16 34 31 10 24"],
["breeze 1", "gale 2", "smog 25"]
));

console.log(airPollution([
    "5 7 72 14 4",
  "41 35 37 27 33",
  "23 16 27 42 12",
  "2 20 28 39 14",
  "16 34 31 10 24"],
["breeze 1", "gale 2", "smog 25"]
));

console.log(airPollution([
    "5 7 3 28 32",
  "41 12 49 30 33",
  "3 16 20 42 12",
  "2 20 10 39 14",
  "7 34 4 27 24"],
[ "smog 11", "gale 3", "breeze 1", "smog 2"]
));

console.log(airPollution([
    "5 7 2 14 4",
  "21 14 2 5 3",
  "3 16 7 42 12",
  "2 20 8 39 14",
  "7 34 1 10 24"],
["breeze 1", "gale 2", "smog 35"]
));

