function solve(inputObj) {

    let specCharRegex = /^[^<>\\&'"]*$/;

    if (!inputObj.hasOwnProperty('method')) {
        throw new Error("Invalid request header: Invalid Method");
    } else if (!inputObj.hasOwnProperty('uri')) {
        throw new Error("Invalid request header: Invalid URI");
    } else if (!inputObj.hasOwnProperty('version')) {
        throw new Error("Invalid request header: Invalid Version");
    } else if (!inputObj.hasOwnProperty('message')) {
        throw new Error("Invalid request header: Invalid Message");
    }


    if (!["GET", "POST", "DELETE", "CONNECT"].includes(inputObj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);

    } else if (! (/^[\w.]+$/gm.test(inputObj.uri)) || (inputObj.uri === '*')) {
        throw new Error("Invalid request header: Invalid URI");

    } else if (!["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"].includes(inputObj.version)) {
        throw new Error("Invalid request header: Invalid Version");

    } else if (! (specCharRegex.test(inputObj.message) || inputObj.message === "")) {
        throw new Error("Invalid request header: Invalid Message");
    }
    return inputObj;
}


console.log(solve({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }
));

// console.log(solve({
//         method: 'GET',
//         uri: 'svn.public.catalog',
//         version: 'HTTP/1.1',
//         message: ''
//     }
// ));

console.log(solve({
        method: 'GET',
        uri: '*',
        version: 'HTTP/1.1',
        message: ''
    }
));

// console.log(solve({
//     method: 'POST',
//     version: 'HTTP/2.0',
//     message: 'rm -rf /*'
// }));

console.log(solve({
    method: '',
    uri: '*',
    version: 'HTTP/1.1',
    message: ''
}));

// console.log(solve({
//     method: 'POST',
//     uri: 'home.bash',
//     version: 'HTTP/2.0'
// }));