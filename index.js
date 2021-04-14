const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

// const team = new Team();

// team.createTeam();


// Main Questions 
const promptUser = (Manager) => {
    return inquirer.prompt([
        {
            type: 'input',
            message:'what is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'what is your id number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'what is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'what is your office number?',
            name: 'officeNumber',
        },    
]).then(answers => console.log(answers))
}

const generateManagerCard = (answers) => `<!DOCTYPE html>
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
        <div class="card col-lg m-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Tyler</h5>
            <h6 class="card-subtitle mb-2 text-muted">Employee</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: 44512</li>
              <li class="list-group-item">Email: tafimba@gmail.com</li>
              <li class="list-group-item">Office Number: 101</li>
            </ul>
          </div>
        </div>
      </div>
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
</html>
`


promptUser();
    
    












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