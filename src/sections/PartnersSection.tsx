'use client'
import React from 'react'
import Image from 'next/image'
import Carousel from '@/components/Carousel/Carousel'
import { PartnersCardItem } from '@/components/CardItem/PartnersCardItem'

export const PartnersSection = () => {
  return (
    <section className='relative flex flex-col items-center px-5 pb-5 max-h-[800px] gap-16 w-full bg-[#FFFCF9] overflow-hidden'>
      <div
        className='absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-rings bg-cover bg-no-repeat'
        style={{
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)'
        }}></div>
      <div className='mt-20 md:mt-48 z-50'>
        <>
          <p className='text-mobile-label md:text-desktop-label text-center text-light-gray'>
            Build on
          </p>
          <h2 className='text-mobile-h2 lg:text-desktop-h2 text-neutral-60 text-center lg:w-[800px] mt-[12px]'>
            Partners
          </h2>
          <p className='text-neutral-40 text-mobile-subtitle lg:text-desktop-subtitle lg:w-[800px] text-center mt-[8px]'></p>
        </>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Carousel autoPlay showGradient={false} interval={3000}>
            <PartnersCardItem
              title='Auditors'
              logos={
                <div className='flex flex-col gap-4 sm:gap-6 md:gap-8'>
                  <div className='flex flex-row items-center justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-[200px]'>
                    <div className='w-[120px] sm:w-[130px] md:w-[140px] lg:w-[154px] relative h-[20px] sm:h-[23px] md:h-[25px] lg:h-[27px]'>
                      <Image
                        src='/assets/images/partners/audit-1.png'
                        alt='Auditors'
                        fill
                        className='object-contain'
                      />
                    </div>
                    <div className='w-[120px] sm:w-[130px] md:w-[140px] lg:w-[154px] relative h-[20px] sm:h-[23px] md:h-[25px] lg:h-[27px]'>
                      <Image
                        src='/assets/images/partners/audit-2.png'
                        alt='Auditors'
                        fill
                        className='object-contain'
                      />
                    </div>
                  </div>

                  <div className='flex items-center justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-[200px]'>
                    <div className='w-[120px] sm:w-[130px] md:w-[140px] lg:w-[154px] relative h-[20px] sm:h-[23px] md:h-[25px] lg:h-[27px]'>
                      <Image
                        src='/assets/images/partners/audit-3.png'
                        alt='Auditors'
                        fill
                        className='object-contain'
                      />
                    </div>
                    <div className='w-[120px] sm:w-[130px] md:w-[140px] lg:w-[154px] relative h-[20px] sm:h-[23px] md:h-[25px] lg:h-[27px]'>
                      <Image
                        src='/assets/images/partners/audit-4.png'
                        alt='Auditors'
                        fill
                        className='object-contain'
                      />
                    </div>
                  </div>
                </div>
              }
            />

            <PartnersCardItem
              title='Business partners'
              logos={
                <div className='flex items-center justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-[200px]'>
                  <div className='w-[120px] sm:w-[130px] md:w-[140px] lg:w-[148px] relative h-[28px] sm:h-[32px] md:h-[35px] lg:h-[38px]'>
                    <Image
                      src='/assets/images/partners/alph.png'
                      alt='Partners'
                      fill
                      className='object-contain'
                    />
                  </div>
                  <div className='w-[120px] sm:w-[130px] md:w-[140px] lg:w-[156px] relative h-[15px] sm:h-[17px] md:h-[18px] lg:h-[20px]'>
                    <Image
                      src='/assets/images/partners/hearst.png'
                      alt='Partners'
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
              }
            />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
