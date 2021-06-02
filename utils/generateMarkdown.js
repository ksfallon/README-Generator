// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === 'MIT') {

    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  
  }

  if (license === 'GPLv2') {

    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  
  }

  if (license === 'Apache') {

    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

  }

  if (license === 'none') {

    return ''

}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === 'MIT') {

    return'Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)'
  }
  if (license === 'GPLv2') {

    return'Licensed under the [GPLv2 License](https://choosealicense.com/licenses/gpl-2.0/)'
  }
  if (license === 'Apache') {

    return'Licensed under the [Apache License](https://choosealicense.com/licenses/apache-2.0/)'
  }
  if (license === 'none') {
    
    return ''
  }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT' || license === 'GPLv2' || license === 'Apache') {
    return '## License:'
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `<h1 align="center"> ${data.title} </h1>
  ---
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Description:
- ${data.description}

## Table of Contents:
1. [Installation Section](#installation-instructions)
2. [Usage Section](#usage-information)
3. [Contribution Section](#contribution-guidelines)
4. [Test Section](#test-instructions)
5. [Questions Section](#questions)

## Installation Instructions
- ${data.installation}
## Usage Information
- ${data.usage}
## Contribution Guidelines
- ${data.contributions}
## Test Instructions
- ${data.tests}

## Questions:
- Should you have any questions about the application that are not covered in my README or you run into any problems feel free to contact me through github at <https://github.com/${data.github}> 
- You can also reach me at my email address, <${data.email}>, with any additional questions.




`;
}

module.exports = generateMarkdown;
