const mysql = require("mysql2");
const connect = mysql.connection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userCredentials",
});

connect.query(`SELECT * FROM userCredentials`, (error, result) => {
    if (error) {
        console.error("ERROR: ", error);
        return;
    }
    console.log("RESULS", result);
});
connect.end();
