const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

function createInitialHtml() {
  const starterHtml = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <title>Team Profile Generator</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid bg-danger">
        <div class="container">
          <h1 class="display-4 text-center text-white">My Team</h1>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
  `;
  fs.writeFile("./dist/renderHtml.html", starterHtml, (err) =>
    err ? console.log(err) : console.log("")
  );
}

createInitialHtml();

function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "what is your name?",
        name: "name",
        default: "Tyler",
      },
      {
        type: "input",
        message: "what is your id number?",
        name: "id",
        default: "3",
      },
      {
        type: "input",
        message: "what is your email?",
        name: "email",
        default: "tafimba@gmail.com",
      },
      {
        type: "input",
        message: "what is your office number?",
        name: "officeNumber",
        default: "1",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      // const managerData = generateManagerCard(manager);
      const managerCard = `
      <div class="card col-lg m-3" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${answers.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.id}</li>
            <li class="list-group-item">EMAIL: ${answers.email}</li>
            <li class="list-group-item">OFFICE NUM: ${answers.officeNumber}</li>
          </ul>
        </div>
      </div>`;
      fs.appendFile("./dist/renderHtml.html", managerCard, (err) =>
        err ? console.log(err) : console.log("Error card Created")
      );
      promptUserCreateFile();
    });
}
promptManager();

function internUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "what is your name?",
        name: "name",
        default: "James",
      },
      {
        type: "input",
        message: "what is your id number?",
        name: "id",
        default: "7",
      },
      {
        type: "input",
        message: "what is your email?",
        name: "email",
        default: "james@gmail.com",
      },
      {
        type: "input",
        message: "What school did you attend?",
        name: "school",
        default: "University of Oregon",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      console.log(manager);
      // const managerData = generateManagerCard(manager);
      const managerCard = `
      <div class="card col-lg m-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${answers.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${answers.id}</li>
              <li class="list-group-item">EMAIL: ${answers.email}</li>
              <li class="list-group-item">SCHOOL: ${answers.school}</li>
            </ul>
          </div>
        </div>`;
      fs.appendFile("./dist/renderHtml.html", managerCard, (err) =>
        err ? console.log(err) : console.log("Error card Created")
      );
      promptUserCreateFile();
    });
}

function engineerUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "what is your name?",
        name: "name",
        default: "Patrick",
      },
      {
        type: "input",
        message: "what is your id number?",
        name: "id",
        default: "4",
      },
      {
        type: "input",
        message: "what is your email?",
        name: "email",
        default: "patrick@yahoo.com",
      },
      {
        type: "input",
        message: "what is your github?",
        name: "github",
        default: "Ptrick@github.com",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.gihub
      );
      console.log(manager);
      // const managerData = generateManagerCard(manager);
      const managerCard = `<div class="card col-lg m-3" style="width: 18rem">
  <div class="card-body">
  <h5 class="card-title">${answers.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${answers.id}</li>
    <li class="list-group-item">EMAIL: ${answers.email}</li>
    <li class="list-group-item">GITHUB: ${answers.github}</li>
    </ul>
  </div>
</div>`;
      fs.appendFile("./dist/renderHtml.html", managerCard, (err) =>
        err ? console.log(err) : console.log("Error card Created")
      );
      promptUserCreateFile();
    });
}

function promptUserCreateFile() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add an Engineer or Intern?",
        name: "choice",
        choices: ["Intern", "Engineer", "None"],
      },
    ])
    .then((answer) => {
      if (answer.choice === "Engineer") {
        engineerUser();
      } else if (answer.choice === "Intern") {
        internUser();
      } else {
        const closingHtml = `</div>
       </div>
       <script
         src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
         integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
         crossorigin="anonymous"
       ></script>
       <script
         src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
         integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
         crossorigin="anonymous"
       ></script>
     </body>
   </html>`;
        fs.appendFile("./dist/renderHtml.html", closingHtml, (err) =>
          err ? console.log(err) : console.log("Html file generated")
        );
        process.exit;
      }
    });
}

// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################
// ##################################

// const generateManagerCard = (manager) => `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link
//       rel="stylesheet"
//       href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
//       integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
//       crossorigin="anonymous"
//     />
//     <title>Team Profile Generator</title>
//   </head>
//   <body>
//     <div class="jumbotron jumbotron-fluid bg-danger">
//       <div class="container">
//         <h1 class="display-4 text-center text-white">My Team</h1>
//       </div>
//     </div>
//     <div class="container">
//       <div class="row justify-content-center">
//         <div class="card col-lg m-3" style="width: 18rem">
//           <div class="card-body">
//             <h5 class="card-title">Tyler</h5>
//             <h6 class="card-subtitle mb-2 text-muted">Employee</h6>
//             <ul class="list-group list-group-flush">
//             <li class="list-group-item">name: ${manager.name}44512</li>
//               <li class="list-group-item">ID: ${manager.id}44512</li>
//               <li class="list-group-item">Email: ${manager.email}</li>
//               <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>

//     <script
//       src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
//       integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
//       integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
//       crossorigin="anonymous"
//     ></script>
//   </body>
// </html>
// `;

// promptUser();

// // Main Questions
// const promptUser = () => {
//     return inquirer.prompt([
//     {
//         type: 'input',
//         message:'what is your name?',
//         name: 'name',
//     },
//     {
//         type: 'input',
//         message: 'what is your id number?',
//         name: 'id',
//     },
//     {
//         type: 'input',
//         message: 'what is your email?',
//         name: 'email',
//     },
//     {
//         type: 'list',
//         message: 'Please check your role in the company',
//         choices: [
//             'Manager',
//             'Intern',
//             'Engineer',
//         ],
//         name: 'role'
//     },
// ]).then(answers => console.log(answers))
// }
