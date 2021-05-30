function arraManipulator(array = [], commands = []) {
  let result = array.slice(0);
  let output = [];
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i].split(" ");
    if (command[0] === "add") {
      let index = +command[1];
      let element = +command[2];
      result.splice(index, 0, element);
    }
    if (command[0] === "addMany") {
      let index = command[1];
      let newArray = command.slice(2).map(Number);
      result.splice(index, 0, ...newArray);
    }
    if (command[0] === "contains") {
      let element = +command[1];
      let index = result.indexOf(element);
      console.log(index);
    }
    if (command[0] === "remove") {
      let index = +command[1];
      result.splice(index, 1);
    }
    if (command[0] === "shift") {
      let rotations = +command[1];
      for (let j = 0; j < rotations; j++) {
        let element = result.shift();
        result.push(element);
      }
    }
    if (command[0] === "sumPairs") {
      if (result.length % 2 === 0) {
        for (let k = 0; k < result.length; k += 2) {
          output.push(result[k] + result[k + 1]);
        }
      } else {
        for (let k = 0; k < result.length - 1; k += 2) {
          output.push(result[k] + result[k + 1]);
        }
        output.push(result.pop());
      }
      result = output;
      output = [];
    }
    if (command[0] === "print") {
      console.log("[ " + result.join(", ") + " ]");
    }
  }
}

arraManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'addMany 4 9 8 9 8 9 8', 'contains 3', 'print']);
arraManipulator([1, 2, 4, 5, 6, 7],
['add 1 8', 'contains 1', 'contains 3', 'print']);
arraManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
arraManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'shift 2', 'sumPairs','print']);
arraManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'add 1 8', 'contains 1', 'contains 3', 'shift 2', 'print']);
arraManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
arraManipulator([1, 2, 3, 4, 5],
["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]);