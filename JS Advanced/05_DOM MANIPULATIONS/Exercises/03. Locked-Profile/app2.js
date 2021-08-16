function lockedProfile() {

    // select initial DOM element -> Always use ID names of classes names, because if HTML of the page is edited, the querySelectors will not be useful any more.
    // Always choose the highest possible selector and from there you pick the needed child selectords
    let profiles = document.querySelectorAll('#main .profile');
    let buttons = document.querySelectorAll('#main .profile button');

    // add eventListeners to the buttons

    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener('click', () => {

            // get radio button for profile
            let radioButton = document.querySelector(`input[name="user${index + 1}Locked"]:checked`);

            // check if profile is unlocked
            if (radioButton.value === 'unlock') {
                // get hidden field
                let hiddenFieldElement = document.getElementById(`user${index + 1}HiddenFields`);

                // toggle hidden filed display
                hiddenFieldElement.style.display = hiddenFieldElement.style.display === 'block'
                    ? 'none'
                    : 'block';
                buttons[index].textContent = buttons[index].textContent === 'Show more'
                    ? 'Hide it'
                    : 'Show more';
            }
        });

    }
}