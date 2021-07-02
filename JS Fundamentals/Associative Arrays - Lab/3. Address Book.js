function addressBook(inputArr) {
    let addressDict = {};
    for (let data of inputArr){
     let [ name, address ] = data.split(':');
     addressDict[name] = address;
    }
    let addressArray = Object.entries(addressDict);
    addressArray.sort((a, b) => (a[0].localeCompare(b[0])));
    for (let addressData of addressArray){
     console.log(`${addressData[0]} -> ${addressData[1]}`);
    }
}

addressBook(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd']);