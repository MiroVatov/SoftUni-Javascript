function solve(inputStr) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;

    while ((validName = pattern.exec(inputStr)) !== null) {
         validNames.push(validName[0]);
    }

    console.log(validNames.join(' '));

}



// let inputNames = ['ivan ivanov', 'Ivan ivanov', 'ivan Ivanov', 'IVan Ivanov', 'Ivan IvAnov', 'Ivan	Ivanov'];

solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');