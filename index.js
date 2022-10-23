const inquirer = require("inquirer");
const fs = require("fs");


const manager = [
    {
        type: "input",
        name: "mName",
        message: "What is the managers name?",
   
    },
    {
        type: "input",
        name: "mId",
        message: "Managers ID number",
    },
    {
        type: "input",
        name: "mEmail",
        message: "Managers email",
    },
    {
        type: "input",
        name: "phoneNumber",
        message:"Enter Managers office number.",
    },
    {
        type: "list",
        name: "addAdditional",
        message: "Would you like to add an Engineer, Intern, or none?",
        choices: ['Engineer', 'Intern', 'None'],       
}
]

const engineer = [
    {
        type: "input",
        name: "eName",
        message: "Enter engineers name.",
    },
    {
        type: "input",
        name: "eId",
        message: "Enter engineers ID number.",
    },
    {
        type: "input",
        name: "eEmail",
        message: "Enter engineers email.",
    },
    {
        type: "input",
        name: "eGithub",
        message: "Enter engineers GitHub username.",
    }
]

const intern = [
    {
        type: "input",
        name: "iName",
        message: "Enter interns name.",
    },
    {
        type: "input",
        name: "iId",
        message: "Enter interns ID number.",
    },
    {
        type: "input",
        name: "iEmail",
        message: "Enter interns email.",
    },
    {
        type: "input",
        name: "school",
        message: "Enter interns school.",
    },
]