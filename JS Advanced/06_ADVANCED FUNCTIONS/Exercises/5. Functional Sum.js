function add(n1) {
    let sum = 0;

    function inner(n2) {
        sum += n2;
        return inner;
    }

    inner.toString = () => {
        return sum;
    }
        return inner(n1);
}

console.log(add(1)(6)(-3).toString());
console.log(add(1)(6)(-3).toString());

console.log(add(1).toString());