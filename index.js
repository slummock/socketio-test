var express = require('express');
var app = express();
var server = require('http').createServer(app); 
var io = require('socket.io')(server);

server.listen(5555);

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});