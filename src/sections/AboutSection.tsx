'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

export const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          try {
            videoRef.current.play()
          } catch (error) {
            console.log('Video play error:', error)
          }
        } else if (videoRef.current) {
          if (!videoRef.current.paused) {
            videoRef.current.pause()
          }
        }
      })
    }, options)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className='relative flex flex-col items-center px-5 pb-5 gap-16 w-full bg-[#FFFCF9] overflow-hidden'>
      <div>
        <p className='text-desktop-label text-center text-light-gray'>About</p>
        <h2 className='text-mobile-h2 lg:text-desktop-h2 text-neutral-60 text-center lg:w-[800px] mt-[12px]'>
          Redefining mining through liquid staking
        </h2>
        <p className='text-neutral-40 text-mobile-subtitle lg:text-desktop-subtitle lg:w-[800px] text-center mt-[8px] lg:mt-20'>
          Optimize your PoW investments with mined.fi's multicoin staking. Stake $BTC, $ALPH, $DOGE,
          or $KAS to earn mining rewards and boost your DeFi potential.
        </p>
      </div>

      <div
        ref={sectionRef}
        className='flex flex-col items-center p-0 gap-6 lg:w-[509px] lg:h-[287px] bg-[#FFFCF9] z-[1]'>
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload='auto'
          className='w-full h-full object-cover'>
          <source src='/assets/about-animation.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='overflow-hidden w-full lg:max-w-[1160px] h-[950px] pt-[32px] lg:px-0 lg:pt-0 lg:h-[582px] bg-about-info-background bg-no-repeat bg-cover flex lg:flex-row flex-col-reverse rounded-[32px]'>
        <div className='h-[750px] w-full lg:w-[630px]'>
          <div className='w-full h-full bg-about-info-phone bg-top bg-no-repeat lg:mt-[70px] md:mt-[190px] mt-[70px]'></div>
        </div>
        <div className='lg:max-w-[468px] lg:self-center self-start flex justify-center items-center flex-col px-[32px]'>
          <h3 className='text-neutral-60  w-full text-mobile-h3 lg:text-desktop-h3 lg:text-left text-center text-wrap'>
            Mining Participation via Liquid Mining Tokens (LMTs)
          </h3>
          <p className='text-neutral-40 text-mobile-body-m lg:text-desktop-body-m mt-[24px] lg:text-left text-center'>
            Mined.fi enables users to invest in cryptocurrency block rewards (such as ALPH, BTC,
            DOGE) through a decentralized vault system represented as NFTs. Investors can receive
            mining rewards, accessing a potentially profitable field with a low entry barrier.
          </p>
          <button className='bg-neutral-10 rounded-[80px] px-[20px] py-[18px] text-desktop-label text-neutral-80 mt-[46px] lg:mt-[46px] flex justify-center items-center'>
            Join waitlist
            <Image
              src={'/assets/images/button-arrow-black.svg'}
              alt='Right arrow'
              width={22}
              height={16}
              className='ml-[8px]'
            />
          </button>
        </div>
      </div>
    </section>
  )
}
