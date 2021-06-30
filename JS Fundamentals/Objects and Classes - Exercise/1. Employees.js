function employees(employeesData) {
    for (let emp of employeesData){
        let empObject = {name: emp, personalNumber: emp.length};
        console.log(`Name: ${empObject.name} -- Personal Number: ${empObject.personalNumber}`)
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
// employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
