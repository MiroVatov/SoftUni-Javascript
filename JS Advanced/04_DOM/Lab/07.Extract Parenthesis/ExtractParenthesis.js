
function extract(content) {
    let lineParagraph = document.getElementById('content');
    let rex = /\(([^()]*)\)/g;
    let matches = lineParagraph.textContent.match(rex);
    let result = '';
    for ( let row of matches ){
        matches = row.replace('(', '');
        matches = matches.replace(')', '');
        result += matches + '; ';
    }
    lineParagraph.textContent = result;
    return result;
}

let text = extract("content");

console.log(text);