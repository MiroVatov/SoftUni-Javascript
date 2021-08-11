function solve() {
    let firstInput = document.getElementById('text').value;
    let textToBeMatched = document.getElementById('naming-convention').value;
    let newWord = '';

    if ( textToBeMatched === "Camel Case"){
        firstInput = firstInput.split(' ');
        for ( let i = 0; i < firstInput.length; i++ ){
            firstInput[i] = firstInput[i].toLowerCase();
            if ( i > 0 ){
                newWord += firstInput[i][0].toUpperCase() + firstInput[i].slice(1);
            }
            else {
                newWord += firstInput[i];
            }
        }
    }
    else if ( textToBeMatched === "Pascal Case" ){
        firstInput = firstInput.split(' ');
        for ( let word  of firstInput ){
            word = word.toLowerCase();
            newWord += word[0].toUpperCase() + word.slice(1);
        }
    }
    else {
        newWord = "Error!";
    }
    let result = document.getElementById('result');
    result.textContent = newWord;
}