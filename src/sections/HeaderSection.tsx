import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Image from 'next/image'

export const HeaderSection = () => {
  return (
    <section className='relative flex flex-col items-center px-5 pb-5 gap-16 w-full bg-[#FFFCF9]'>
      {/* <div className='absolute inset-0 w-full h-full'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='absolute top-0 left-0 w-full h-full object-cover'
          style={{ backgroundColor: 'transparent' }}>
          <source src='/assets/water-drop.mp4' type='video/mp4' />
        </video>
      </div> */}

      {/* Top Left Square */}
      <div className='absolute top-5 md:-top-5 left-5 w-[298px] h-[146px] bg-apy_mobile md:bg-apy bg-cover bg-center' />

      {/* Top Right Square */}
      <div className='absolute top-5 md:-top-5 right-5 w-[298px] h-[146px] bg-tvl_mobile md:bg-tvl bg-cover bg-center' />

      {/* Bottom Left Square */}
      <div className='absolute bottom-8 left-5 w-[298px] h-[146px] bg-hash_mobile md:bg-hashrate bg-cover bg-center' />

      {/* Bottom Right Square */}
      <div className='absolute bottom-8 right-5 w-[298px] h-[146px] bg-energy_mobile md:bg-energy bg-cover bg-center' />

      <div className='w-full min-h-[686px] bg-header-pattern bg-cover bg-center bg-no-repeat rounded-lg flex flex-col items-center justify-center'>
        <h1 className='text-mobile-h1 text-center md:text-desktop-h1 bg-gradient-to-r p-4 from-[#180F08] to-[#5D544D] bg-clip-text text-transparent'>
          Redefining Mining
        </h1>
        <h1 className='text-mobile-subtitle text-center md:text-desktop-subtitle mt-[24px] text-neutral-40'>
          Democratizing mining while fueling a sustainable future.
        </h1>
        <button className='bg-neutral-80 rounded-[80px] px-[20px] py-[18px] text-desktop-label text-neutral-10 mt-[56px] md:mt-[46px] flex justify-center items-center'>
          Join waitlist
          <Image
            src={'/assets/images/button-arrow.svg'}
            alt='Right arrow'
            width={22}
            height={16}
            className='ml-[8px]'
          />
        </button>
      </div>
    </section>
  )
}
