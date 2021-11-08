window.addEventListener('load', solution);

function solution() {

    const divIDBlock = document.getElementById('block');

    let submitButton = document.getElementById('submitBTN'); // .value
    let editButton = document.getElementById('editBTN'); // .value
    let continueButton = document.getElementById('continueBTN'); // .value
    let previewUl = document.getElementById('infoPreview');

    let inputDataArray = [];

    let fullName = document.getElementById('fname');
    let email = document.getElementById('email');
    let phoneNumber = document.getElementById('phone');
    let address = document.getElementById('address');
    let postalCode = document.getElementById('code');

    function submitTravelInfo() {
        // event.preventDefault();  // TODO


        if (fullName.value !== "" && email.value !== "") {
            submitButton.disabled = true;
            editButton.disabled = false;
            continueButton.disabled = false;

            previewUl.innerHTML += `<li>Full Name: ${fullName.value}</li>`;
            previewUl.innerHTML += `<li>Email: ${email.value}</li>`;
            previewUl.innerHTML += `<li>Phone Number: ${phoneNumber.value}</li>`;
            previewUl.innerHTML += `<li>Address: ${address.value}</li>`;
            previewUl.innerHTML += `<li>Postal Code: ${postalCode.value}</li>`;

            inputDataArray = [fullName.value, email.value, phoneNumber.value, address.value, postalCode.value];

            fullName.value = "";
            email.value = "";
            phoneNumber.value = "";
            address.value = "";
            postalCode.value = "";

        }
    }

    function loadTheInfo() {
        fullName.value = inputDataArray[0];
        email.value = inputDataArray[1];
        phoneNumber.value = inputDataArray[2];
        address.value = inputDataArray[3];
        postalCode.value = inputDataArray[4];

        previewUl.innerHTML = "";

        submitButton.disabled = false;
        editButton.disabled = true;
        continueButton.disabled = true;
    }

    editButton.addEventListener('click', loadTheInfo);

    submitButton.addEventListener('click', submitTravelInfo);

    continueButton.addEventListener('click', () => {
       divIDBlock.innerHTML = `<h3>Thank you for your reservation!</h3>`;
    });

}
