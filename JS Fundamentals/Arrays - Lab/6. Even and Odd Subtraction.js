function evenAndOddSubtraction(arr) {
    sumEvens = 0;
    sumOdds = 0;
    for (let i = 0; i < arr.length; i++){
        num = Number(arr[i]);
        if (num % 2 === 0)
        { sumEvens += num; }
        else{ sumOdds += num; }
    }
    difference = sumEvens-sumOdds;
    console.log(difference)
}

evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);