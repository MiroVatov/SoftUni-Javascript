class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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

console.log(Point.distance(p1, p2));

