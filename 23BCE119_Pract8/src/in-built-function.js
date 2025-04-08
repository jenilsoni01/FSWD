const connection = require("./db");

connection.query("CREATE DATABASE IF NOT EXISTS mydb", (err, result) => {
    if (err) throw err;
    console.log("Database created!");
});

connection.changeUser({ database: "mydb" }, (err) => {
    if (err) throw err;
    console.log("Using database: mydb");
});

const createTableSQL = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE
  )
`;

connection.query(createTableSQL, (err, result) => {
    if (err) throw err;
    console.log("Table created!");
});


const insertUserSQL = "INSERT INTO users (name, email) VALUES (?, ?)";
connection.query(insertUserSQL, ["John Doe", "john@example.com"], (err, result) => {
    if (err) throw err;
    console.log("User inserted with ID:", result.insertId);
});

const updateUserSQL = "UPDATE users SET email = ? WHERE name = ?";
connection.query(updateUserSQL, ["johndoe@gmail.com", "John Doe"], (err, result) => {
    if (err) throw err;
    console.log("User updated!");
});
