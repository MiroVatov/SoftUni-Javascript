function solve(params) {
    let newArr = [];
    for (let element of params){
        if (element < 0){
            newArr.unshift(element);
        }
        else{
            newArr.push(element);
        }
    }
    console.log(newArr.join('\n'));
}

solve([7, -2, 8, 9]);

solve([3, -2, 0, -1]);