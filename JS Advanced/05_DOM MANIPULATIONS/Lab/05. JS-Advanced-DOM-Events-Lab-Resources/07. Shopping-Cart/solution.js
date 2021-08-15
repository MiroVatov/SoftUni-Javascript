function solve() {
    // get the textArea field

    let textArea = document.querySelector('div.shopping-cart textarea');

    // create Cart object to store the added products

    let cartObj = {};

    // get the ADD button

    let divButtons = Array.from(document.querySelectorAll('.add-product'));

    for (let button of Array.from(divButtons)) {
        button.addEventListener('click', onAddButton);
    }
    // get the checkOut button

    let checkoutButton = document.querySelector('.checkout');

    // add event to the checkOutButton
    checkoutButton.addEventListener('click', showFinalPurchases);

    function removeButtonsEventListeners() {
        for (let button of Array.from(document.querySelectorAll('button'))) {
            button.disabled = true;
            // button.removeEventListener('click', onAddButton);
        }
    }

    function showFinalPurchases(event) {
        let names = Object.keys(cartObj);
        let prices = Number(Object.values(cartObj).reduce((acc, curr) => acc + curr, 0));
        textArea.value += `You bought ${names.join(', ')} for ${prices.toFixed(2)}.`

        // remove all eventlisteners
        removeButtonsEventListeners();
        // event.target.removeEventListener('click', showFinalPurchases);
    }

    // create the Event when Add button is clicked

    function onAddButton(event) {
        let chosenProductName = event.target.parentNode;
        let prodName = chosenProductName.parentNode.querySelector('div.product-title').textContent;

        let chosenProductPrice = event.target.parentNode;
        let prodPrice = chosenProductPrice.parentNode.querySelector('div.product-line-price').textContent;

        // and append the current product to the textarea
        // add the product : name, price to the Cart object

        cartObj[prodName] = +prodPrice;
        textArea.value += `Added ${prodName} for ${Number(prodPrice).toFixed(2)} to the cart.\n`
    }
}