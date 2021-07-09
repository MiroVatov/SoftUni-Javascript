function solve(text, word) {
   // find index of word
    let start = text.indexOf(word);

    while (start !== -1) {

        // take substring ending at index
        let first = text.substring(0, start);

        // take substring starting at index to end
        let second = text.substring(start + word.length);

        // concat asterisks
        text = first + '*'.repeat(word.length) + second;

        start = text.indexOf(word);
    }
 console.log(text);

}

solve("A small sentence with some words", "small");
solve("A small sentence with some words smalls but shitty", "small");