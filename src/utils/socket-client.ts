import { Socket, io } from 'socket.io-client';

const PORT = parseInt(process.env.PORT || '3000', 10);

const socketClient = () => {
  const socket = io(`:${PORT + 1}`, { path: '/api/socket', addTrailingSlash: false });

  socket.on('connect_error', async err => {
    console.log(`connect_error due to ${err.message}`);
    await fetch('/api/socket');
  })

  return socket;
}

export default socketClient;