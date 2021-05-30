function equalArrays(firstArr, secondArr){
    let arrSum = 0;
    let identical = true;
    for (let i = 0; i < firstArr.length; i++)
    {
        if (firstArr[i] === secondArr[i])
        { arrSum += Number(firstArr[i]); }
        else
        { console.log(`Arrays are not identical. Found difference at ${i} index`);
            identical = false;
            break }
    }
    if (identical){
    console.log(`Arrays are identical. Sum: ${arrSum}`) }
}

equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);
