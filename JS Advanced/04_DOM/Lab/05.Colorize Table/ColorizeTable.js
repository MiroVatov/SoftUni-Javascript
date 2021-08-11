function colorize() {
    const rowsToColor = document.querySelectorAll('table tr');

    let index = 0;
    for (let row of rowsToColor){
        index++
        if ( index % 2 === 0){
            row.style.background='teal';
        }
    }
}