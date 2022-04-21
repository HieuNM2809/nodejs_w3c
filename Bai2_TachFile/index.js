
/**
 * Tách file:
 *  - return function ngày 
 */

const partLib = './lib/';

const lib  = require(partLib + 'lib'); // thêm thư viện để sử dụng
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<b>Giờ:</b> '  + lib.myDateTime());
  console.log(req.url);
  res.end();
}).listen(8080);