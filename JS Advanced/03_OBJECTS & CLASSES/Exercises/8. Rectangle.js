function rectangle(width, height, color) {
    let firstLetter = color[0].toUpperCase();
    color = color.replace(color[0], firstLetter);

    return {
        width: Number(width),
        height: Number(height),
        color: color,
        calcArea: function () {
            return width * height;
        }
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
