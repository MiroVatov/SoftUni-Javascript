function specialNumbers(num) {
    for (let i = 1; i <= num; i ++){
        numberToCheck = 0;
        i = i.toString();
        if (i.length == 1) {
            numberToCheck = Number(i);
        }
        else {
            for (j = 0; j < i.length; j++){
                numberToCheck += Number(i[j])
            }
            }
        if (numberToCheck === 5 || numberToCheck === 7 || numberToCheck === 11){
            console.log(`${i} -> True`)
        }
        else {
            console.log(`${i} -> False`)
        }
    }
}

specialNumbers(15)