function schoolRegister(studentsDataArray) {
    let students = {};
    for (let studentData of studentsDataArray) {
        let splitData = studentData.split(', ');
        let studentName = splitData[0].split(': ')[1];
        let studentGrade = Number(splitData[1].split(': ')[1]);
        let studentAverageScore = Number(splitData[2].split(': ')[1]);
        if (studentAverageScore >= 3){
             if (! students.hasOwnProperty(studentGrade)) {
                students[studentGrade] = {studentNames: [studentName], averageScore: studentAverageScore};
            }
            else{
                students[studentGrade].studentNames.push(studentName);
                students[studentGrade].averageScore += studentAverageScore;
            }
    }
}
    for (let [grade, data] of Object.entries(students)){
        console.log(`${Number(grade)+1} Grade ` + '\n' + `List of students: ${data.studentNames.join(', ')}` + '\n'+
            `Average annual grade from last year: ${(data.averageScore / data.studentNames.length).toFixed(2)}`);

        console.log();
    }
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
);

// schoolRegister([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
// );