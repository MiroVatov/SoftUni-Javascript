function firstAndLastElements(arr) {
    let k = arr.shift();
    let firstKElements = arr.slice(0, k);
    let lastKElements = arr.slice(arr.length - k); // The same as arr.slice(-3) -> it takes the last K elements for the array;
    console.log(firstKElements.join(' '));

    console.log(lastKElements.join(' '));
}

firstAndLastElements([2, 7, 8, 9]);
firstAndLastElements([3, 6, 7, 8, 9]);
