// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//const Engineer = new Employee(name, id, email);
function Engineer(name, id, email, getGithub) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getGithub = getGithub;
};

Engineer.prototype.getRole = function() {
    return "Engineer";
};

Engineer.prototype.getGithub = function(){
    return "GitHubUser"
};

//functions getRole(), getGithub(), 

module.exports = Engineer;