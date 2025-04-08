const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",  // Change according to your MySQL user
  password: "",  // Add your MySQL password
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

module.exports = connection;
