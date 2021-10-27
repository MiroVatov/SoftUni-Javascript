
class List {

    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.size++;
        this.list.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1);
            this.size--;
            this.list.sort((a, b) => a - b);
        }

    }

    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        }

    }

}

// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));

let myList = new List();

myList.add(5);
myList.add(3);
myList.add(7);
console.log(myList.get(0));
myList.remove(0);
console.log(myList.get(0));
myList.remove(2);
console.log(myList.size);
myList.add(1);
console.log(myList.get(4));

