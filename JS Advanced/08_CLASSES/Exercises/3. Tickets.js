function solve(inputArray, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;

        }

        toString() {
            return `destination: ${this.destination}, price: ${this.price}, status: ${this.status}`;
        }
    }

    let result = [];
    for (let t of inputArray) {
        let [destination, price, status] = t.split('|');
        let ticket = new Ticket(destination, price, status);

        result.push(ticket);
    }
    if (sortingCriterion === 'price'){
        return result.sort((a, b) => a[sortingCriterion] - b[sortingCriterion]);
    } else {
        return result.sort((a, b) => a[sortingCriterion].localeCompare(b[sortingCriterion]));
    }
}

// console.log(solve(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'destination'
// ));
//
// console.log(solve(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'status'
// ));

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'));