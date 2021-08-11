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

function sumTable() {
    let costElements = document.querySelectorAll('tr td:nth-child(2)');
    let sum = 0;
    for ( let row of costElements ){
        sum += Number(row.textContent);
    }
    let total = document.getElementById('sum');
    total.textContent = sum;
}