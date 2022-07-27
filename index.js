// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of prompts for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Summary Description:',
        name: 'summary',
    },
    {
        type: 'input',
        message: 'Main Description:',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'Include in README:',
        name: 'toc',
        choices: ['Deployed Link', 'Table of Contents', 'Installation', 'Usage', 'Features', 'Tests', 'Badges', 'Credits', 'How to Contribute', 'Questions', 'License'],
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
        choices: ['HTML', 'CSS', 'JavaScript', 'Markdown', 'jQuery', 'Bootstrap', 'Node.js', 'npm', 'Jest', 'Express.js', 'GitHub Pages', 'Insomnia', 'Heroku', 'MySQL'],
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
        type: 'input',
        message: 'Enter GitHub username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter LinkedIn username:',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'Enter email address:',
        name: 'email',
    },
    {
        type: 'list',
        message: 'License:',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0'],
    },
];

// Write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
    );
}

// Initialize application
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("./gen_readme/README.md", generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
