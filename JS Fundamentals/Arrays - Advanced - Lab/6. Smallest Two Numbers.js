function smallestOfTwoNumbers(arr) {
    let newArr = arr.sort((a, b) => a - b);
    console.log(newArr.slice(0, 2).join(' '));
}

smallestOfTwoNumbers([30, 15, 50, 5]);
smallestOfTwoNumbers([3, 0, 10, 4, 7, 3]);