// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "install",
        message: "Install Instructions: ",
        default: "npm install"
      },
      {
            type: "input",
            name: "title",
            message: "Title of project: ",
      },
      {
        type: "input",
        name: "description",
        message: "Description for the project: " 
      },
      {
        type: "list",
        name: "license",
        message: "License: ",
        choices: ["MIT", "None"]
      },
      {
        type: "input",
        name: "GitHub username",
        message: "Enter your username for GitHub: "
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
