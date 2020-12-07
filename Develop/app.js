const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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
        //render(manager)
        internQuestions();
        // return manager

    })
}
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
        //render(intern)
        //engineerQuestions();
    })
}

// function engineerQuestions() {
//     inquirer.prompt([
//         {
//             type: "input",
//             message: "What is your Engineer's name?",
//             name: "name"
//         },
//         {
//             type: "list",
//             message: "What is the employee's role?",
//             choices: ["Manager", "Intern", "Engineer"],
//             name: "role"
//         },
//         {
//             type: "input",
//             message: "What is your Engineer's ID number?",
//             name: "id"
//         },
//         {
//             type: "input",
//             message: "What is your Engineer's email?",
//             name: "email"
//         },
//         {
//             type: "input",
//             message: "What is your Engineer's Github username?",
//             name: "github"
//         }
//     ]).then((res) => {
//         console.log(res)
//         const engineer = new Engineer(res);
//         console.log(engineer)
//         //render(engineer)
//     })
// }
// const questions = [
//     {
//         type: "input",
//         message: "What is the Manager's name?",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "What is the Manager's ID number?",
//         name: "id"
//     },
//     {
//         type: "input",
//         message: "What is the Manager's email?",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "What is the Manager's phone number?",
//         name: "officeNumber"
//     },
//     {
//         type: "list",
//         message: "What is the employee's role?",
//         choices: ["Manager", "Intern", "Engineer"],
//         name: "role"
//     },
//     {
//         type: "input",
//         message: "What is your Intern's name?",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "What is your Intern's ID number?",
//         name: "id"
//     },
//     {
//         type: "input",
//         message: "What is your Intern's email?",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "What school did your Intern graduate from?",
//         name: "school"
//     },
//     {
//         type: "list",
//         message: "What is the employee's role?",
//         choices: ["Manager", "Intern", "Engineer"],
//         name: "role"
//     },
//     {
//         type: "input",
//         message: "What is your Engineer's name?",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "What is your Engineer's ID number?",
//         name: "id"
//     },
//     {
//         type: "input",
//         message: "What is your Engineer's email?",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "What is your Engineer's Github username?",
//         name: "github"
//     },
//     {
//         type: "list",
//         message: "What is the employee's role?",
//         choices: ["Manager", "Intern", "Engineer"],
//         name: "role"
//     },
// ]

// function init() {
//     inquirer.prompt(questions).then((res) => {
//         console.log(res)
//         fs.writeFile("team.html", outputPath, render(res), (err) => {
//             if (err) throw err;
//             console.log("complete")
//         })
//     })
// }
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
