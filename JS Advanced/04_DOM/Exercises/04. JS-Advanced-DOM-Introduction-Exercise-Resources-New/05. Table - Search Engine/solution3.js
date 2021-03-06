function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    const body = document.querySelector('tbody');
    function onClick() {
        const input = document.querySelector('#searchField').value.toLowerCase();
        body.innerHTML = Array.from(body.children).map(function selectRow(row) {
            if ( row.textContent.includes(input) ){
                row.classList.add('select');
            }else{
                row.removeAttribute('class');
            }
            return row;
        })
    }
}