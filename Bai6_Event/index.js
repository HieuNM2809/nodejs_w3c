var http = require('http');
var url = require('url');
var fs = require('fs');

// ========================================  OPEN 
// http.createServer(function (req, res) {
//   var rs = fs.createReadStream('./demofile.txt');
//   rs.on('open', function () {
//     console.log('The file is open');
//   });
// }).listen(8080);


// var rs = fs.createReadStream('./demofile.txt');
// rs.on('open', function () {
//     console.log('The file is open');
// });

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');