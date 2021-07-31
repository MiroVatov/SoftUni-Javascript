function solve(n, op1, op2, op3, op4, op5) {
    n = Number(n);

    let operations = [op1, op2, op3, op4, op5];

    for (let op of operations){

        if (op === 'chop'){
            n /= 2;
            console.log(n);
        }
        else if (op === 'dice'){
            n = Math.sqrt(n);
            console.log(n);
        }
        else if (op === 'spice'){
            n += 1;
            console.log(n);
        }
        else if (op === 'bake'){
            n*= 3;
            console.log(n);
        }
        else if (op === 'fillet'){
            n -= (n * 0.20);
            console.log(n);
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');