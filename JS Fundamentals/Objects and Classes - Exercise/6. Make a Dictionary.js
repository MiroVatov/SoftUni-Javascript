function makeADictionary(jsonStrings) {
    let termsArr = [];

    function checkIfTermExists(searchedObj) {
        for (let term of termsArr){
            if (term.term === searchedObj.term){
                term.definition = searchedObj.definition;
                return term;
            }
        }
        return undefined;
    }

    function findIndex(termsArr, curTerm) {
        for (let ar of termsArr){
            if (ar.term === curTerm){
                return termsArr.indexOf(ar);
            }
        }
        return undefined;
    }

    for (let jsonStr of jsonStrings) {

        let finalObj = {'term': '', 'definition': ''};
        let jsonObj = JSON.parse(jsonStr);
        let currentObj = {};
        for  (let o of Object.entries(jsonObj)){
            currentObj.term = o[0];
            currentObj.definition = o[1];
        }

        for (let [key, value] of Object.entries(jsonObj)) {
            let term = checkIfTermExists(currentObj);
            if (term === undefined) {
                finalObj.term = key;
                finalObj.definition = value;
                termsArr.push(finalObj);
                break;
            }
            else{
                let index = findIndex(termsArr, currentObj.term);
                termsArr.splice(index, 1);
                termsArr.push(term);
                break;
            }
        }
    }
    let sortedTerms = termsArr.sort((a, b) => a.term.localeCompare(b.term));
    for (let data of sortedTerms) {
            console.log(`Term: ${data.term} => Definition: ${data.definition}`);
    }
}

makeADictionary([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Boiler":"A boiler is a boiler!."}',
]);

// makeADictionary([
// '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
// '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
// '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
// '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
// '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
// ]);