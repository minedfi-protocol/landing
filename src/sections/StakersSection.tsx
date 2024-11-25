'use client'
import Image from 'next/image'
import React, { useRef } from 'react'

export const StakersSection = () => {
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

  const ref = useRef(null)

  return (
    <section className='relative'>
      <div className='flex h-[760px] items-stretch overflow-y-scroll bg-neutral-10 px-[140px] pb-[100px] pt-[200px]'>
        <div className='flex h-min w-full items-stretch'>
          <div className='w-1/2 max-w-[600px]'>
            <p className='text-desktop-label text-light-gray'>Stakers</p>
            <h2 className='mt-[12px] text-mobile-h2 text-neutral-60 lg:w-[800px] lg:text-desktop-h2'>
              Mining made liquid
            </h2>
            <p className='mt-[20px] text-desktop-label text-neutral-40'>
              Democratizing mining while fueling a sustainable future. 
            </p>
            <div className='my-[20px] h-[1px] w-full bg-neutral-60 opacity-10' />
            <div className='flex flex-col gap-16'>
              {stakers.map(staker => (
                <div key={staker.title}>
                  <h3 className='mb-6 text-mobile-h3 text-neutral-60'>{staker.title}</h3>
                  <div className='flex flex-col gap-6'>
                    {staker.features.map(feature => (
                      <div key={feature.title} className='flex items-start'>
                        <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                        <div className='ml-[8px]'>
                          <h4 className='text-mobile-h4 mb-[8px] text-neutral-60'>
                            {feature.title}
                          </h4>
                          <p className='text-mobile-subtitle text-neutral-40'>{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-44 flex flex-1 flex-col items-center justify-between'>
            <Image src='/assets/images/stakers/Liquid.svg' alt='Liquid' height={379} width={384} />
            <Image src='/assets/images/stakers/DAO.svg' alt='DAO' height={379} width={384} />
            <Image
              src='/assets/images/stakers/Operations.svg'
              alt='Operations'
              height={379}
              width={384}
            />
          </div>
        </div>
      </div>
      <div className='bg-neutral-10 px-[140px] pt-12'>
        <button className='flex h-12 w-[138px] flex-row items-center justify-center rounded-[80px] bg-neutral-80 px-5 py-3'>
          <span className='text-sm font-medium leading-[120%] tracking-[-0.005em] text-neutral-10'>
            Join waitlist
          </span>
        </button>
      </div>
      <div className='absolute top-0 h-24 w-full bg-gradient-to-b from-neutral-10 to-transparent' />
      <div className='absolute bottom-24 h-24 w-full bg-gradient-to-t from-neutral-10 to-transparent' />
    </section>
  )
}
