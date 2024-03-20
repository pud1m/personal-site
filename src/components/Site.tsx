import React from 'react';
import Head from 'next/head';
import localFont from 'next/font/local';

const ginger = localFont({
  src: [
    {
      path: '../fonts/F37GingerPro-Bold.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/F37GingerPro-ExtraBold.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/F37GingerPro-Black.otf',
      weight: '600',
      style: 'normal',
    },
  ],
})

const Site = ({ children }: { children:  React.ReactNode}) => {
  return (
    <>
      <Head>
        <title>Thalles Sales</title>
        <meta name='description' content='Full-stack software engineer, problem solver, fun at parties' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/profile.png' />
      </Head>
      <main className={ginger.className}>
        {children}
      </main>
    </>
  );
}

export default Site;
