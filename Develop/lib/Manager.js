// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

//funtions getRole(), getOfficeNumber()

module.exports = Manager;