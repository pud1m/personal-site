import React from 'react';
import Aside from '@/components/Aside';
import Description from '@/components/Description';
import Peace from '@/components/Peace';
import OviousEasterEgg from '@/components/ObviousEasterEgg';

const Home = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <Aside />
        <Description />
      </div>
      <Peace />
      <OviousEasterEgg/>
    </section>
  )
}

export default Home