class Company {
    constructor() {
        this.departments = {};
        this.notAllowedSymbols = ['', undefined, null];
    }

    addEmployee(username, Salary, Position, Department) {
        if (this.notAllowedSymbols.includes(username) || this.notAllowedSymbols.includes(Salary) || this.notAllowedSymbols.includes(Position) || this.notAllowedSymbols.includes(Department)) {
            throw new Error("Invalid input!");
        }
        if (Salary < 0) {
            throw new Error("Invalid input!");
        }
        if (!this.departments.hasOwnProperty(Department)) {
            this.departments[Department] = {};
            this.departments[Department]["averageSalary"] = 0;
        }
        this.departments[Department][username] = {"salary": Salary, "position": Position};
        // this.departments[Department] = {"username": username, "salary": Salary, "position": Position};
        this.departments[Department]["averageSalary"] += this.departments[Department][username].salary;
        return `New employee is hired. Name: ${username}. Position: ${Position}`;
    }

    bestDepartment() {
        let bestDepartment = {};
        let bestDepartmentEmployees = {};
        let bestSalary = -1000;
        for (let [dep, value] of Object.entries(this.departments)) {
            let avg = value.averageSalary / (Object.keys(value).length - 1);
            if (avg >= bestSalary) {
                bestSalary = avg;
                bestDepartment = {'depName': dep, "avg": bestSalary};
                delete value.averageSalary;
                bestDepartmentEmployees = [value];
            }
        }
        let data = `Best Department is: ${bestDepartment.depName}` + '\n'
        data += `Average salary: ${bestDepartment.avg.toFixed(2)}` + '\n'
        let sorted = Object.entries(bestDepartmentEmployees[0]).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1].salary - a[1].salary);
        for ( let emp of sorted){
            data += `${emp[0]} ${emp[1].salary} ${emp[1].position}` + '\n';
        }
        return data.trim();
    }
}

// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Staaimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());