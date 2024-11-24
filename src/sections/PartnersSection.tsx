'use client'
import React from 'react'
import Image from 'next/image'
import Carousel from '@/components/Carousel/Carousel'
import { PartnersCardItem } from '@/components/CardItem/PartnersCardItem'

export const PartnersSection = () => {
  return (
    <section className='relative flex flex-col items-center px-5 pb-5 min-h-[800px] gap-16 w-full bg-[#FFFCF9] overflow-hidden'>
      <div
        className='absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-rings bg-cover bg-[center_top_rem] bg-no-repeat'
        style={{
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)'
        }}></div>
      <div className='mt-48 z-50'>
        <>
          <p className='text-mobile-label md:text-desktop-label text-center text-light-gray'>
            Build on
          </p>
          <h2 className='text-mobile-h2 lg:text-desktop-h2 text-neutral-60 text-center lg:w-[800px] mt-[12px]'>
            Partners
          </h2>
          <p className='text-neutral-40 text-mobile-subtitle lg:text-desktop-subtitle lg:w-[800px] text-center mt-[8px]'></p>
        </>
        <div>
          <Carousel autoPlay showGradient={false} interval={3000}>
            <PartnersCardItem
              title='Auditors'
              logos={
                <div className='flex flex-col'>
                  <div className='flex space-x-[200px]'>
                    <Image
                      src='/assets/images/partners/audit-1.png'
                      alt='Auditors'
                      width={154}
                      height={27}
                    />
                    <Image
                      src='/assets/images/partners/audit-2.png'
                      alt='Auditors'
                      width={154}
                      height={27}
                    />
                  </div>
                  <div className='flex space-x-[200px] mt-[17px]'>
                    <Image
                      src='/assets/images/partners/audit-3.png'
                      alt='Auditors'
                      width={154}
                      height={27}
                    />
                    <Image
                      src='/assets/images/partners/audit-4.png'
                      alt='Auditors'
                      width={154}
                      height={27}
                    />
                  </div>
                </div>
              }
            />
            <PartnersCardItem
              title='Business partners'
              logos={
                <div className='flex h-[38px] space-x-[200px]'>
                  <Image
                    src='/assets/images/partners/alph.png'
                    alt='Partners'
                    width={148}
                    height={38}
                  />
                  <Image
                    src='/assets/images/partners/hearst.png'
                    alt='Partners'
                    width={156}
                    height={20}
                  />
                </div>
              }
            />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
