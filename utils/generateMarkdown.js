// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

//   if (license === 'MIT') {

 // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === 'MIT') {
    console.log('Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)')
    return'Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)'
  }
  if (license === 'GPLv2') {
    console.log('Licensed under the [MIT License](https://choosealicense.com/licenses/gpl-2.0/)')
    return'Licensed under the [GPLv2 License](https://choosealicense.com/licenses/gpl-2.0/)'
  }
  if (license === 'Apache') {
    console.log('Licensed under the [MIT License](https://choosealicense.com/licenses/apache-2.0/)')
    return'Licensed under the [GPLv2 License](https://choosealicense.com/licenses/apache-2.0/)'
  }
  if (license === 'none') {
    return
  }


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
4. [Test Section](#test-instructions)
5. [Questions Section](#questions)
6. [License Section](#license)

## Installation Instructions
- ${data.installation}
## Usage Information
- ${data.usage}
## Contribution Guidelines
- ${data.contributions}
## Test Instructions
- ${data.tests}

## Questions:
- Should you have any questions about the application that are not covered in my README or you run into any problems feel free to contact me through github at https://github.com/${data.github} 
- You can also reach me at my email address, ${data.email}, with any additional questions.

## License:
- ${renderLicenseLink(data.license)}



`;
}

module.exports = generateMarkdown;
