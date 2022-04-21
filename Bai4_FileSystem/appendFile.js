/**
 *  Đọc file home copy.html và đẩy vào file home.html
 */

var fs = require('fs');
const partView = './views/';

fs.readFile(partView + 'home copy.html', function(err, data) {
    fs.appendFile(partView + 'home.html',data, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
});

