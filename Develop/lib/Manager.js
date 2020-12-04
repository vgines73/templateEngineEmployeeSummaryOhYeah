// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
};


Manager.prototype.getRole = function() {
    return "Manager"
}

Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
}



//funtions getRole(), getOfficeNumber()

module.exports = Manager;