const connection = require("./db");

// Delete a Record
const deleteUser = (id) => {
    connection.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
        if (err) throw err;
        console.log("User deleted!");
    });
};

// Select All Records
const selectAllUsers = () => {
    connection.query("SELECT * FROM users", (err, results) => {
        if (err) throw err;
        console.log("All Users:", results);
    });
};

// Select Unique Record
const selectUniqueUser = (email) => {
    connection.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
        if (err) throw err;
        console.log("User found:", result);
    });
};

// Drop Table
const dropTable = () => {
    connection.query("DROP TABLE IF EXISTS users", (err, result) => {
        if (err) throw err;
        console.log("Table dropped!");
    });
};


// Uncomment the functions to test them
deleteUser(1);
// selectAllUsers();
// selectUniqueUser("johndoe@gmail.com");
// dropTable();



// module.exports = { deleteUser, selectAllUsers, selectUniqueUser, dropTable };
// const { deleteUser, selectAllUsers, selectUniqueUser, dropTable } = require("./userFunctions");
