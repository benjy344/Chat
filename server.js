let express = require('express')
let path    = require('path')
let app     = express()
let server  = require('http').Server(app)
let io      = require('socket.io')(server)

let port    = 4200

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', (socket) => {
  console.log('new connection made');

   // Test Messages
  socket.on('send-message', (data) => {
    console.log(data.text);
    io.emit('message-received', data);
  });

});

server.listen(port, () => {
  console.log("Listening on port " + port);
});