// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// const Intern = new Employee(name, id, email);
function Intern(name, id, email, getSchool) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getSchool = getSchool;
};

Intern.prototype.getRole = function() {
    return "Intern";
};
Intern.prototype.getSchool = function() {
    return "UCLA";
};


// //functions getRole(), getSchool()

module.exports = Intern;