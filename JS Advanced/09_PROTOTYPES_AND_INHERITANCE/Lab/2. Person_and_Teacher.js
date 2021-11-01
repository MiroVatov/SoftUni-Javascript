function personAndTeacher() {
    class Person {

        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            return ``
        }
    }

    class Teacher extends Person {

        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}


const creator = personAndTeacher();
const person = new creator.Person('Ivan', 'aaaa');
const teacher = new creator.Teacher("Ivan2", 'bbbb', 'history');
console.log(person);
console.log(teacher);
