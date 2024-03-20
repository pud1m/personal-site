import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import socketClient from '@/utils/socket-client';
import Player from '@/components/Player';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8080';

const OviousEasterEgg = () => {

  const [secketKey, setSecketKey] = useState<string>('');

  const [isOpen, setOpen] = useState(false);
  const [switchCount, setSwitchCount] = useState(0);

  const [isDwight, setIsDwight] = useState(false);
  const [dwightCount, setDwightCount] = useState(0);

  const handleSwitch = (newState: boolean) => {
    setSwitchCount((prev) => prev + 1);
    setOpen(newState);
  }

  const handleDwight = () => {
    setIsDwight(true);
    setDwightCount((prev) => prev < 3 ? prev + 1 : 1);
  }

  useEffect(() => {
    const newSocket = socketClient();
    newSocket.on('handshake', (msg: string) => {setSecketKey(msg)});
    newSocket.on('dwight', () => handleDwight());

    return () => {
      newSocket.close();
    }
  }, []);

  return (
    <div className='egg' data-is-open={isOpen}>
      <div className='-top' onClick={() => handleSwitch(true)}>Check this out (click here)</div>
      <div className='-close-btn' onClick={() => handleSwitch(false)}></div>
      <div className='-container' style={isDwight ? {justifyContent: 'center'} : {}}>
        {!isDwight && (
          <>
            <h4>{switchCount <= 5 ? 'Scan this QR code with your phone' : 'Stop fiddling around'}</h4>
            <p>{switchCount <= 5 ? `Don't worry, no funny business` : 'Just scan the thing'}</p>
            {!secketKey && <p>Connecting. Wait up</p>}
            {secketKey && <QRCode value={`${BASE_URL}/egg?id=${secketKey}`} />}
            {secketKey && <div>{`${BASE_URL}/egg?id=${secketKey}`}</div>}

            <p className='-close' onClick={() => handleSwitch(false)}>(Or nah, just go back with a cool transition)</p>
          </>
        )}
        {isDwight && (
          <>
            <Player number={dwightCount} />
          </>
        )}
      </div>
    </div>
  )
}

export default OviousEasterEgg;
