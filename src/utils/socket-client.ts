import { Socket, io } from 'socket.io-client';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

const socketClient = () => {
  const socket = io(BASE_URL, { path: '/api/socket', addTrailingSlash: false });

  socket.on('connect_error', async err => {
    console.log(`connect_error due to ${err.message}`);
    await fetch('/api/socket');
  })

  return socket;
}

export default socketClient;