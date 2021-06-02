// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
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
    message: 'Please describe what your app is for:',
    // will be deployed as description of Description section
},
{
    type: 'input',
    name: 'usage',
    message: 'Please describe how to use your app:',
    // will be deployed as usage of Usage section
},
{
    type: 'input',
    name: 'installation',
    message: 'Please explain how to install your app:',
    // will be deployed as installation of Installation section
},
{
    type: 'input',
    name: 'tests',
    message: 'Please explain any test confirmations your app has here, or respond "no tests":',
    // will be deployed as installation of Installation section
},
{
    type: 'input',
    name: 'contributions',
    message: 'Please explain how to contribute to your project:',
    // will be deployed as contributions of Contributions section
},
{
    type: 'list',
    name: 'license',
    message: 'Which license are you going to use?',
    choices: ['MIT', 'GPLv2', 'Apache', 'none'],

},
]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
.prompt(questions)
.then(answers =>  {
    writeToFile ('./output/README.md', generateMarkdown({
        // uses spread operator to concat answers hash
        ...answers
    }))
    
})
}

// Function call to initialize app
init();
