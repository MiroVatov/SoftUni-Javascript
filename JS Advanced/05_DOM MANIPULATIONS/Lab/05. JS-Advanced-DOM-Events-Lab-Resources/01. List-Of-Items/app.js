function addItem() {
    let input = document.getElementById('newItemText').value;
    let listOfItems = document.getElementById('items');
    let li = document.createElement('li');
    // li.appendChild(document.createTextNode(input));
    li.textContent = input;
    listOfItems.appendChild(li);
    document.getElementById('newItemText').value = '';
}