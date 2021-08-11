function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNum = Number(document.getElementById('secondNumber').value);
    let resultField = document.getElementById('result');
    resultField.textContent = firstNum - secondNum;
    console.log(resultField);
}