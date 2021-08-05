function solve(inputArr, flavor1, flavor2) {
    output = [];
    let firstIndex = inputArr.indexOf(flavor1);
    let lastIndex = inputArr.indexOf(flavor2);

    for (let i = firstIndex; i <= lastIndex; i++){
        output.push(inputArr[i]);
    }
    return output;
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));

console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));