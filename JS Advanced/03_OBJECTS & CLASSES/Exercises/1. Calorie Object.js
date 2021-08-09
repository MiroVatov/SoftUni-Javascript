function solve(inputArr) {
    let obj = {};
    for ( let i = 0; i < inputArr.length - 1; i+= 2){
        obj[inputArr[i]] = Number(inputArr[i + 1]);
    }
    return obj;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));

console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));
