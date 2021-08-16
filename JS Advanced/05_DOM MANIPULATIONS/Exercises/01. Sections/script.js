function create(words) {
    let content = document.getElementById('content');

    function showHiddenSections(event) {
        if ( event.target.tagName === 'DIV' || event.target.tagName === 'P') {
            const par = event.target.firstChild || event.target;
            const isVisible = par.style.display === 'block';
            par.style.display = isVisible ? 'none' : 'block';
        }
    }

    for ( let section of words ){
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = section;
        p.style.display = 'none';
        div.appendChild(p);
        content.appendChild(div);
    }
    content.addEventListener('click', showHiddenSections);
}