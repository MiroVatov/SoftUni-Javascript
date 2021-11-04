function solve(inputStr) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let matchesArray = [...inputStr.matchAll(pattern)];
    console.log(matchesArray.join(' '));
}


solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');