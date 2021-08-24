function solve(...inputData) {
    let objectsType = {};
    inputData.forEach(el => {
        if (!objectsType.hasOwnProperty(typeof el)) {
            objectsType[typeof el] = 1;
        } else {
            objectsType[typeof el] += 1;
        }
        console.log(`${typeof el}: ${el}`);
    });
    for (const objType of Object.entries(objectsType).sort((a, b) => b[1] - a[1])) {
        console.log(`${objType[0]} = ${objType[1]}`);
    }
}

solve('cat', 42, function () {
    console.log('Hello world!');
});

// solve('cat', 42, function () {
//     console.log('Hello world!');
// });

solve({name: 'bob'}, 3.333, 9.999);

solve({name: 'bob'}, 3.333, 9.999);