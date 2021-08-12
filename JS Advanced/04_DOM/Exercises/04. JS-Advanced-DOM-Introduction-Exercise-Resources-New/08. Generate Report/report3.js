function generateReport() {

    let tableHeaders = document.querySelectorAll('thead tr th');
    tableHeaders = [...tableHeaders];
    let finalArray = [];
    let checkedIndexes = [];
    let columnNameHeaders = [];

    for (let i = 0; i < tableHeaders.length; i++) {
        columnNameHeaders.push(tableHeaders[i].textContent.trimRight());
        let checkBox = document.querySelectorAll('input[type="checkbox"]');
        if (checkBox[i].checked === true) {
            checkedIndexes.push(i);
        }
    }

    let employeesTable = document.querySelectorAll('tbody tr');

    for (let j = 0; j < Array.from(employeesTable).length; j++ ) {
        let tableData = Array.from(employeesTable[j].children);
        let tempObj = {};
            for (let row of checkedIndexes ) {
                console.log(row);
                tempObj[columnNameHeaders[row].toLowerCase()] = tableData[row].textContent;
        }
            finalArray.push(tempObj);
    }

     let output = document.getElementById('output');
     let str = JSON.stringify(finalArray);
     output.textContent = str;
}