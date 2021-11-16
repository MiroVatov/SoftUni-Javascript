class Bank {

    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer){
        let checkCustomer = this.allCustomers.find(Customer => Customer.personalId === customer.personalId);
        if (checkCustomer !== undefined){
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        customer.totalMoney = 0;
        customer.transactions = [];

        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount){
        let checkCustomer = this.allCustomers.find(Customer => Customer.personalId === personalId);
        if (checkCustomer === undefined){
            throw new Error(`We have no customer with this ID!`);
        }
        checkCustomer.totalMoney += amount;
        checkCustomer.transactions.push(`${checkCustomer.firstName} ${checkCustomer.lastName} made deposit of ${amount}$!`);
        return `${checkCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount){
        let checkCustomer = this.allCustomers.find(Customer => Customer.personalId === personalId);
        if (checkCustomer === undefined){
            throw new Error(`We have no customer with this ID!`);
        }

        if (checkCustomer.totalMoney < amount){
            throw new Error(`${checkCustomer.firstName} ${checkCustomer.lastName} does not have enough money to withdraw that amount!`);
        }

        checkCustomer.totalMoney -= amount;
        checkCustomer.transactions.push(`${checkCustomer.firstName} ${checkCustomer.lastName} withdrew ${amount}$!`);
        return `${checkCustomer.totalMoney}$`;
    }

    customerInfo(personalId){
        let checkCustomer = this.allCustomers.find(Customer => Customer.personalId === personalId);
        if (checkCustomer === undefined){
            throw new Error(`We have no customer with this ID!`);
        }
        let data = `Bank name: ${this._bankName}\n`;
        data += `Customer name: ${checkCustomer.firstName} ${checkCustomer.lastName}\n`;
        data += `Customer ID: ${checkCustomer.personalId}\n`;
        data += `Total Money: ${checkCustomer.totalMoney}$\n`;
        data += `Transactions:\n`;
        if(checkCustomer.transactions.length > 0){
            for (let i = checkCustomer.transactions.length - 1; i >= 0; i--){
                data += `${i + 1}. ${checkCustomer.transactions[i]}\n`;
            }
        }

        return data.trim();
    }

}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));


bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
