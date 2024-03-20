const app = require('express')();
const cors = require('cors');
app.use(cors({
  origin: '*'
}));

const server = require('http').createServer(app);
const port = process.env.PORT || 8080;

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('socket connect', socket.id);
  socket.emit('handshake', socket.id);
  
  socket.on('dwight', (data) => {
    console.log('dwight', data);
    io.to(data.target).emit('dwight');
  });
})

server.listen(port, function() {
  console.log(`Listening on port ${port}`);
});