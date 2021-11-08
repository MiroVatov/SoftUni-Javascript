class Restaurant {

    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];

    }

    loadProducts(products) {
        // products is array with productName, quantity and totalPrice
        // "{productName} {productQuantity} {productTotalPrice}"
        // Example: ["Banana 10 5", "Strawberries 50 30", "Honey 5 50"…]

        for (let productData of products) {
            let [productName, productQuantity, productTotalPrice] = productData.split(' ');

            if (Number(productTotalPrice) <= this.budgetMoney) {
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = 0;

                }
                this.stockProducts[productName] += Number(productQuantity);
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);

            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }

        }
        return this.history.join('\n');

    }

    addToMenu(meal, neededProducts, price) {

        // accepts 3 arguments: meal (string), needed products (array from strings) and price (number).
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        this.menu[meal] = {"products": neededProducts, "price": price};

        if (Object.keys(this.menu).length === 1){
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }
    }

    showTheMenu(){
        if(Object.keys(this.menu).length === 0){
            return `Our menu is not ready yet, please come later...`;
        }
        let data = [];
        for (let [mealName, mealData] of Object.entries(this.menu)){
            data.push(`${mealName} - $ ${mealData.price}`);
        }
        return data.join('\n');
    }

    makeTheOrder(meal){
        if(!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        for (let prod of this.menu[meal].products){
            let [prodName, qty] = prod.split(' ');
            if (!this.stockProducts.hasOwnProperty(prodName) || this.stockProducts[prodName] < qty){
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }

            this.stockProducts[prodName] -= Number(qty);

        }
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }

}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
//console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));


let kitchen = new Restaurant(30);
console.log(kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']));
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 21'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

