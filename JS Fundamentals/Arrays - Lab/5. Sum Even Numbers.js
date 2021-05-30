function sumEvenNumbers(numsArr) {
    let sumEvenNums = 0;
    for (let i = 0; i < numsArr.length; i++){
        num = Number(numsArr[i]);
        if (num % 2 === 0){
            sumEvenNums += num;
        }
    }
    console.log(sumEvenNums)
}
sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);