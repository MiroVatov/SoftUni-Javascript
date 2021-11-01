function solve() {

    class Figure {
        constructor(units) {
            this.units = units;
            this._area = undefined;
        }

        get area() {
            return this._area;
        }

        changeUnits(newUnits) {
        }

        toString() {
            return `Figures units: ${this.units}`
        }

    }

    class Circle extends Figure {

        constructor(radius, units) {
            super(units);
            this.radius = radius;
            if (units === 'm') {
                this.radius /= 100;
                this.units = units
            } else if (units === 'mm') {
                this.radius *= 10;
                this.units = units;
            } else if (units === 'cm') {
                this.radius = radius;
                this.units = units;
            } else {
                this.units = "cm";
            }
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - radius: ${this.radius}`;
        }

        changeUnits(newUnits) {
            if (this.units === 'cm' && newUnits === 'm') {
                this.radius /= 100;
            } else if (this.units === 'cm' && newUnits === 'mm') {
                this.radius *= 10;
            } else if (this.units === 'mm' && newUnits === 'cm') {
                this.radius /= 10;
            } else if (this.units === 'mm' && newUnits === 'm') {
                this.radius /= 1000;
            } else if (this.units === 'm' && newUnits === 'cm') {
                this.radius *= 100;
            } else if (this.units === 'm' && newUnits === 'mm') {
                this.radius *= 1000;
            }
            this.units = newUnits;
        }
    }


    class Rectangle extends Figure {

        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;

            if (units === 'm') {
                this.width /= 100;
                this.height /= 100;
                this.units = units;
            } else if (units === 'mm') {
                this.width *= 10;
                this.height *= 10;
                this.units = units;
            } else if (units === 'cm') {
                this.width = width;
                this.height = height;
                this.units = units;
            } else {
                this.units = "cm";
            }
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }

        changeUnits(newUnits) {
            if (this.units === 'cm' && newUnits === 'm') {
                this.width /= 100;
                this.height /= 100;
            } else if (this.units === 'cm' && newUnits === 'mm') {
                this.width *= 100;
                this.height *= 100;
            } else if (this.units === 'mm' && newUnits === 'cm') {
                this.width /= 10;
                this.height /= 10;
            } else if (this.units === 'mm' && newUnits === 'm') {
                this.width /= 1000;
                this.height /= 1000;
            } else if (this.units === 'm' && newUnits === 'cm') {
                this.width *= 100;
                this.height *= 100;
            } else if (this.units === 'm' && newUnits === 'mm') {
                this.width *= 1000;
                this.height *= 1000;
            }
            this.units = newUnits;
        }

    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}


let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

c.changeUnits('m');
console.log(c.area); // 7853.981633974483
console.log(c.toString())


