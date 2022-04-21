/**
 *  Đọc file xuất lên giao diện
 * 
 */


const partView = './views/';

var http = require('http');
var fs = require('fs');

// lib custom
 require('./env');

http.createServer(function (req, res) {
  fs.readFile(partView + 'home.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);