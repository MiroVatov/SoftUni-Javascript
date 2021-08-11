function solve() {
    let output = document.getElementById('output');
    let input = document.getElementById('input');
    let inputArr = input.value.split('. ');

    let iterations = Math.ceil(inputArr.length / 3);

    for (let i = 0; i < iterations; i++) {
        let row = inputArr.splice(0, 3).join('.');
        if (i === iterations - 1) {
            output.innerHTML += `<p>${row}</p>`;
        } else {
            output.innerHTML += `<p>${row}.</p>`;
        }
    }
}

