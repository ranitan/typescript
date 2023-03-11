class Employeedetails {
    constructor(id, name, designation, salary, project) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.salary = salary;
        this.project = project;
    }
    disp() {
        console.log(` employee id is         : ${this.id}`);
        console.log(` employee name is        : ${this.name}`);
        console.log(` employee Designation is : ${this.designation}`);
        console.log(` employee Salary is      : ${this.salary}`);
        console.log(`employee Project is      : ${this.project}`);
    }
}
var a = new Employeedetails("136", "ranita", "trainee", 6000, "typescript");
a.disp();