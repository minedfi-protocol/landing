'use client'
import React from 'react'
import Image from 'next/image'

export const TokenSection = () => {
  return (
    <section className='relative flex flex-col items-center px-5 pb-5 gap-16 w-full bg-[#FFFCF9] overflow-hidden'>
      <div>
        <h2 className='text-mobile-h2 lg:text-desktop-h2 text-neutral-60 text-center lg:w-[800px] mt-[12px]'>
          Stake native tokens, receive LMTs and mining rewards
        </h2>
        <p className='text-neutral-40 text-mobile-subtitle lg:text-desktop-subtitle lg:w-[800px] text-center mt-2'>
          Explore Supported Assets
        </p>
      </div>
      <div className='md:mt-[64px]'>
        <div className='block md:hidden'>
          <Image
            src='/assets/images/Token-Graphic-Mobile.png'
            alt='Info graphic about tokens'
            width={375}
            height={386}
          />
        </div>

        <div className='hidden md:block'>
          <Image
            src='/assets/images/Token-Graphic.png'
            alt='Info graphic about tokens'
            width={679}
            height={697}
          />
        </div>
      </div>
    </section>
  )
}
