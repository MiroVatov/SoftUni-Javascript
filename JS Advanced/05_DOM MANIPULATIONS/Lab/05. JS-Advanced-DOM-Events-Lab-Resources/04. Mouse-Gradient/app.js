function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    const output = document.getElementById('result');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        output.textContent = power + "%";
    }

    function gradientOut(event) {
        output.textContent = '';
    }
}