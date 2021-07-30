function solve(one, two, three) {
    let sumStringLength = one.length + two.length + three.length;
    let avgLength = Math.floor(sumStringLength / 3);
    console.log(sumStringLength);
    console.log(avgLength);
}

solve('chocolate', 'ice cream', 'cake');

solve('pasta', '5', '22.3');