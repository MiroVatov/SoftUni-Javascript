function focused() {

    // select all input fields --> div's
    let inputs = document.querySelectorAll('input');
    for ( let div of Array.from(inputs) ) {
        //add listener for focus event
        div.addEventListener('focus', onFocus);
        // add listener for blur event
        div.addEventListener('blur', onBlur);
    }

    function onFocus(event) {
        // onFocus -> select input event -> apply class focused
        event.target.parentNode.className = 'focused';
    }

    function onBlur(event) {
        // onBlur -> select input parent -> remove class "focused"
        event.target.parentNode.className = '';
    }
}