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

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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
        console.log("res:", res)
        const manager = new Manager(res.name, res.id, res.email, res.officeNumber)
        console.log("New employee:", manager)
        allEmployees.push(manager)
        internQuestions();
    })
}

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
        console.log(res)
        const intern = new Intern(res.name, res.id, res.email, res.school)
        console.log(intern)
        allEmployees.push(intern)
        engineerQuestions();
    })
}

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
        console.log(res)
        const engineer = new Engineer(res.name, res.id, res.email, res.github);
        console.log(engineer)
        allEmployees.push(engineer)
        loadPage();
    })
}

//function to generate page
function loadPage() {
    fs.writeFile(outputPath, "main.html", render(allEmployees), (err) => {
        if (err) throw err;
        console.log("complete")
    })

}
init();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
