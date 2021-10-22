function validate() {
    let inputField = document.getElementById('email');
    inputField.addEventListener('change', checkForEmailValidation);

    function checkForEmailValidation() {
        if ((/^[a-z]+([\\.-]?[a-z]+)*@[a-z]+([\\.-]?[a-z]+)*(\.[a-z]{2,3})+$/.test(inputField.value) )) {
            inputField.removeAttribute("class");
        } else {
            inputField.classList.add("error");
        }

    }
}