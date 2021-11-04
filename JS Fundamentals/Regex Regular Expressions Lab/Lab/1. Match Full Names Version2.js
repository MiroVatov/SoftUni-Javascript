function solve(inputStr) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let matches = inputStr.match(pattern);
    console.log(matches.join(' '));
}


solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');