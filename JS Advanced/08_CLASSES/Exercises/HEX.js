
class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf(){
        return Number(this.value);
    }
    toString(){
        let newValue = this.value.toString(16);
        return `0x${newValue.toUpperCase()}`;
    }
    plus(number){
         return new Hex(this.value + Number(number.valueOf()));
    }
    minus(number){
        return new Hex(this.value - Number(number.valueOf()));
    }
    static
    parse(string){
        return `${parseInt(string, 16)}`;
    }
}


let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 === 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(12).toString());
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(Hex.parse('AAA'));
