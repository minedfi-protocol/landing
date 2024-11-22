import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Image from 'next/image'

export const About = () => {
  return (
    <section className='relative flex flex-col items-center px-5 pb-5 gap-16 w-full bg-[#FFFCF9] overflow-hidden'>
      <p className='text-desktop-label'>About</p>
      <h2 className='text-desktop-h2 text-neutral-60'>Redefining mining through liquid staking</h2>
      <p className='text-neutral-40 text-desktop-subtitle'>
        Optimize your PoW investments with mined.fi’s multicoin staking. Stake $BTC, $ALPH, $DOGE,
        or $KAS to earn mining rewards and boost your DeFi potential.
      </p>
    </section>
  )
}
