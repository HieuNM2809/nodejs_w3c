var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: 'nodejs'
});
con.connect(function (err) {
    if (err) {
        console.log("Fail!");
    } else{
        console.log("Connected!");
        con.query('select * from User', function (err, result) {
            if (err) throw err;
            console.log("Result: " + JSON.stringify(result));
        });
        con.query("INSERT INTO `nodejs`.`user` (`name`, `address`, `phone`) VALUES ('Teo', '123 HN', '0123213213')", function (err, result) {
            if (err) {
                console.log('Insert Fail');
            }else{
                console.log('Insert Successful');
            }
        });
    }
});


