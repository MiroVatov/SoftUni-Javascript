function lockedProfile() {
    // get the buttons
    let buttons = document.querySelectorAll('button');

    // create eventListener for every button
    for (let button of Array.from(buttons)) {
        button.addEventListener('click', showOrHideData)
    }

    function showOrHideData(event) {
        let div = event.target.parentElement;
        let radioButtonLock = div.querySelector('input[value=lock]');
        let radioButtonUnlock = div.querySelector('input[value=unlock]');
        if (radioButtonLock.checked === true) {

        } else if (radioButtonUnlock.checked === true && radioButtonLock.checked === false && event.target.textContent === 'Show more') {
            let hiddenFieldsID = div.querySelector('div');
            hiddenFieldsID.style.display = 'block';
            event.target.textContent = 'Hide it';
        } else if (radioButtonUnlock.checked === true && radioButtonLock.checked === false && event.target.textContent === 'Hide it') {
            let hiddenFieldsID = div.querySelector('div');
            hiddenFieldsID.style.display = 'none';
            event.target.textContent = 'Show more';
        }
    }
}