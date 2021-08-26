function createCard(face ,suit) {
    const validSuites = {
        "S": '\u2660',
        "H": '\u2665',
        "D": '\u2666',
        "C": '\u2663'
    };
    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (! validCardFaces.includes(face) || ! validSuites.hasOwnProperty(suit)) {
        throw new Error('Error');
    }

    return {
        face,
        suit,
        toString() {
            return `${face}${validSuites[face]}`;
        }
    }
}

const myCard = createCard('A', 'S');
console.log(myCard.toString());

const myCard2 = createCard('A', 'S');
console.log(myCard.toString());

const myCard3 = createCard('1', 'S');
console.log(myCard.toString());

// solve('A', 'S');
//
// solve('A', 'S');
//
// solve('10', 'H');
//
// solve('1', 'C');
