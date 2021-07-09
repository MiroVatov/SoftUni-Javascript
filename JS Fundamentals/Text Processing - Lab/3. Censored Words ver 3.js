function solve(text, word) {
    text = text.split(word);
    let rep = '*'.repeat(word.length);
    console.log(text.join(rep));
}


solve("A small sentence with some words", "small");
solve("A small sentence with some words smalls but shitty", "small");