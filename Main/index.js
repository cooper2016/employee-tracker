// import mysql2, inqurier, and console.table
const mysql = require("mysql2");
const inq = require("inquirer");
const table = require("console.table");

// connect to database
const db = mysql.createConnection(
  {
    user: "root",
    password: "",
    database: "company_db",
  },
  console.log("Connected to the company_db database")
);

// Different Prompts

const home = [
  {
    type: "list",
    message: "How can I help you?",
    name: "home",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  },
];

const addDept = [
  {
    type: "input",
    message: "What is the name of the department you wish to add?",
    name: "newDept",
  },
];
const addRole = [
  {
    type: "input",
    message: "What is the name of the role you wish to add?",
    name: "newRole",
  },
  {
    type: "input",
    message: "What is the salary of the role you wish to add?",
    name: "newSalary",
  },
  {
    type: "input",
    message: "What is the department of the role you wish to add?",
    name: "newDepartment",
  },
];
const addEmployee = [
  {
    type: "input",
    message: "What is the first name of the employee you wish to add?",
    name: "fn",
  },
  {
    type: "input",
    message: "What is the last name of the employee you wish to add?",
    name: "ln",
  },
  {
    type: "input",
    message: "What is the role of the employee you wish to add?",
    name: "role",
  },
  {
    type: "input",
    message: "Who the manager of the employee you wish to add?",
    name: "manager",
  },
];
