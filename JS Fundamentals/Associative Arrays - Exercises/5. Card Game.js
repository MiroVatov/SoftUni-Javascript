function cardGame(cardsAndPlayersArray) {

    function addCardToPlayersDeck(newDeck, playerName) {
        for (let card of newDeck){
            playersDict[playerName].add(card);
        }
        return playersDict;
    }

    function calculateTePowerOfPlayerCards(cardsSet) {
        let cardsPower = 0;
        for (let card of cardsSet ) {
            if (card.length === 2) {
                cardsPower += Number(cardsPowerDict[card[0]]) * Number(cardsPowerDict[card[1]]);
            }
            else{
                cardsPower += Number(cardsPowerDict[card.substr(0, 2)]) * Number(cardsPowerDict[card[2]]);
            }
        }
        return cardsPower;
    }

    let cardsPowerDict = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
        'J': 11, 'Q': 12, 'K': 13, 'A': 14,
        'S': 4, 'H': 3, 'D': 2, 'C': 1};
    let playersDict = {}; 

    for (let card of cardsAndPlayersArray){
        let [ playerName, cardsDeckSet ] = card.split(': ');
        cardsDeckSet = new Set(cardsDeckSet.split(', '));

        if (! playersDict.hasOwnProperty(playerName)){
            playersDict[playerName] = cardsDeckSet;
        }
        else{
            playersDict = addCardToPlayersDeck(cardsDeckSet, playerName);
        }
    }

    for (let [ playerName, cardsSet ] of Object.entries(playersDict)){
        playersDict[playerName] = calculateTePowerOfPlayerCards(cardsSet);
    }
    for (let data in playersDict){
        console.log(`${data}: ${playersDict[data]}`);
    }

}

cardGame([
'Peter: 2C, 4H, 9H, AS, QS',
'Tomas: 3H, 10S, JC, KD, 5S, 10S',
'Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD']);

// cardGame([
// 'Peter: 2C, 4H, 9H, AS, QS',
// 'Tomas: 3H, 10S, JC, KD, 5S, 10S',
// 'Andrea: QH, QC, QS, QD',
// 'Tomas: 6H, 7S, KC, KD, 5S, 10C',
// 'Andrea: QH, QC, JS, JD, JC',
// 'Peter: JD, JD, JD, JD, JD, JD']);