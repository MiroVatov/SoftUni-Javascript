function solve(area, vol, inputJSON) {
    const figures = JSON.parse(inputJSON);

    let output = [];
    for (const figure of figures) {
        let figuresObject = { area: area.call(figure), volume: vol.call(figure) };
        output.push(figuresObject);
    }
    return output;
}

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

// const inputJSON = `[
// {"x":"1","y":"2","z":"10"},
// {"x":"7","y":"7","z":"10"},
// {"x":"5","y":"2","z":"10"}
// ]`;

const inputJSON = `[
{"x":"10","y":"-22","z":"10"},
{"x":"47","y":"7","z":"-5"},
{"x":"55","y":"8","z":"0"},
{"x":"100","y":"100","z":"100"},
{"x":"55","y":"80","z":"250"}
]`;

solve(area, vol, inputJSON);