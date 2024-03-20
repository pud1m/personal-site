import React, { useState, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import socketClient from '@/utils/socket-client';
import { useRouter } from 'next/router';


const EggController = () => {

  const router = useRouter();
  const {id} = router.query;

  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setConnected] = useState(false);

  useEffect(() => {
    const newSocket = socketClient();
    newSocket.on('handshake', () => {setConnected(true)});
    setSocket(newSocket);

    return () => {
      newSocket.close();
    }
  }, []);

  const handleDwight = () => {
    console.log(socket);
    socket?.emit('dwight', {target: id});
  }

  return (
    <>
      {!isConnected && <h1 className='loading'>Connecting. Wait up</h1>}
      {isConnected && id && <div className='dwigt-btn' onClick={() => handleDwight()}><span>Click me</span></div>}
      {isConnected && !id && (
        <>
          <h1>This is embarassing but...</h1>
          <p>Either something stopped working, or you're messing with the page.</p>
        </>
      )}
    </>
  );
}

export default EggController;