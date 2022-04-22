// Syntax cmd => ===  npm install mysql   ===
var mysql = require('mysql'); // Thêm thư viện MySQL

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})

con.connect(function (err) {
    if (err) {
        console.log('Connect db fail');
    } else {
        console.log("Connected!");
        con.query("CREATE DATABASE create_db_nodejs", function (err, result) {
            if (err) throw err;
            console.log("Database created");
        });
    }
});