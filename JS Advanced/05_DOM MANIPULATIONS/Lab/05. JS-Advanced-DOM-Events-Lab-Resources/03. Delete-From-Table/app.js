// function deleteByEmail() {
//     let searchEmail = document.querySelector('input[name="email"]').value;
//     let result = document.getElementById('result');
//     let tableBody = document.querySelectorAll('tbody tr');
//     for ( let element of tableBody ) {
//         for ( let child of Array.from(element.children )){
//             if ( child.lastChild.textContent === searchEmail ) {
//                 element.remove();
//                 result.textContent = "Deleted.";
//                 document.querySelector('input').value = '';
//                 return;
//             }
//         }
//     }
//     result.textContent = "Not found.";
//     document.querySelector('input').value = '';
// }


// Version 2

// function deleteByEmail() {
//     let searchedEmail = document.querySelector('input[type="text"]').value;
//     let table = document.querySelectorAll("tbody tr");
//     table = Array.from(table);
//     for (let row of table) {
//         let data = row.querySelectorAll('td')[1];
//         // if ( row.children[1].textContent === searchedEmail )  -->> Second option to get the email from the <td>
//         if (data.textContent === searchedEmail) {
//             // row.remove();  --> Second option to delete row
//             let parent = data.parentNode;
//             parent.parentNode.removeChild(row);
//             document.getElementById('result').textContent = "Deleted.";
//             document.querySelector('input[type="text"]').value = '';
//             return;
//         }
//     }
//     document.getElementById('result').textContent = "Not found.";
//     document.querySelector('input[type="text"]').value = '';
// }

// Version 3 , without for cycle --->>

function deleteByEmail() {
    let searchedEmail = document.querySelector('input[type="text"]').value;
    let table = Array.from(document.querySelectorAll("tbody tr"));

    const matches = table.filter(row => row.children[1].textContent === searchedEmail);
    if (matches.length > 0) {
        matches.forEach(el => el.remove());
        document.getElementById('result').textContent = "Deleted.";
        document.querySelector('input[type="text"]').value = '';
    } else {
        document.getElementById('result').textContent = "Not found.";
        document.querySelector('input[type="text"]').value = '';
    }
}
