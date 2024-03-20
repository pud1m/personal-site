import { Socket, io } from 'socket.io-client';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8080';

const socketClient = () => {
  const socket = io(BASE_URL);

  socket.on('connect_error', async err => {
    console.log(`connect_error due to ${err.message}`);
  })

  return socket;
}

export default socketClient;