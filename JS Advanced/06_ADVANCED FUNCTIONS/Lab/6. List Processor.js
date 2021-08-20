function solve(inputArr) {
    let output = [];

    function add(text) {
        output.push(text);
    }

    function remove(text) {
        for ( let i = 0; i < output.length; i++ ){
            if ( output[i] === text ){
                output.splice(i, 1);
            }
        }
    }
    function print() {
        console.log(output.join(','));
    }

    for (let data of inputArr) {
        let [funcName, text] = data.split(' ');

        if (funcName === 'add') {
            add(text);
        } else if (funcName === 'remove') {
            remove(text);
        } else {
            print()

        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);