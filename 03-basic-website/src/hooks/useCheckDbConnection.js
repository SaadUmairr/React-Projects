const mysql = require("mysql2");

export default function useCheckDbConnection() {
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
}
