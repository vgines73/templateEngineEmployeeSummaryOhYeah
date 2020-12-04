// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//const Engineer = new Employee(name, id, email);
class Engineer extends Employee {
    constructor(name, id, email, getGithub) {
        super(name, id, email);
        this.getGithub = getGithub;
    };
    getRole() {
        return "Engineer";
    };
    
    getGithub() {
        return "GitHubUser"
    };
};

module.exports = Engineer;