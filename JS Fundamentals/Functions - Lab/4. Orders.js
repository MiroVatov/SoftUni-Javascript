function orders(product, quantity) {
    let productPrice = 0;
    let	coffee = 1.50;
    let	water = 1.00;
    let coke = 1.40;
    let snacks = 2.00;

    if (product === 'coffee')
    { productPrice = coffee * quantity;
        console.log(productPrice.toFixed(2)); }

    else if (product === 'water')
        { productPrice = water * quantity;
            console.log(productPrice.toFixed(2)); }

    else if (product === 'coke')
    { productPrice = coke * quantity;
        console.log(productPrice.toFixed(2)); }

    else if (product === 'snacks')
    { productPrice = snacks * quantity;
    console.log(productPrice.toFixed(2));}
}


orders('water', 5);
orders('coffee', 2);