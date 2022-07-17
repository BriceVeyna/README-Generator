// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description:',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'Include in Table of Contents:',
        name: 'toc',
        choices: ['Installation', 'Usage', 'Features', 'Tests', 'Badges', 'Credits', 'How to Contribute', 'License'],
    },
    {
        type: 'input',
        message: 'Installation Instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage Instructions:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Highlighted Features:',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Test Instructions:',
        name: 'tests',
    },
    {
        type: 'checkbox',
        message: 'Include Badges:',
        name: 'badges',
        choices: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        type: 'input',
        message: 'Credits:',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'How to Contribute:',
        name: 'contribute',
    },
    {
        type: 'list',
        message: 'License:',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
