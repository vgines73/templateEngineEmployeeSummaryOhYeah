// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

function Manager() {
    this.employee = Employee;
}

//funtions getRole(), getOfficeNumber()

module.exports = Manager;