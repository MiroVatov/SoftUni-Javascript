function wordOccurrences(inputArray) {
    let occurrencesMap = new Map();

    for (let word of inputArray){
        if (! occurrencesMap.has(word)){
            occurrencesMap.set(word, 1);
        }
        else{
            let times = Number(occurrencesMap.get(word));
            occurrencesMap.set(word, times + 1);
        }
    }
    let sortedWords = Array.from(occurrencesMap).sort((a, b) => b[1] - a[1]);
    for (let [ word, times ] of sortedWords){
        console.log(`${word} -> ${times} times`)
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
