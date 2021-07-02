function schoolGrades(inputArray) {
    let studentsDict = {};
    function calculateAverageGrade(grades) {
        return grades.reduce((acc , curr) => acc + curr, 0) / grades.length;

    }
    for (let studentData of inputArray){
        studentData = studentData.split(' ');
        let studentName = studentData.shift();
        let grades = studentData.map(Number);
        let avgGrade = calculateAverageGrade(grades);
        if (studentsDict.hasOwnProperty(studentName)){
            let newGrades = studentsDict[studentName][0].concat(grades);
            avgGrade = calculateAverageGrade(newGrades);
            studentsDict[studentName] = [newGrades, avgGrade];
        }
        else{
            studentsDict[studentName] = [grades, avgGrade];
        }
    }
    let sortedIterable = Object.entries(studentsDict);
    sortedIterable.sort((a, b) => { return a[1][1] - b[1][1]});
    for (let data of sortedIterable){
        console.log(`${data[0]}: ${data[1][0].join(', ')}`);
    }

}

schoolGrades(
['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6',
    'Bob 6 6 3',
    'Bob 2 3 4']);