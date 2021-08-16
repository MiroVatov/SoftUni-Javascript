function attachEventsListeners() {


    // when button is clicked .check the input value and convert the value from the input filed

    // get the input value

    let buttons = Array.from(document.querySelectorAll('input[type=button]'));

    for (let btn of buttons) {
        btn.addEventListener('click', convertTheInputs);
    }

    // get main tag

    let mainTag = document.getElementsByTagName('main');

    // find the buttons and add event listeners to all the buttons

    function convertTheInputs(event) {

        function findTheInput(div) {
            let input = div.querySelector('input[type=text]').value;
            let inputId = div.querySelector('input[id]').getAttribute('id');
            return [Number(input), inputId];
        }

        function fillTeUnfilledInput(inputValue, inputId) {
            let inputFields = document.querySelectorAll('input[type=text]');

            for (let field of Array.from(inputFields)) {
                let days = 0;
                let hours = 0;
                let minutes = 0;
                let seconds = 0;
                let daysInp = document.getElementById('days');
                let hoursInp = document.getElementById('hours');
                let minutesInp = document.getElementById('minutes');
                let secondsInp = document.getElementById('seconds');

                if (field.id === inputId) {
                    if (inputId === 'days') {
                        days = inputValue;
                        hoursInp.value = inputValue * 24;
                        minutesInp.value = hours * 60;
                        secondsInp.value = minutes * 60;
                        break;

                    } else if (inputId === 'hours') {
                        hours = inputValue;
                        daysInp.value = inputValue / 24;
                        minutesInp.value = hours * 60;
                        secondsInp.value = minutes * 60;
                        break;

                    } else if (inputId === 'minutes') {
                        minutes = inputValue;
                        daysInp.value = inputValue / 1440;
                        hoursInp.value = days * 24;
                        secondsInp.value = minutes * 60;
                        break;

                    } else if (inputId === 'seconds') {
                        seconds = inputValue;
                        daysInp.value = inputValue / 86400;
                        hoursInp.value = days * 24;
                        minutesInp.value = hours * 60;
                        break;
                    }
                }
            }
        }

        for ( let main of mainTag ) {
            let divs = main.children;
            for (let i = 1; i < Array.from(divs).length; i++) {
                let div = divs[i];
                let [inputValue, inputId] = findTheInput(div);
                if (inputValue !== 0) {
                    fillTeUnfilledInput(inputValue, inputId);
                    break;
                }
            }
        }
    }

}