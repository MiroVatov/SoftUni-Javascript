function solve(x1, y1, x2, y2) {
    let a = (x2 - x1) ** 2;
    let b = (y2 - y1) ** 2;
    let d = Math.sqrt(a + b);
    if (d > 0){
        console.log(`${x1}, ${y1} to ${x2}, ${y2} is valid`);
    }
    else{
        console.log(`${x1}, ${y1} to ${x2}, ${y2} is invalid`);
    }
}

solve(3, 0, 0, 4);

solve(3, 0, 0, 4);

solve(2, 1, 1, 1);