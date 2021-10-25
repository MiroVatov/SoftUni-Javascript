// The JAVA way of getters and setters

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // getter
    getRadius() {
        return this.radius;
    }

    # setter
    setRadius(value) {
        if (typeof value !== 'number') {
            throw new Error('Type of radius must be a number');
        }
        this.radius = value;
    }

    getDiameter(){
        return this.radius * 2;
    }
    setDiameter(value) {
        if (typeof value !== 'number') {
            throw new Error('Type of diameter must be a number');
        }
        this.radius = value / 2;
    }
    getArea() {
        return Math.PI * (this.radius ** 2);
    }
}

let c = new Circle(2);
// console.log(`Radius: ${c.getRadius()}`);
// console.log(`Diameter: ${c.getDiameter()}`);
// console.log(`Area: ${c.getArea()}`);
// c.setDiameter(1.6);
// console.log(`Radius: ${c.getRadius()}`);
// console.log(`Diameter: ${c.getDiameter()}`);
// console.log(`Area: ${c.getArea()}`);
console.log(c.getArea());
