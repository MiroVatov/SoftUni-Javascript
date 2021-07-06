function aMinerTask(inputArr) {
    let resourcesDict = {};
    for (let i = 0; i < inputArr.length; i+=2){
        let resource =  inputArr[i];
        let quantity = inputArr[i + 1];

        if (! resourcesDict.hasOwnProperty(resource)){
            resourcesDict[resource] = Number(quantity);
        }
        else{
            resourcesDict[resource] += Number(quantity);
        }
    }
    for (let [ res, qty ] of Object.entries(resourcesDict)){
        console.log(`${res} -> ${qty}`);
    }
}

aMinerTask([
'Gold', '155',
'Silver', '10',
'Copper', '17']);

aMinerTask([
'gold', '155',
'silver', '10',
'copper', '17',
'gold', '15']);
