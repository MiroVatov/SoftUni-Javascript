
function validate() {
    const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    const emailValidationRegex = /^[^@.]+@[^@]*\.[^@]*$/;
    // const emailValidationRegex = /^[a-z]+([\\.-]?[a-z]+)*@[a-z]+([\\.-]?[a-z]+)*(\.[a-z]{2,3})+$/
    const passwordValidationRegex = /^[\w+]{5,15}$/;

    const companyInfoFieldSet = document.getElementById('companyInfo');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const companyCheckBox = document.getElementById('company');
    const hiddenCompanyNumberInput = document.getElementById('companyNumber');
    const divIdValid = document.getElementById('valid');
    const submitButton = document.getElementById('submit');
    let usernameBool = false;
    let passwordBool = false;
    let confirmPasswordBool = false;
    let emailBool = false;

    companyCheckBox.addEventListener('change', checkBoxEvent);

    function checkBoxEvent() {
        if (companyCheckBox.checked) {
            companyInfoFieldSet.style.display = "block";
        } else {
            companyInfoFieldSet.style.display = 'none';
        }
    }

    function hiddenCompanyFieldValidation() {
        return hiddenCompanyNumberInput.value >= 1000 && hiddenCompanyNumberInput.value <= 9999;
    }

    submitButton.addEventListener('click', validateAllFields);

    function validateAllFields(event) {
        event.preventDefault();

        if (usernameRegex.test(usernameInput.value) && usernameInput.value !== '') {
            usernameInput.style.border = 'none';
            usernameBool = true;
        } else {
            usernameInput.style.borderColor = 'red';
        }
        if (emailValidationRegex.test(emailInput.value) && emailInput.value !== '') {
            usernameInput.style.border = 'none';
            emailBool = true;
        } else {
            emailInput.style.borderColor = 'red';
        }
        if (passwordValidationRegex.test(passwordInput.value) && (passwordInput.value === confirmPasswordInput.value)) {
            passwordInput.style.border = 'none';
            confirmPasswordInput.style.border = 'none';
            passwordBool = true;
            confirmPasswordBool = true;

        } else {
            passwordInput.style.borderColor = 'red';
            confirmPasswordInput.style.borderColor = 'red';
        }
        if (companyCheckBox.checked) {
            if (hiddenCompanyFieldValidation()) {
                hiddenCompanyNumberInput.style.border = 'none';

            } else {
                hiddenCompanyNumberInput.style.borderColor = 'red';
            }
        }

        if (usernameBool && passwordBool && confirmPasswordBool && emailBool) {
            divIdValid.style.display = "block";
        }
    }

}






