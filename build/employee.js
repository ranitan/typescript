"use strict";
class Empdetails {
    constructor(empid, empname, empdesig, empsal, emppro) {
        this.id = empid;
        this.name = empname;
        this.designation = empdesig;
        this.salary = empsal;
        this.project = emppro;
    }
    display() {
        console.log(` employee id is         : ${this.id}`);
        console.log(` employee name is        : ${this.name}`);
        console.log(` employee Designation is : ${this.designation}`);
        console.log(` employee Salary is      : ${this.salary}`);
        console.log(`employee Project is      : ${this.project}`);
    }
}
var empd = new Empdetails("20bsit113", "Harita", "traineee", 9000, "front end ");
empd.display();
