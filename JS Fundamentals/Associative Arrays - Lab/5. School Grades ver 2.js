function schoolGrades(inputArray) {
    let gradesMap = new Map();

    function calculateAverageGrade(grades) {
        return grades.reduce((acc , curr) => acc + curr, 0) / grades.length;
    }
    for (let studentData of inputArray){
        studentData = studentData.split(' ');
        let studentName = studentData.shift();
        let grades = studentData.map(Number);
        let avgGrade = calculateAverageGrade(grades);

        if (gradesMap.has(studentName)){
            let newGrades = gradesMap.get(studentName)[0];
                newGrades = newGrades.concat(grades);
            avgGrade = calculateAverageGrade(newGrades);
            gradesMap.set(studentName, [newGrades, avgGrade]);
        }
        else{
            gradesMap.set(studentName, [grades, avgGrade]);
        }
    }
    let sortedGrades = Array.from(gradesMap).sort((a, b) => a[1][1] - b[1][1]);
    for (let data of sortedGrades){
        console.log(`${data[0]}: ${data[1][0].join(', ')}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);