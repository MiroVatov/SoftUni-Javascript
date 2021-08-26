function solve(cardFace, cardSuite) {
    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validCardSuites = {"S": '\u2660', "H": '\u2665', "D": '\u2666', "C": '\u2663'};

    if ( !validCardFaces.includes(cardFace) || !validCardSuites.hasOwnProperty(cardSuite)) {
        throw new Error('Error');
    }

    let cardObj = {};
    cardObj.face = cardFace;
    cardObj.suite = validCardSuites[cardSuite];
    cardObj.toString = () => {
        return `${cardObj.face}${cardObj.suite}`;
    }

    return cardObj;
}


let cardObj1 = solve('A', 'S');
console.log(cardObj1.toString());

let cardObj2 = solve('10', 'H');
console.log(cardObj2.toString());

let cardObj3 = solve('1', 'C');
console.log(cardObj3.toString());


