function generateReport() {
    let output = document.getElementById('output');
    let tableData = Array.from(document.querySelectorAll('tbody tr'));
    let allCheckBoxes = Array.from(document.querySelectorAll('input[type=checkbox]'));

    let indexes = [];

    for ( let index = 0; index < allCheckBoxes.length; index++ ){

        if ( allCheckBoxes[index].checked === true ){
            indexes.push(index);
        }
    }

    let employeesArray = [];

    for ( let i = 0; i < tableData.length; i++ ){
        let obj = {};

        let tableDataArray = Array.from(tableData[i].children);

        for ( let j = 0; j < indexes.length; j++ ){

            let key = allCheckBoxes[indexes[j]].name.toLowerCase();
            let value = tableDataArray[indexes[j]].textContent;
            obj[key] = value;
        }

        employeesArray.push(obj);
    }
    let result = JSON.stringify(employeesArray);
    output.textContent = result;
}