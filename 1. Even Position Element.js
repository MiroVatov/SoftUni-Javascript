function solve(numsArr) {
    let newArr = [];
    for (let i = 0; i < numsArr.length; i++){
        if (i % 2 === 0){
            newArr.push(numsArr[i]);
        }
    }
    console.log(newArr.join(' '));
}

solve(['20', '30', '40', '50', '60']);

solve(['5', '10']);