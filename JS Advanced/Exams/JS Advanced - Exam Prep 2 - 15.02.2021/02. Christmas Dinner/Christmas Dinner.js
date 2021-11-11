class ChristmasDinner {

    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
        this.dishesNames = [];
        this.guestsNames = [];

    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }

    shopping(product) {
        let [productName, productPrice] = product;
        if (productPrice > this.budget) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(productName);
        this.budget -= Number(productPrice);
        return `You have successfully bought ${productName}!`;
    }

    recipes(recipe) {
        let found = this._checkForProducts(recipe.productsList);
        if (found) {
            this.dishes.push(recipe);
            this.dishesNames.push(recipe.recipeName);
            return `${recipe.recipeName} has been successfully cooked!`;
        }
        throw new Error(`We do not have this product`);
    }

    _checkForProducts(productsList) {
        for (let product of productsList) {
            if (!this.products.includes(product)) {
                return false;
            }
        }
        return true;
    }

    _findDishIndex(dishName){
        for (let i = 0; i < Object.keys(this.dishes).length; i++){
            if (this.dishes[i].recipeName === dishName){
                return i;
            }
        }
        return -1;
    }

    inviteGuests(name, dish) {
        if (!this.dishesNames.includes(dish)){
            throw new Error(`We do not have this dish`);
        } else if (this.guestsNames.includes(name)){
            throw new Error('This guest has already been invited');
        }

        this.guestsNames.push(name);
        const index = this._findDishIndex(dish);
        this.guests[name] = [dish, this.dishes[index].productsList];
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let data = '';
        for (let [ key, value ] of Object.entries(this.guests)){
            data += `${key} will eat ${value[0]}, which consists of ${value[1].join(', ')}\n`;
        }
        return data.trim();
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
dinner.shopping(['Fruits', 40]);


// console.log(dinner.recipes({
//     recipeName: 'Musaka',
//     productsList: ['Minced meat', 'Honey']
// }));

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});

dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});

dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
