'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Carousel } from '@/components/Carousel/Carousel'
import { AboutCardItem } from '@/components/CardItem/AboutCardItem'

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
    <section className='relative flex w-full flex-col items-center gap-16 overflow-hidden bg-[#FFFCF9] px-5 pb-5'>
      <div>
        <h2 className='mt-7 text-center text-mobile-h2 text-neutral-60 lg:w-[800px] lg:text-desktop-h2'>
          Redefining mining through liquid staking
        </h2>
        <p className='mt-2 text-center text-mobile-subtitle text-neutral-40 lg:mt-20 lg:w-[800px] lg:text-desktop-subtitle'>
          Optimize your PoW investments with mined.fi's multicoin staking. Stake $BTC, $ALPH, $DOGE,
          or $KAS to earn mining rewards and boost your DeFi potential.
        </p>
      </div>

      <div
        ref={sectionRef}
        className='z-[1] flex flex-col items-center gap-6 bg-[#FFFCF9] p-0 lg:h-[287px] lg:w-[509px]'>
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload='auto'
          className='h-full w-full object-cover'>
          <source src='/assets/about-animation.mp4' type='video/mp4' />
        </video>
      </div>
      <div className=''>
        <Carousel autoPlay showGradient showButtons={false} interval={3000}>
          <AboutCardItem
            number='1'
            description='Stake your assets on your terms with flexible vesting periods.'
          />
          <AboutCardItem
            number='2'
            description='Receive Liquid Mining Tokens (LMTs) in return (e.g., sALPH, sKAS, sBTC).'
          />
          <AboutCardItem
            number='3'
            description=' Watch your allocation grow and monitor your staking performance with full visibility and real-time insights.'
          />
        </Carousel>
      </div>
      <div className='flex h-[950px] w-full flex-col-reverse overflow-hidden rounded-[32px] bg-about-info-background bg-cover bg-no-repeat pt-[32px] lg:h-[582px] lg:max-w-[1160px] lg:flex-row lg:px-0 lg:pt-0'>
        <div className='h-[750px] w-full lg:w-[630px]'>
          <div className='mt-[70px] h-full w-full bg-about-info-phone bg-top bg-no-repeat md:mt-[190px] lg:mt-[70px]'></div>
        </div>
        <div className='flex flex-col items-center justify-center self-start px-[32px] lg:max-w-[468px] lg:self-center'>
          <h3 className='w-full text-wrap text-center text-mobile-h3 text-neutral-60 lg:text-left lg:text-desktop-h3'>
            Mining Participation via Liquid Mining Tokens (LMTs)
          </h3>
          <p className='mt-[24px] text-center text-mobile-body-m text-neutral-40 lg:text-left lg:text-desktop-body-m'>
            Mined.fi enables users to invest in cryptocurrency block rewards (such as ALPH, BTC,
            DOGE) through a decentralized vault system represented as NFTs. Investors can receive
            mining rewards, accessing a potentially profitable field with a low entry barrier.
          </p>

          <button className='mt-[46px] flex items-center justify-center rounded-[80px] bg-neutral-10 px-[20px] py-[18px] text-desktop-label text-neutral-80 transition-colors hover:bg-green-10 lg:mt-[46px]'>
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
