function solve(text, searched) {
    let index = text.indexOf(searched);
    let counter = 0;

    while (index !== -1){
        counter += 1;
        text = text.replace(searched, '');
        index = text.indexOf(searched);
    }
    console.log(counter);
}

solve( "is This is a word and it also is a sentence is", "is");
solve( "This is a word and it also is a sentence",  "is");