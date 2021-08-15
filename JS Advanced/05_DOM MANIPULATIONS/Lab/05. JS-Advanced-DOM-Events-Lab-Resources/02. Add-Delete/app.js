function addItem() {

    // create li
    const input = document.getElementById('newItemText');
    const liElement = createNewElement( 'li', input.value );

    // add delete button
    const deleteButton = createNewElement('a', '[Delete]');
    liElement.appendChild(deleteButton);

    deleteButton.addEventListener('click', remElement);
    deleteButton.href = "#";

    function remElement(event) {
        event.target.parentNode.remove();
    }

    // add new <li> to document
    document.getElementById('items').appendChild(liElement);
    input.value = '';

    function createNewElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}