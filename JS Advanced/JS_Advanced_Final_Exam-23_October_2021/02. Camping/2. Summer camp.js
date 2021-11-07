class SummerCamp {

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];

    }

    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.");

        } else if (this.checkIfParticipantInTheList(name) !== undefined) {
            return `The ${name} is already registered at the camp.`

        } else if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        let participant = {name: name, condition: condition, power: 100, wins: 0};
        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {

        if (this.checkIfParticipantInTheList(name) === undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        let index = this.checkIfParticipantInTheList(name);
        this.listOfParticipants.splice(index);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2 = undefined) {
        if (this.checkIfParticipantInTheList(participant1) === undefined && typeOfGame === "Battleship") {
            throw new Error(`Invalid entered name/s.`);
        } else if ((this.checkIfParticipantInTheList(participant1) === undefined || this.checkIfParticipantInTheList(participant2) === undefined) && typeOfGame === "WaterBalloonFights") {
            throw new Error(`Invalid entered name/s.`);
        }
        if (participant1 !== undefined && participant2 !== undefined && typeOfGame === "WaterBalloonFights") {
            let player1Index = this.checkIfParticipantInTheList(participant1);
            let player2Index = this.checkIfParticipantInTheList(participant2);
            if (this.listOfParticipants[player1Index].condition !== this.listOfParticipants[player2Index].condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            let player1 = this.listOfParticipants[player1Index];
            let player2 = this.listOfParticipants[player2Index];

            if (player1.power > player2.power) {
                player1.wins += 1;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`;
            } else if (player2.power > player1.power) {
                player2.wins += 1;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`;
            }
            return `There is no winner.`;

        } else if (typeOfGame === "Battleship" && participant1 !== undefined) {
            let player1Index = this.checkIfParticipantInTheList(participant1);
            let player1 = this.listOfParticipants[player1Index];
            player1.power += 20;
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
        }

    }

    toString() {
        let data = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}` + '\n';
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for (let participant of sorted) {
            data += `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}` + '\n';
        }
        return data.trim();
    }


    checkIfParticipantInTheList(name) {
        for (let p of this.listOfParticipants) {
            if (p.name === name) {
                return this.listOfParticipants.indexOf(p);
            }
        }
        return undefined;
    }

}


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
//
// console.log(summerCamp.toString());


const camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
camp.registerParticipant('Petar Petarson', 'child', 300);
camp.registerParticipant('Sara Dickinson', 'child', 200);
camp.timeToPlay('Battleship', 'Sara Dickinson');
camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson','Petar Petarson');
console.log(camp.toString());