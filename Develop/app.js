const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const allEmployees = [];

// to start asking the user questions for each employee
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Manager's name?",
            name: "name"
        },
        {
            type: "list",
            message: "What is the employee's role?",
            choices: ["Manager", "Intern", "Engineer"],
            name: "role"
        },
        {
            type: "input",
            message: "What is the Manager's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Manager's phone number?",
            name: "officeNumber"
        },
    ]).then((res) => {
        //console.log("res:", res);
        const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        //console.log("New employee:", manager);
        allEmployees.push(manager);
        internQuestions();
    });
};

// function for intern
function internQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Intern's name?",
            name: "name"
        },
        {
            type: "list",
            message: "What is the employee's role?",
            choices: ["Manager", "Intern", "Engineer"],
            name: "role"
        },
        {
            type: "input",
            message: "What is your Intern's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your Intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What school did your Intern graduate from?",
            name: "school"
        },
    ]).then((res) => {
        //console.log(res);
        const intern = new Intern(res.name, res.id, res.email, res.school);
        //console.log(intern);
        allEmployees.push(intern);
        engineerQuestions();
    });
};

// function for engineer
function engineerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Engineer's name?",
            name: "name"
        },
        {
            type: "list",
            message: "What is the employee's role?",
            choices: ["Manager", "Intern", "Engineer"],
            name: "role"
        },
        {
            type: "input",
            message: "What is your Engineer's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your Engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your Engineer's Github username?",
            name: "github"
        }
    ]).then((res) => {
        //console.log(res);
        const engineer = new Engineer(res.name, res.id, res.email, res.github);
        //console.log(engineer);
        allEmployees.push(engineer);
        addEmployee();
    });
};

// function to add another employee
function addEmployee() {
    inquirer.prompt ([
        {
            type: "confirm",
            message: "Would you like to add another employee?",
            name: "confirmEmployee",
            default: true
        }
    ]).then((res) => {
        console.log(res)

        if (res.confirmEmployee === true) {
            whichEmployee();
        } else {
            loadPage();
        }
    });
};

function whichEmployee() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which Employee would you like to add?",
            choices: ["Intern", "Engineer"],
            name: "whichEmployee"
        }
    ]).then((res) => {
        //console.log(res);

        if (res.whichEmployee === "Intern") {
            addIntern();
        } else if (res.whichEmployee === "Engineer") {
            engineerQuestions();
        } else {
            addEmployee();
        }
    });
};

// function to ask multiple intern questions
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Intern's name?",
            name: "name"
        },
        {
            type: "list",
            message: "What is the employee's role?",
            choices: ["Manager", "Intern", "Engineer"],
            name: "role"
        },
        {
            type: "input",
            message: "What is your Intern's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your Intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What school did your Intern graduate from?",
            name: "school"
        },
    ]).then((res) => {
        //console.log(res);
        const intern = new Intern(res.name, res.id, res.email, res.school);
        //console.log(intern);
        allEmployees.push(intern);
        addEmployee();
    });
};    

//function to generate page
function loadPage() {
    fs.writeFile(outputPath, render(allEmployees), (err) => {
        if (err) throw err;
        console.log("complete");
    });
};
init();