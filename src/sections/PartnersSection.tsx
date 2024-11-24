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
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
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
                <div className='grid grid-cols-2 gap-4 w-full max-w-3xl mx-auto'>
                  {/* Siatka 2x2 na wszystkich breakpointach */}
                  <div className='w-full h-8 relative flex items-center justify-center'>
                    <Image
                      src='/assets/images/partners/audit-1.png'
                      alt='Auditors'
                      width={130}
                      height={32}
                      className='object-contain w-[120px] md:max-w-[130px]'
                    />
                  </div>
                  <div className='w-full h-8 relative flex items-center justify-center'>
                    <Image
                      src='/assets/images/partners/audit-2.png'
                      alt='Auditors'
                      width={130}
                      height={32}
                      className='object-contain w-[120px] md:max-w-[130px]'
                    />
                  </div>
                  <div className='w-full h-8 relative flex items-center justify-center'>
                    <Image
                      src='/assets/images/partners/audit-3.png'
                      alt='Auditors'
                      width={130}
                      height={32}
                      className='object-contain w-[120px] md:max-w-[130px]'
                    />
                  </div>
                  <div className='w-full h-8 relative flex items-center justify-center'>
                    <Image
                      src='/assets/images/partners/audit-4.png'
                      alt='Auditors'
                      width={130}
                      height={32}
                      className='object-contain w-[120px] md:max-w-[130px]'
                    />
                  </div>
                </div>
              }
            />

            <PartnersCardItem
              title='Business partners'
              logos={
                <div className='grid grid-cols-2 gap-4 w-full max-w-3xl mx-auto'>
                  <div className='w-full h-8 relative flex items-center justify-center'>
                    <Image
                      src='/assets/images/partners/alph.png'
                      alt='Partners'
                      width={130}
                      height={32}
                      className='object-contain w-[120px] md:max-w-[130px]'
                    />
                  </div>
                  <div className='w-full h-8 relative flex items-center justify-center'>
                    <Image
                      src='/assets/images/partners/hearst.png'
                      alt='Partners'
                      width={130}
                      height={32}
                      className='object-contain w-[120px] md:max-w-[130px]'
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
