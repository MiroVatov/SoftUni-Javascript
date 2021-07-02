function phoneBook(inputArr) {
    let contactsDict = {};
    for (let contactData of inputArr){
        let [ name, phone ] = contactData.split(' ');
        contactsDict[name] = phone;
    }
    // for (let contact in contactsDict){
    //     console.log(`${contact} -> ${contactsDict[contact]}`);
    // }

    for (let [ name, phone ] of Object.entries(contactsDict)){
        console.log(`${name} -> ${phone}`)
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);