function companyUsers(inputArray) {
    let companiesDict = {};
    for (let data of inputArray){
        let [ companyName, employeeId ] = data.split(' -> ');
        if (! companiesDict.hasOwnProperty(companyName)){
            companiesDict[companyName] = [employeeId];
        }
        else{
            if (! companiesDict[companyName].includes(employeeId)){
                companiesDict[companyName].push(employeeId);
            }
        }
    }
    let sorted = Object.entries(companiesDict).sort((a, b) => a[0].localeCompare(b[0]));
    for (let data of sorted){
        console.log(data[0]);
        for (let arr of data[1]){
            console.log(`-- ${arr}`);
        }
    }
}

companyUsers([
'SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345']);

companyUsers([
'SoftUni -> AA12345',
'SoftUni -> CC12344',
'Lenovo -> XX23456',
'SoftUni -> AA12345',
'Movement -> DD11111']);