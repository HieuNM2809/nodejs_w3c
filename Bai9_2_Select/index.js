var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs"
});

//  ==== Query
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM user", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result[0]['name']);  // Xuất tên arr thứ nhất  
//     console.log(result);             // show all data
//   });
// });

// ==== Truyền param
var name = 'Teo';
var sql = 'SELECT * FROM User WHERE name = ?';
con.query(sql, [name], function (err, result) {
  if (err) throw err;
  console.log(result);
});