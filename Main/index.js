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
