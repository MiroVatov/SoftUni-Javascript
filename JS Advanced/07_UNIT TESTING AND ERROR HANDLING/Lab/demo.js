function solve(a, b) {
    if (a === 0 || b === 0) {
        throw new RangeError('Division with zero!');
        // OR throw a message with more information
        // throw {
        //     message: 'Division with zero!'
        // }
    }
    return a / b;
}

try {
    console.log(solve(10, 2));
    console.log(solve(10, 0));

} catch (exception) {
    // Handling an error!
    console.log('error was catched');
    // console.log(error.stack);
    console.log(exception.message);
    console.log(exception.name)
}

