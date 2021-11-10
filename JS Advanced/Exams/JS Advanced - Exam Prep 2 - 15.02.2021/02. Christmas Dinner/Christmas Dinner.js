class ChristmasDinner {

    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};

    }

    get budget(){
        return this._budget;
    }

    set budget(value){
        if (value < 0){
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }

    shopping( product ){
        let [ productName, productPrice ] = product;
        if (productPrice > this.budget){
            throw new Error('Not enough money to buy this product');
        }

        let productObj = {name: productName, price: productPrice};
        this.products.push(productObj);
        this.budget -= Number(productPrice);
        return `You have successfully bought ${productName}!` // TODO check what means {type} in the word file.
    }

    recipe(recipe){
        // TODO
    }

    inviteGuests(name, dish){
        // TODO
    }

    showAttendance(){
        // TODO
    }

}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

// dinner.recipes({
//     recipeName: 'Oshav',
//     productsList: ['Fruits', 'Honey']
// });
// dinner.recipes({
//     recipeName: 'Folded cabbage leaves filled with rice',
//     productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
// });
// dinner.recipes({
//     recipeName: 'Peppers filled with beans',
//     productsList: ['Beans', 'Peppers', 'Salt']
// });
//
// dinner.inviteGuests('Ivan', 'Oshav');
// dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
// dinner.inviteGuests('Georgi', 'Peppers filled with beans');
//
// console.log(dinner.showAttendance());
