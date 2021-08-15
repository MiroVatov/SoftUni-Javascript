function validate() {

    // get the email input
    let emailText = document.getElementById('email');

    // create the invalid event

    emailText.addEventListener('change', onChange);

    function onChange(event) {
        // validate email with regex
        let emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

        if ( emailPattern.test(emailText.value) === true ) {
            event.target.className = '';
        } else {
            event.target.className = 'error';
        }
    }

}