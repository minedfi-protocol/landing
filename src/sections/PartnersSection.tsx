import React from 'react'
import Image from 'next/image'
import Carousel from '@/components/Carousel/Carousel'
import { PartnersCardItem } from '@/components/CardItem/PartnersCardItem'

export const PartnersSection = () => {
  return (
    <section className='flex min-h-[800px] w-full flex-col items-center gap-16 overflow-hidden bg-cross-section-blur bg-contain bg-no-repeat px-5 pb-5 md:relative md:min-h-[600px] md:justify-center md:bg-cover md:bg-[center_15%]'>
      <div className='absolute bottom-0 h-24 w-full bg-gradient-to-t from-neutral-10 to-transparent md:h-44' />
      <div className='absolute top-0 h-32 w-full bg-gradient-to-t from-transparent to-neutral-10 md:h-80' />
      <div className='md:mt-30 z-50 mt-4 h-full'>
        <>
          <h2 className='mt-[12px] text-center text-mobile-h2 text-neutral-60 lg:w-[800px] lg:text-desktop-h2'>
            Partners
          </h2>
          <p className='mt-2 text-center text-mobile-subtitle text-neutral-40 lg:w-[800px] lg:text-desktop-subtitle'></p>
        </>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* <Carousel showButtons={false} showGradient={false}> */}
          {/* <PartnersCardItem
              title=''
              logos={ */}
          <div className='mx-auto mt-16 flex w-full max-w-3xl gap-4'>
            <div className='relative flex h-8 w-full items-center justify-center'>
              <Image
                src='/assets/images/partners/ulamLogo.png'
                alt='Partners'
                width={130}
                height={32}
                className='w-[120px] object-contain md:max-w-[130px]'
              />
            </div>
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
                src='/assets/images/partners/invariant.png'
                alt='Partners'
                width={130}
                height={32}
                className='w-[120px] object-contain md:max-w-[130px]'
              />
            </div>
            <div className='relative flex h-8 w-full items-center justify-center'>
              <Image
                src='/assets/images/partners/inbuco.png'
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
          {/* } */}
          {/* /> */}
          {/* </Carousel> */}
        </div>
      </div>
    </section>
  )
}
