/**
 *  Tạo file mới và ghi
 * 
 */


 const partView = './views/';

 var http = require('http');
 var fs = require('fs');
 
 // lib custom
  require('./env');
 
 http.createServer(function (req, res) {
    fs.writeFile('testNoteJs1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });      
 }).listen(8080);