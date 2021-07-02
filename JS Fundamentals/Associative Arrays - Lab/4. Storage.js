function storage(inputArray) {
    let map = new Map();

    for (let data of inputArray){
        let [ product, quantity ] = data.split(' ');
        if (map.has(product)){
            let newQty = Number(map.get(product) + Number(quantity));
            map.set(product, newQty);
        }
        else{
            map.set(product, Number(quantity));
        }
    }
    // let iterable = map.keys();
    // for (let key of iterable){
    //     console.log(`${key} -> ${map.get(key)}`)
    // }

    for (let [ key, value ] of map){
        console.log(`${key} -> ${value}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);