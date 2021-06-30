function storeProvision(currentStock, orderedStock) {
    let currentStockObj = {};
    for (let i = 0; i < currentStock.length; i += 2) {
        let currentProduct = currentStock[i];
        if (!currentStockObj.hasOwnProperty(currentProduct))
            currentStockObj[currentProduct] = Number(currentStock[i + 1]);
    }
    for (let j = 0; j < orderedStock.length; j+=2) {
        let currentOrderedProduct = orderedStock[j];
        let qty = Number(orderedStock[j + 1]);
        if (currentStockObj.hasOwnProperty(currentOrderedProduct)) {
            currentStockObj[currentOrderedProduct] += qty;
        } else {
            currentStockObj[currentOrderedProduct] = qty;
        }
    }
    for (let [ product, quantity ] of Object.entries(currentStockObj)){
        console.log(`${product} -> ${quantity}`)
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

// storeProvision(
//     ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//     ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);