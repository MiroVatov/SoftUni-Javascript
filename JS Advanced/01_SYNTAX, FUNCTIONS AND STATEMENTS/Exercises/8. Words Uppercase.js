function solve(inputString) {
    let upperCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let delimiters = [' ',',', '!', '?', ':', ', ', '.'];
    function checkIfIsAWord(word) {
        let newWord = '';
        for (let letter of word){
            if (typeof letter !== "string"){
                return false;
            }
            else{
                if (upperCharacters.includes(letter) || lowerCharacters.includes(letter)){
                    newWord += letter;
                }
            }
        }
        return newWord;
    }

    let inputArray = inputString.split(' ');

    let data = [];

    function checkForDelimiters(word) {
        let indexes = [];
        for (let letter of word){
            if (delimiters.includes(letter)){
                 indexes.push(delimiters.indexOf(letter));
            }
        }
        return indexes;
    }

    for (let word of inputArray){
        if (checkIfIsAWord(word) !== false){
            let delimiter= checkForDelimiters(word);
            if (delimiter.length > 0){
                word = word.replace(delimiters[delimiter], '');
            }
            word = checkIfIsAWord(word);
            data.push(word.toUpperCase());
        }
    }
    console.log(data.join(', '));
}

solve("?'Hi, how are you?");
solve('Hi, how are you?');
solve('hello');
solve('Functions in JS can be nested, i.e. hold other functions');