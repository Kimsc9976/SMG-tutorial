const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use('/src', express.static(__dirname + '/src'));

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', async (socket) =>  {
  console.log('a user connected');

  socket.on("chat meessage", (msg) => {
    console.log('message: ' + msg);
    io.emit("chat message", msg);
  });
  
  socket.on('disconnect', () => { // 종료는 개별 클라이언트가 끊어졌을 때 발생하는 이벤트이므로 socket.on으로 처리해야함
    console.log('user disconnected');
  });
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});