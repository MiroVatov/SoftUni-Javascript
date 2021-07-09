function solve(text, firstIndex, count) {
    // let subText = text.substr(firstIndex, count);
    let subText = text.substring(firstIndex, firstIndex + count);

    console.log(subText);
}

solve("ASentance", 1, 8);

solve('A different text to practice', 2, 8);