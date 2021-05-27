// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description:
  - ${data.description}
  # Table of Contents:
    1. Installation Instructions.
    2. Usage Information.
    3. Contribution Guidelines.
    4. Test Instructions.
    5. Questions.

  # 1. Installation Instructions:
  - ${data.installation}
  # 2. Usage Information:
  - ${data.usage}
  # 3. Contribution Guidelines:
  - ${data.contributions}
  # 4. Test Instructions:

  # 5. Questions:
  - Should you have any questions about the application that are not covered in my README or you run into any problems feel free to contact me through github at https://github.com/${data.github} 
  - You can also reach me at my email address, ${data.email}, with any additional questions.




`;
}

module.exports = generateMarkdown;
