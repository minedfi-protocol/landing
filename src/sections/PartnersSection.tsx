'use client'
import React from 'react'
import Image from 'next/image'
import Carousel from '@/components/Carousel/Carousel'
import { PartnersCardItem } from '@/components/CardItem/PartnersCardItem'

export const PartnersSection = () => {
  return (
    <section className='relative flex min-h-[800px] w-full flex-col items-center justify-center gap-16 overflow-hidden bg-cross-section-blur bg-contain bg-no-repeat px-5 pb-5 md:min-h-[1200px] md:bg-cover'>
      {/* <div
        className='bg-rings absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-cover bg-no-repeat'
        style={{
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
        }}></div> */}
      <div className='z-50 mt-20 h-full md:mt-48'>
        <>
          <p className='text-center text-mobile-label text-light-gray md:text-desktop-label'>
            Build on
          </p>
          <h2 className='mt-[12px] text-center text-mobile-h2 text-neutral-60 lg:w-[800px] lg:text-desktop-h2'>
            Partners
          </h2>
          <p className='mt-2 text-center text-mobile-subtitle text-neutral-40 lg:w-[800px] lg:text-desktop-subtitle'></p>
        </>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <Carousel autoPlay showGradient={false} interval={3000}>
            <PartnersCardItem
              title='Auditors'
              logos={
                <div className='mx-auto grid w-full max-w-3xl grid-cols-2 gap-4'>
                  {/* Siatka 2x2 na wszystkich breakpointach */}
                  <div className='relative flex h-8 w-full items-center justify-center'>
                    <Image
                      src='/assets/images/partners/audit-1.png'
                      alt='Auditors'
                      width={130}
                      height={32}
                      className='w-[120px] object-contain md:max-w-[130px]'
                    />
                  </div>
                  <div className='relative flex h-8 w-full items-center justify-center'>
                    <Image
                      src='/assets/images/partners/audit-2.png'
                      alt='Auditors'
                      width={130}
                      height={32}
                      className='w-[120px] object-contain md:max-w-[130px]'
                    />
                  </div>
                  <div className='relative flex h-8 w-full items-center justify-center'>
                    <Image
                      src='/assets/images/partners/audit-3.png'
                      alt='Auditors'
                      width={130}
                      height={32}
                      className='w-[120px] object-contain md:max-w-[130px]'
                    />
                  </div>
                  <div className='relative flex h-8 w-full items-center justify-center'>
                    <Image
                      src='/assets/images/partners/audit-4.png'
                      alt='Auditors'
                      width={130}
                      height={32}
                      className='w-[120px] object-contain md:max-w-[130px]'
                    />
                  </div>
                </div>
              }
            />

            <PartnersCardItem
              title='Business partners'
              logos={
                <div className='mx-auto grid w-full max-w-3xl grid-cols-2 gap-4'>
                  <div className='relative flex h-8 w-full items-center justify-center'>
                    <Image
                      src='/assets/images/partners/alph.png'
                      alt='Partners'
                      width={130}
                      height={32}
                      className='w-[120px] object-contain md:max-w-[130px]'
                    />
                  </div>
                  <div className='relative flex h-8 w-full items-center justify-center'>
                    <Image
                      src='/assets/images/partners/hearst.png'
                      alt='Partners'
                      width={130}
                      height={32}
                      className='w-[120px] object-contain md:max-w-[130px]'
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
