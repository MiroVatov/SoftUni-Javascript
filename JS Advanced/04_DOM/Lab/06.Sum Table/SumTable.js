// function sumTable() {
//     let table = document.querySelectorAll('table tr');
//     let sum = 0;
//     for ( let i = 1; i < table.length; i++ ) {
//         let row = table[i].children;
//         sum += Number(row[1].textContent);
//     }
//     let total = document.getElementById('sum');
//     total.textContent = sum;
// }



// Version 2

// function sumTable() {
//     let costElements = document.querySelectorAll('tr td:nth-child(2)');
//     let sum = 0;
//     costElements = [...costElements].map(el => el.textContent);
//     for ( let row of costElements ){
//         sum += Number(row);
//     }
//     let total = document.getElementById('sum');
//     total.textContent = sum;
// }


// Variant 3

// function sumTable() {
//     let costElements = document.querySelectorAll('tr td');
//     let sum = 0;
//     costElements = [...costElements].map(el => el.textContent);
//     for ( let row = 1; row < costElements.length - 1; row += 2 ){
//         sum += Number(costElements[row]);
//     }
//     let total = document.getElementById('sum');
//     total.textContent = sum;
// }

function sumTable() {
    let costElements = document.querySelectorAll('tbody tr');
    let sum = 0;

    for ( let row = 1; row < costElements.length - 1; row++){
        const currRow = costElements[row].children;
        sum += Number(currRow[1].textContent);
    }
    let total = document.getElementById('sum');
    total.textContent = sum;
}