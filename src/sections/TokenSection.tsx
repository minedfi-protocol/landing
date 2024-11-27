import React from 'react'
import Image from 'next/image'

export const TokenSection = () => {
  return (
    <section className='relative flex w-full flex-col items-center gap-16 overflow-hidden bg-[#FFFCF9] px-5 pb-5'>
      <div>
        <h2 className='mt-[12px] text-center text-mobile-h2 text-neutral-60 lg:w-[800px] lg:text-desktop-h2'>
          Stake native tokens, receive LMTs and mining rewards
        </h2>
        <p className='mt-2 text-center text-mobile-subtitle text-neutral-40 lg:w-[800px] lg:text-desktop-subtitle'>
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
