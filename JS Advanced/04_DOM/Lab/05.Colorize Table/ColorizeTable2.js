function colorize() {
    let tableRows = document.querySelectorAll('table tr');
    console.log(tableRows);
    tableRows = [...tableRows];
    for ( let i = 1; i < tableRows.length; i += 2 ) {
        tableRows[i].style.backgroundColor = 'Teal';
    }
}