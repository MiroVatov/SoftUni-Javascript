function arrManipulator(inputArr, commands){
    let currCommand = commands.shift();

    function add(inputArr, tokens) {
        inputArr.splice(Number(tokens[0]), 0, Number(tokens[1]));
        return inputArr;
    }
    function addMany(inputArr, tokens) {
        let index = Number(tokens.shift());
        for (let value of tokens){
            inputArr.splice(index++, 0, value);
        }
        return inputArr;
    }
    function remove(inputArr, tokens) {
        inputArr.splice(Number(tokens[0]), 1);
        return inputArr;
    }
    
    function shiftPositions(inputArr, tokens) {
     let position = Number(tokens[0]);
     while (position > 0){
          let el = inputArr.shift();
          inputArr.push(el);
          position--;
         }
         return inputArr;
    }

    function sumPairs(inputArr) {
     let output = [];
     while (inputArr.length > 0){
        let a = inputArr.shift();
        let b = inputArr.shift() || 0;
        output.push(a + b);
     }
     return output;
    }

    while (currCommand !== 'print') {
      let tokens = currCommand.split(' ');

      switch (tokens.shift()) {
           case 'add':
           inputArr = add(inputArr, tokens);
               break;
           case 'addMany':
           inputArr = addMany(inputArr, tokens);
               break;
           case 'contains':
           console.log(inputArr.indexOf(Number(tokens[0])));
               break;
           case 'remove':
           inputArr = remove(inputArr, tokens);
               break;
           case 'shift':
           inputArr = shiftPositions(inputArr, tokens);
               break;
           case 'sumPairs':
           inputArr = sumPairs(inputArr);
               break;

     }
     currCommand = commands.shift();
    }

    return `[ ${inputArr.join(', ')} ]`
}

console.log(arrManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'addMany 4 9 8 9 8 9 8', 'contains 3', 'print']));
console.log(arrManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'addMany 4 9 8 9 8 9 8', 'contains 3', 'print']));
// console.log(arrManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']));
// console.log(arrManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']));
console.log(arrManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'shift 2', 'sumPairs','print']));
// console.log(arrManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'add 1 8', 'contains 1', 'contains 3', 'shift 2', 'print']));
// console.log(arrManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]));
// console.log(arrManipulator([1, 2, 3, 4, 5], ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]));