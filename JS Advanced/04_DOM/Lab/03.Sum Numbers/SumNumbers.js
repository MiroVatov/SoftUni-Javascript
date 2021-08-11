function calc() {
    // TODO: sum = num1 + num2
    let firstNum =  document.getElementById('num1');
    let secondNm = document.getElementById('num2');
    let sum = document.getElementById('sum');
    sum.value = +firstNum.value + +secondNm.value;
}
