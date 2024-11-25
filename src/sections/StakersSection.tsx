'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import {
  motion,
  useAnimationControls,
  useInView,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform
} from 'motion/react'

export const StakersSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)')
    const handleResize = () => setIsMobile(mediaQuery.matches)

    handleResize()

    mediaQuery.addEventListener('change', handleResize)

    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [])

  const stakers = [
    {
      title: 'Liquid Mining',
      features: [
        {
          title: 'Simple and Accessible',
          desc: 'Start liquid mining by staking your coins in just a few seconds.',
          icon: '/assets/images/stakers/1.1.svg'
        },
        {
          title: 'Leverage your LMTs',
          desc: 'Receive Liquid Mining Tokens in return for your staked coins and utilize them across DeFi.',
          icon: '/assets/images/stakers/1.2.svg'
        },
        {
          title: 'Reward redistribution',
          desc: 'Earn mining rewards without hardware or technical expertise.',
          icon: '/assets/images/stakers/1.3.svg'
        }
      ]
    },
    {
      title: 'DAO operators',
      features: [
        {
          title: 'Governance',
          desc: 'Stake your MINE tokens in the Mine Safety Module (MSM) to actively participate in key protocol decisions, while enhancing security and stability.',
          icon: '/assets/images/stakers/2.1.svg'
        },
        {
          title: 'Expand mined.fi',
          desc: 'Scale the protocol to support additional coins and issue new LMTs.',
          icon: '/assets/images/stakers/2.2.svg'
        },
        {
          title: 'Leverage your MINE',
          desc: 'Earn MINE and additional rewards proportional to your stake.',
          icon: '/assets/images/stakers/2.3.svg'
        }
      ]
    },
    {
      title: 'Mining operators',
      features: [
        {
          title: 'Promote Decentralization',
          desc: 'Access liquidity to finance your mining infrastructure.',
          icon: '/assets/images/stakers/3.1.svg'
        },
        {
          title: 'Leverage your mining infrastructure',
          desc: 'Plug your mining infrastructure into the vaults and earn rewards.',
          icon: '/assets/images/stakers/3.2.svg'
        },
        {
          title: 'Covered operational costs',
          desc: 'Get financial coverage for running your mining infrastructure.',
          icon: '/assets/images/stakers/3.3.svg'
        }
      ]
    }
  ]

  const scrollRef = useRef(null)
  const imagesRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef
  })

  const [addMargin, setAddMargin] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', value => {
    if (value > 0.8) {
      setAddMargin(true)
    } else {
      setAddMargin(false)
    }
    console.log('value', value)
  })
  console.log(addMargin)
  const secondTabRef = useRef(null)
  const thirdTabRef = useRef(null)

  const secondTabInView = useInView(secondTabRef, {
    amount: 0.6
  })
  const thirdTabInView = useInView(thirdTabRef, {
    amount: 0.7
  })

  const controls = useAnimationControls()
  useEffect(() => {
    if (!secondTabInView && !thirdTabInView) {
      controls.start('initial')
    } else if (secondTabInView && !thirdTabInView) {
      controls.start('middle')
    } else if (thirdTabInView) {
      controls.start('final')
    }
  }, [secondTabInView, thirdTabInView])

  return (
    <section ref={scrollRef} className='relative'>
      <div className='flex flex-col items-stretch bg-neutral-10 px-4 pt-12 md:px-[20px] lg:px-[140px] lg:pt-[200px]'>
        <div
          className={`sticky top-0 flex min-h-[112px] flex-col items-center justify-center bg-neutral-10 lg:w-1/2 lg:max-w-[600px] lg:items-start ${addMargin && 'mb-[450px]'}`}>
          <div className='absolute top-[272px] z-10 h-4 w-full bg-gradient-to-b from-neutral-10 to-transparent' />
          <h2 className='mt-[8px] text-center text-mobile-h2 text-neutral-60 lg:w-[800px] lg:text-left lg:text-desktop-h2'>
            Mining made liquid
          </h2>
          <p className='mt-[16px] text-center text-mobile-description text-neutral-40 lg:text-left lg:text-desktop-title-m'>
            Democratizing mining while fueling a sustainable future. 
          </p>
          <div className='my-[20px] hidden h-[1px] w-full bg-neutral-60 opacity-10 lg:block' />
        </div>

        <div className='flex h-min w-full flex-col-reverse items-stretch lg:flex-row'>
          <div className='max-w-[600px] lg:w-1/2'>
            <div className='mt-16 flex flex-col gap-6'>
              {stakers.map(staker => {
                const ref = () => {
                  if (staker.title === stakers[1].title) {
                    return secondTabRef
                  } else if (staker.title === stakers[2].title) {
                    return thirdTabRef
                  } else {
                    return null
                  }
                }
                return (
                  <div key={staker.title} ref={ref()}>
                    <h3 className='mb-6 text-mobile-title-m text-neutral-60'>{staker.title}</h3>
                    <div className='flex flex-col gap-6'>
                      {staker.features.map((feature, index) => (
                        <div key={feature.title} className='flex items-start'>
                          <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                          <div className='ml-[8px]'>
                            <h4 className='lg:desktop-title-m mb-[8px] text-mobile-h4 text-neutral-60'>
                              {feature.title}
                            </h4>
                            <p className='text-mobile-description text-neutral-40 lg:text-desktop-body-s'>
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <motion.div
            ref={imagesRef}
            className={`sticky top-[112px] flex max-h-[160px] overflow-hidden bg-neutral-10 ${addMargin && 'mb-[290px]'} `}>
            <motion.div
              className='flex flex-1 flex-col items-center justify-between gap-[100px]'
              variants={{
                initial: { y: 0 },
                middle: { y: -260 },
                final: { y: -520 }
              }}
              animate={controls}
              transition={{
                duration: 0.8,
                ease: 'easeInOut'
              }}
              initial='initial'>
              <div className='flex min-h-[160px] items-center justify-center'>
                <motion.img
                  src='/assets/images/stakers/Liquid.svg'
                  alt='Liquid'
                  className='m-auto w-[120px] lg:w-[370px]'
                  whileInView={{
                    scale: 1.5,
                    transition: { duration: 0.7 }
                  }}
                />
              </div>
              <div className='flex min-h-[160px] items-center justify-center'>
                <motion.img
                  src='/assets/images/stakers/DAO.svg'
                  alt='DAO'
                  className='m-auto w-[120px] lg:w-[370px]'
                  whileInView={{
                    scale: 1.7,
                    transition: { duration: 0.7 }
                  }}
                />
              </div>
              <div className='flex min-h-[160px] items-center justify-center'>
                <motion.img
                  src='/assets/images/stakers/Operations.svg'
                  alt='Operations'
                  className='m-auto w-[120px] lg:w-[370px]'
                  whileInView={{
                    scale: 1.7,
                    transition: { duration: 0.7 }
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className='hidden bg-neutral-10 px-[140px] pt-12 lg:block'>
        <button className='flex h-12 w-[138px] flex-row items-center justify-center rounded-[80px] bg-neutral-80 px-5 py-3'>
          <span className='text-sm font-medium leading-[120%] tracking-[-0.005em] text-neutral-10'>
            Join waitlist
          </span>
        </button>
      </div>

      <div className='sticky bottom-0 h-24 w-full bg-gradient-to-t from-neutral-10 to-transparent' />
    </section>
  )
}
