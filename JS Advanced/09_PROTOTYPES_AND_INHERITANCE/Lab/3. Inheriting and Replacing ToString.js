

function toStringExtension() {
    class Person {

        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {

        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {

        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

const creator = toStringExtension();
const person = new creator.Person('Ivan', 'aaaa');
const teacher = new creator.Teacher("Ivan2", 'bbbb', 'history');
const student = new creator.Student('Petar', 'ccc', 'Math');

console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());
