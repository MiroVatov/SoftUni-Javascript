function printDeckOfCards(cards) {

    let correctCards = [];
    let inputCards = [...cards];

    function createCard() {
        let cardFace = '';
        let cardSuite = '';
        const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validCardSuites = {"S": '\u2660', "H": '\u2665', "D": '\u2666', "C": '\u2663'};

        function checkIfInputsAreValid(cards) {
            for (let cardInfo of Array.from(cards)) {
                let cardObj = {};
                if (cardInfo.slice(0, 2) === '10') {
                    cardFace = cardInfo.slice(0, 2);
                    cardSuite = cardInfo[cardInfo.length - 1]
                } else {
                    [cardFace, cardSuite] = cardInfo.split('');
                }
                cardObj.face = cardFace;
                cardObj.suite = validCardSuites[cardSuite];
                if (!validCardFaces.includes(cardFace) || !validCardSuites.hasOwnProperty(cardSuite)) {
                    return cardInfo;
                }
                correctCards.push(cardObj);
            }
        }

        let notCorrectCard = checkIfInputsAreValid(inputCards);
        if (notCorrectCard !== undefined) {
            console.log(`Invalid card: ${cardFace}${cardSuite}`);
            return;
        }

        function toString(cards) {
            let outputArray = [];
            cards.forEach((card) => {
                let newCard = card.face + card.suite;
                outputArray.push(newCard);
            });
            console.log(outputArray.join(' '));
        }

        toString(correctCards);

        return createCard;
    }
    return createCard();
}


printDeckOfCards(['AS', '10D', 'KH', '2C']);

printDeckOfCards(['AS', '10D', 'KH', '2C']);

printDeckOfCards(['5S', '3D', 'QD', '1C']);
