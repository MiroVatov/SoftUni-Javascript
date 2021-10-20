function rgbToHexColor(red, green, blue) {
    // if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
    //     return undefined; // Red value is invalid
    // }
    // if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
    //     return undefined; // Green value is invalid
    // }
    // if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
    //     return undefined; // Blue value is invalid
    // }


    // simple code for checking instead of the above code
    if ([red, green, blue].some(color => typeof color != 'number' || color < 0 || color > 255 ))
    {
        return undefined;
    }

    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);

}

module.exports = { rgbToHexColor };

console.log(rgbToHexColor(0, 0, 0));

// console.log(rgbToHexColor(10, 12, 15));