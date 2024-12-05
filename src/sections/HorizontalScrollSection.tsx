'use client'
import { AboutCardItem } from '@/components/CardItem/AboutCardItem'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ChartAnimation } from '@/components/About/ChartAnimation'

export const Example = () => {
  return (
    <div className='gap-16bg-[#FFFCF9] relative flex w-full flex-col items-center px-5 pb-5'>
      <HorizontalScrollCarousel />
      <div className='my-[100px] flex h-[950px] w-full flex-col-reverse overflow-hidden rounded-[32px] bg-about-info-background bg-cover bg-no-repeat pt-[32px] lg:h-[582px] lg:max-w-[1160px] lg:flex-row lg:px-0 lg:pt-0'>
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
    </div>
  )
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['200%', '-40%'])

  return (
    <section
      ref={targetRef}
      className='relative flex h-[200vh] w-full flex-col items-center bg-[#FFFCF9] px-5 pb-5'>
      <div>
        <h2 className='mt-7 text-center text-mobile-h2 text-neutral-60 lg:mt-12 lg:w-[800px] lg:text-desktop-h2'>
          Redefining mining through liquid staking
        </h2>
        <p className='mt-2 text-center text-mobile-subtitle text-neutral-40 lg:mt-[20px] lg:w-[800px] lg:text-desktop-subtitle'>
          Optimize your PoW investments with mined.fi's multicoin staking. Stake $BTC, $ALPH, $DOGE,
          or $KAS to earn mining rewards and boost your DeFi potential.
        </p>
      </div>

      <div className='sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden'>
        <ChartAnimation />
        <div className='absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-neutral-10 to-transparent' />

        <motion.div style={{ x }} className='mt-10 flex w-fit gap-[400px] overflow-hidden'>
          <div className='min-w-[346px]'>
            <AboutCardItem
              number='1'
              description='Stake your assets on your terms with flexible vesting periods.'
            />
          </div>
          <div className='min-w-[346px]'>
            <AboutCardItem
              number='2'
              description='Receive Liquid Mining Tokens (LMTs) in return (e.g., sALPH, sKAS, sBTC).'
            />
          </div>
          <div className='min-w-[346px]'>
            <AboutCardItem
              number='3'
              description=' Watch your allocation grow and monitor your staking performance with full visibility and real-time insights.'
            />
          </div>
        </motion.div>
      </div>
      <div className='absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-neutral-10 to-transparent' />
    </section>
  )
}

const Card = ({ card }: any) => {
  return (
    <div
      key={card.id}
      className='group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200'>
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'></div>
      <div className='absolute inset-0 z-10 grid place-content-center'>
        <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
          {card.title}
        </p>
      </div>
    </div>
  )
}

export default Example

const cards = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_7RydESGMNV0Wq92cAGz9ePB_hv68H87Sg&s',
    title: 'Title 1',
    id: 1
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyrkKh1sXUXBLMjMq5XUOhnaFU5zOx4m6pA&s',
    title: 'Title 2',
    id: 2
  },
  {
    url: 'https://johnfrenchlandscapes.com.au/wp-content/uploads/2022/10/What-Is-The-Difference-Between-Landscape-Architecture-And-Landscape-Design-1024x768.jpg',
    title: 'Title 3',
    id: 3
  }
]
