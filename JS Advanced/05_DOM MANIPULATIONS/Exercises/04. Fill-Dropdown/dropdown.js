function addItem() {
    let newItemTextInput = document.getElementById('newItemText');
    let newItemValueInput = document.getElementById('newItemValue');
    let optionElement = document.createElement('option');
    let menuSelect = document.getElementById('menu');

    optionElement.textContent = newItemTextInput.value;
    optionElement.value = newItemValueInput.value;
    menuSelect.appendChild(optionElement);
    newItemTextInput.value = '';
    newItemValueInput.value = '';

}