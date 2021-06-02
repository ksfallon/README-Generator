<h1 align ="center"> README Generator </h1>
test
### **TABLE OF CONTENTS:**
1. [Overview of README Generator](#overview)
2. [README.md created in project](#users-project-title)
3. [Video of creating a README.md](#video-of-readme)

## Overview
For this project we are using the npm inquirer package and the built fs package for node js. I have also added the path package that is also built into node js. With the inquirer package I have created questions that will require an input from the user. This input will then be used to create a professional README.md page for their project.
We are given two js files, **index.js** and **generateMarkdown.js**.

- In the **index.js** file we create the const require at the top that call on the packages we are using so one each for inquirer, fs and path. Also a constant require for the **generateMarkdown.js** to call on this file. the focus is on the inquirer package to create a series of questions that will then provide us answers from the users. 
1. The area of questions are placed in a const called *questions* and each question object has a *type*, *name* and *message*. 
    - The *type* explains what kind of input we will recieve from the user. For the most part it is 'input' because we want them to explain different things about their project. For the license though the *type* used is called 'list' and after *message* there is an additional line called 'choices' that provides the list of choices the user will choose from.
    - the *name* is going to to be the identifier, it will be used later to recieve the specific answer for each question. So the *name* is always unique. For example some of the names i use are: 'usage', installation' and 'tests'. They are used in the generateMarkdown.js
    - the *message* is the question the user is prompted with
    - whatever the users answer is to these question objects is called on later on as *answers* in the **init()** function.

2. The next part is the **function writeToFile(fileName, data)** to get the information to write to the readme file.
    - the return is when you use fs program to sync the file and use path to connect the fileName and data.
    - the fileName is going to be the *README.md* file that will show in the init function and the data will be the what the *generateMarkdown(answers)* produces.

3. The last part is the **function init()**
    - We call on the inquirer package and its very straightforward.
    - first you call on the *prompt(questions)*
    - next, you call *then* so we can call on the **writetoFile(fileName, data)** and *filename* = *README.md* and *data* = *generateMarkdown({...answers})* 
    - the generateMarkdown function is in the **generateMarkdown.js**

- The **generateMarkdown.js** file calls on all of the answers gathered from the inquirer package and plugging those answers into the **README.md** file.
1. The first part deals with 3 functions based on the License choice. The functions use if statements and will generate:
    - **renderLicenseBadge(data.license):**
        - a License Section, it only appears if a License is choosen, otherwise there is no License section.
    - **renderLicenseSection(data.license):**
        - a badge, depending on the the type of License selected.
    - **renderLicenseLink(data.license)**
        - a link to the specific License selected.
    - The return is in markdown language so the badge and the links are specific to the license selected.


2. The main function **generateMarkdown()** plugs in the license functions and the other answers that were called from the inquirer prompt. And in order to get this information within the readme you break the template literals (``) with ${} and within the curly brackets you either call *data.name* or *renderLicenseBadge(data.license)*.


- Below is the basic layout for the README.md that is created with this project:


---
<h1 align="center"> Users Project Title </h1>

License Badge here if one is selected
## License (only shows if a license is selected)
Licence link here if one is selected

## Description:
- description of the application

## Table of Contents (will link to these sections of the README):
1. [Installation Section](#installation-instructions)
2. [Usage Section](#usage-information)
3. [Contribution Section](#contribution-guidelines)
4. [Test Section](#test-instructions)
5. [Questions Section](#questions)
## Installation Instructions
- Installation instructions here
## Usage Information
- What the app is used for here
## Contribution Guidelines
- How a user can contribute to the project
## Test Instructions
- If there are any test confirmations to run then they are explained here.
- If there are not any tests they should write "no tests" in this section
## Questions:
- Should you have any questions about the application that are not covered in my README or you run into any problems feel free to contact me through github at https://github.com/(github username goes here) 
- You can also reach me at my email address, (email address plugged in here), with any additional questions.

---

<h1 align="center"> Video of Readme </h1>



