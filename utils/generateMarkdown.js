// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
// creating an If function but they are not longer if statements.
// basically if license is for ex MIT pro
  if (license === 'MIT') {
    
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description:
- ${data.description}
## Table of Contents:
1. [Installation Section](#installation-instructions)
2. [Usage Section](#usage-information)
3. [Contribution Section](#contribution-guidelines)
4. [Test Section](#)
// any test commands
5. [Questions Section](#questions)

## Installation Instructions
- ${data.installation}
## Usage Information
- ${data.usage}
## Contribution Guidelines
- ${data.contributions}
## Test Instructions

## 5. Questions:
- Should you have any questions about the application that are not covered in my README or you run into any problems feel free to contact me through github at https://github.com/${data.github} 
- You can also reach me at my email address, ${data.email}, with any additional questions.




`;
}

module.exports = generateMarkdown;
