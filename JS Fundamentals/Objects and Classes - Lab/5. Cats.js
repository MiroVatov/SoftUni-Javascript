function cats(params) {

    class Cats {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let catsObjArr = [];
    for (let catObj of params){
        let catDetails = catObj.split(' ');
        let catName, catAge;
        [catName, catAge] = [catDetails[0], +catDetails[1]];
        catsObjArr.push(new Cats(catName, catAge));
    }
    // return catsObjArr;

    for (let cat of catsObjArr){
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Monny 3', 'Pepe 4']);


