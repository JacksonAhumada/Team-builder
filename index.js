const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateSite = require('./generate-site')
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const createManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
        message: "Please enter your ID number.",
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log("Please enter your ID number.");
                return false;
            }
        }

      },
      {
        type: "input",
        name: "email",
          message: "Please enter your email.",
          validate: employeeEmail => {
              if (employeeEmail) {
                  return true;
              } else {
                  console.log("Please enter your Email.");
                  return false;
              }
          }
  
      },
      {
        type: "input",
        name: "officeNumber",
          message: "Please enter your office number.",
          validate: officeNumber => {
              if (officeNumber) {
                  return true;
              } else {
                  console.log("Please enter your office number.");
                  return false;
              }
          }
  
      },
  ]).then(answers => {
      console.log(answers);
      const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
      teamMembers.push(manager);
      teamCreation();
  });
};

const teamCreation = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'team',
            message: 'Please select which position you would like to add:',
            choices: ['Engineer', 'Intern', 'Done creating my team']
        }])
        .then(userChoice => {
            switch (userChoice.team) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const createEngineer = () => {
  console.log(`
  =================
  Add a New Engineer
  =================`);
  
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the engineers name?',
      validate: engineerName => {
        if (engineerName) {
          return true;
        } else {
          console.log('Please enter the engineers name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'What is the ID number?',
      validate: employeeId => {
        if (employeeId) {
          return true;
        } else {
          console.log('Please enter the ID number.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter employees email address.',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('Please enter the engineers name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter employees GitHub username.',
      validate: githubUsername => {
        if (githubUsername) {
          return true;
        } else {
          console.log('Please enter the engineers name.');
          return false;
        }
      }
    }
  ]).then(answers => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
    teamMembers.push(engineer);
    teamCreation();
  })
}

const createIntern = () => {
  console.log(`
  =================
  Add a New Intern
  =================`);
  
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the inters name?',
      validate: internName => {
        if (internName) {
          return true;
        } else {
          console.log('Please enter the interns name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'What is the ID number?',
      validate: employeeId => {
        if (employeeId) {
          return true;
        } else {
          console.log('Please enter the ID number.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter employees email address.',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('Please enter the engineers name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter the interns school.',
      validate: school => {
        if (school) {
          return true;
        } else {
          console.log('Please enter the interns school.');
          return false;
        }
      }
    }
  ]).then(answers => {
    console.log(answers);
    const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
    teamMembers.push(intern);
    teamCreation();
  })
}

const buildTeam = () => {
  console.log(`
  ==============
  Finished building my team.
  ==============`);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

createManager()
