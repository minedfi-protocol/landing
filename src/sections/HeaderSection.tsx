'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const HeaderSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className='relative mx-auto flex w-[calc(100%-40px)] flex-col items-center gap-16 overflow-hidden rounded-3xl bg-transparent'>
      <div className='absolute -inset-1 z-0'>
        <div className='absolute inset-0 z-0'>
          <video
            key={isMobile ? 'mobile' : 'desktop'}
            autoPlay
            muted
            loop
            playsInline
            className='h-full w-full bg-transparent object-cover md:object-center'>
            <source
              src={isMobile ? '/assets/drop-mobile.mp4' : '/assets/drop.mp4'}
              type='video/mp4'
            />
          </video>
        </div>
      </div>
      <div className='relative z-10 w-full'>
        {/* <div className='absolute -left-0 top-5 h-[100px] w-[200px] bg-apy_mobile bg-cover bg-center md:-top-5 md:h-[146px] md:w-[298px] md:bg-apy' />
        <div className='absolute -right-0 top-5 h-[100px] w-[200px] bg-tvl_mobile bg-cover bg-center md:-top-5 md:h-[146px] md:w-[298px] md:bg-tvl' />
        <div className='absolute -left-0 bottom-8 h-[100px] w-[200px] bg-hash_mobile bg-cover bg-center md:h-[146px] md:w-[340px] md:bg-hashrate' />
        <div className='absolute -right-0 bottom-8 h-[100px] w-[200px] bg-energy_mobile bg-cover bg-center md:h-[146px] md:w-[340px] md:bg-energy' /> */}

        <div className='flex min-h-[686px] w-full flex-col items-center justify-center bg-transparent'>
          <h1 className='bg-gradient-to-r from-[#180F08] to-[#5D544D] bg-clip-text p-4 text-center text-mobile-h1 text-transparent md:text-desktop-h1'>
            Redefining Mining
          </h1>
          <h1 className='mt-[24px] text-center text-mobile-subtitle text-neutral-40 md:text-desktop-subtitle'>
            Democratizing mining while fueling a sustainable future.
          </h1>
          <button className='mt-[56px] flex items-center justify-center rounded-[80px] bg-neutral-80 px-[20px] py-[18px] text-desktop-label text-neutral-10 md:mt-[46px]'>
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
        <div className='md:space mb-16 flex flex-row-reverse items-center justify-center px-7 md:flex-row md:space-x-4 md:px-0'>
          <div className='flex flex-col items-center justify-center md:flex-row'>
            <Image
              src='/assets/images/hero-images-labels/APY.svg'
              alt='Energy'
              width={56}
              height={56}
            />
            <span className='ml-2 text-center text-desktop-title-s text-neutral-80'>
              APY <span className='font-bold'>5.5%</span>
            </span>
          </div>
          <div className='flex flex-col items-center justify-center md:flex-row'>
            <Image
              src='/assets/images/hero-images-labels/Hashrate.svg'
              alt='Energy'
              width={56}
              height={56}
            />
            <span className='ml-2 text-center text-desktop-title-s text-neutral-80'>
              Hashrate <span className='font-bold'>120TH/s</span>
            </span>
          </div>
          <div className='flex flex-col items-center justify-center md:flex-row'>
            <Image
              src='/assets/images/hero-images-labels/TVL.svg'
              alt='TVL'
              width={56}
              height={56}
            />
            <span className='ml-2 text-center text-desktop-title-s text-neutral-80'>
              TVL <span className='font-bold'>$500M</span>
            </span>
          </div>
          <div className='hidden flex-col items-center justify-center md:flex md:flex-row'>
            <Image
              src='/assets/images/hero-images-labels/Energy.svg'
              alt='Energy'
              width={56}
              height={56}
            />
            <span className='ml-2 text-desktop-title-s text-neutral-80'>
              Green Energy <span className='font-bold'>80%</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
