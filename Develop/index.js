// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username',
        // will be deployed as username of Questions section
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
        // will be deployed as email of Questions section
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your app title?',
        // will be deployed as title of README
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe what your app is for',
        // will be deployed as description of Description section
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use your app',
        // will be deployed as usage of Usage section
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please explain how to instal your app',
        // will be deployed as installation of Installation section
    },
    {
        type: 'input',
        name: 'issues',
        message: 'Please explain how to report issues with your app',
        // will be deployed as description of Description section
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please explain how to contribute to your project',
        // will be deployed as contributions of Contributions section
    },
    //how to do a drop down menu here for Licenses 
    
    
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
