import { AnimatedTitle } from '@/components/Header/AnimatedTitle'
import { HeaderAnimation } from '@/components/Header/HeaderAnimation'
import Image from 'next/image'

export const HeaderSection = () => {
  return (
    <section className='relative mx-auto flex w-[calc(100%-40px)] flex-col items-center gap-16 overflow-hidden rounded-3xl bg-transparent'>
      <div className='absolute -inset-1 z-0'>
        <div className='absolute inset-0 z-0'>
          <HeaderAnimation />
        </div>
      </div>
      <div className='relative z-10 w-full'>
        <div className='mt-6 flex flex-col items-center justify-center md:hidden md:flex-row'>
          <Image
            src='/assets/images/hero-images-labels/Energy.svg'
            alt='Energy'
            width={56}
            height={56}
          />
          <span className='ml-2 text-desktop-title-s text-neutral-80'>
            Green Energy <span className='font-bold'>80%</span>
          </span>
        </div>
        <div className='flex min-h-[686px] w-full flex-col items-center justify-center bg-transparent'>
          <AnimatedTitle />
          <button className='mt-[56px] flex cursor-pointer items-center justify-center text-nowrap rounded-[80px] bg-neutral-80 px-[20px] py-[18px] text-desktop-label text-neutral-10 transition-colors hover:bg-neutral-60 md:mt-[46px]'>
            Join waitlist
            <Image
              src={'/assets/images/button-arrow.svg'}
              alt='Right arrow'
              width={22}
              height={16}
              className='ml-[8px]'
            />
          </button>
        </div>
        <div className='md:space mb-16 flex flex-row-reverse items-center justify-center px-7 md:flex-row md:space-x-4 md:px-0'>
          <div className='flex flex-col items-center justify-center md:flex-row'>
            <Image
              src='/assets/images/hero-images-labels/APY.svg'
              alt='Energy'
              width={56}
              height={56}
            />
            <span className='ml-2 text-center text-desktop-title-s text-neutral-80'>
              APY <span className='font-bold'>5.5%</span>
            </span>
          </div>
          <div className='flex flex-col items-center justify-center md:flex-row'>
            <Image
              src='/assets/images/hero-images-labels/Hashrate.svg'
              alt='Energy'
              width={56}
              height={56}
            />
            <span className='ml-2 text-center text-desktop-title-s text-neutral-80'>
              Hashrate <span className='font-bold'>120TH/s</span>
            </span>
          </div>
          <div className='flex flex-col items-center justify-center md:flex-row'>
            <Image
              src='/assets/images/hero-images-labels/TVL.svg'
              alt='TVL'
              width={56}
              height={56}
            />
            <span className='ml-2 text-center text-desktop-title-s text-neutral-80'>
              TVL <span className='font-bold'>$500M</span>
            </span>
          </div>
          <div className='hidden flex-col items-center justify-center md:flex md:flex-row'>
            <Image
              src='/assets/images/hero-images-labels/Energy.svg'
              alt='Energy'
              width={56}
              height={56}
            />
            <span className='ml-2 text-desktop-title-s text-neutral-80'>
              Green Energy <span className='font-bold'>80%</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
