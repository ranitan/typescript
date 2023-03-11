"use strict";
class Course {
    constructor(course_id, course_name) {
        this.courseid = course_id;
        this.coursename = course_name;
    }
    course_details() {
        console.log(`The course id is ${this.courseid} and course name is ${this.coursename}.`);
    }
}
class Employee extends Course {
    constructor(course_id, course_name, emp_id, emp_name, emp_designation) {
        super(course_id, course_name);
        this.empid = emp_id;
        this.empname = emp_name;
        this.empdesignation = emp_designation;
    }
    employee_details() {
        super.course_details();
        console.log(`The employee id is ${this.empid},name of the employee is ${this.empname} and his designation is ${this.empdesignation}`);
    }
}
class Admin extends Employee {
    constructor(course_id, course_name, emp_id, emp_name, emp_designation, admin_id, admin_name) {
        super(course_id, course_name, emp_id, emp_name, emp_designation);
        this.adminid = admin_id;
        this.adminname = admin_name;
    }
    admindetails() {
        super.employee_details();
        console.log(`The admin id is ${this.adminid} and name of the admin is ranita ${this.adminname}`);
    }
}
let e = new Admin(136, "typescript", 123, "ranita", "trainee", 101, "ranita");
e.admindetails();
