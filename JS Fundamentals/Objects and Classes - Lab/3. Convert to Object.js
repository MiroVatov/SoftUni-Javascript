function convertToObject(jsStr) {
    let toObj = JSON.parse(jsStr);
    let entries = Object.entries(toObj);
    for (let element of entries){
        console.log(`${element[0]}: ${element[1]}`);
    }
    // return toObj;
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

