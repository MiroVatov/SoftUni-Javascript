class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // getter -> like property in python -> no need to encapsulate instance variables and data
    get diameter() {
        return this.radius * 2;
    }

    // property setter -> with or without validation
    set diameter(value) {
        // if (typeof value !== 'number'){
        //     throw new TypeError('Type of diameter should be number');
        // }

        this.radius = value / 2;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
// c.diameter = 1.6;
c.radius = 2.5;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

