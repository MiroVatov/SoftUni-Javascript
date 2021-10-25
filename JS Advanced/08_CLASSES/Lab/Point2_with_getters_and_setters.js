// Python likewise class with getters and setters
// The main idea of getters and setters is that the properties in the constructor and the properties, which we want to get and set to have different names (constr. -> x and y, getters and setters this._x, this,_y)

class Point {
    constructor(x, y) {
        // 1-st way: values in the constructor are checked only if they are changed in the setter for x or y;

        this._x = x;
        this._y = y;

        // 2-nd way: values are checked at the beginning in the constructor, when the instance is created

        // this.x = x; // the equal sign means that it will go to the set x method to check if type is number and set it, because the set method and the property in the constructor have the same name;
        // this.y = y; // the equal sign means that it will go to the set y method to check if type is number and set it.
    }

    // method for reading and getting the x value
    get x() {
        return this._x;  // the underscore _x is, to say that this property is PRIVATE and should not be set/changed by us/me from outside.
    }

    // method for setting the x value
    set x(value) {
        if (typeof value !== 'number') {
            throw new Error('Type of _X must be a number');
        }
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        if (typeof value !== 'number') {
            throw new Error('Type of _Y must be a number');
        }
        this._y = value;
    }

    static distance(p1, p2) {
        if (!p1 instanceof Point || !p2 instanceof Point) {
            throw new TypeError('Params must be of type Point');
        }

        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
}


const p1 = new Point(0, 0);
const p2 = new Point(3, 4);

console.log(p1, p2);
p1.x = 9;
// p1.y = 'delta'
console.log(p1.x);
console.log(p2.y);
console.log(Point.distance(p1, p2));
