function extendPrototype(classToExtend) {
    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a <${this.species}>. <${classToExtend} ${this.toString()}>"`
    }
    return classToExtend;
}


class Human {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        return `(name: ${this.name}, email: ${this.email})`;
    }

}


extendPrototype(Human);

let human = new Human("Miro", "abv");

console.log(human);