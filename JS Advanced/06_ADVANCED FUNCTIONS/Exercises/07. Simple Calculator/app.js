function calculator() {
    let firstNum;
    let secondNum;
    let result;

    //!!! If there are onclick functions mentioned in the index.html file, attached to the buttons,
    // there is no need to create event listeners to the buttons. !!!

    // let sumButton = document.getElementById('sumButton');
    // let subtractButton = document.getElementById('subtractButton');

    return {
        init: function (selector1, selector2, resultSelector) {
            firstNum = document.querySelector(selector1);
            secondNum = document.querySelector(selector2);
            result = document.querySelector(resultSelector);

            //!!! If there are onclick functions mentioned in the index.html file, attached to the buttons,
            // there is no need to create event listeners to the buttons. !!!

            // sumButton.addEventListener('click', add);
            // subtractButton.addEventListener('click',subtract);

        },
        add: function () {
            result.value = Number(firstNum.value) + Number(secondNum.value);
        },
        subtract: function () {
            result.value = Number(firstNum.value) - Number(secondNum.value);
        }
    }

}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
calculate.add(7, 5);
calculate.subtract(10, 3);

