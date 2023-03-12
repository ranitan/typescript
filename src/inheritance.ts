class course {
    constructor(c_id, c_name) {
        this.courseid = c_id;
        this.coursename = c_name;
    }
    c_details() {
        console.log(`course id is ${this.courseid} & course name is ${this.coursename}.`);
    }
}
class employee extends course {
    constructor(c_id, c_name, e_id, e_name, e_designation) {
        super(c_id, c_name);
        this.empid = e_id;
        this.empname = e_name;
        this.empdesignation = e_designation;
    }
    e_details() {
        super.c_details();
        console.log(` employee id is ${this.empid}, employee name is ${this.empname} and employee designation is ${this.empdesignation}`);
    }
}
class Admin extends employee {
    constructor(c_id, c_name, e_id, e_name, e_designation, a_id, a_name) {
        super(c_id, c_name, e_id, e_name, e_designation);
        this.adminid = a_id;
        this.adminname = a_name;
    }
    a_details() {
        super.e_details();
        console.log(` admin id is ${this.adminid} and  admin name is  ${this.adminname}`);
    }
}
let r = new Admin(68758, "full stack developer", 7137861, "hari", "student", 982597487509, "pallavi");
r.a_details();
