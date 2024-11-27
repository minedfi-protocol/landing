import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='relative flex min-h-[196px] w-full flex-col items-center gap-[40px] overflow-hidden bg-neutral-10 pb-5 md:px-[140px]'>
      <div className='mt-6 flex w-full flex-col items-center justify-center md:flex-row md:items-start md:justify-between'>
        <div>
          <Image
            src='/assets/images/logo.svg'
            alt='Footer logo'
            width={96}
            height={23}
            className='w-[120px] md:w-[96px]'
          />
        </div>
        <div className='mt-8 flex justify-center space-x-[57px] md:mt-0'>
          <div className='flex flex-col'>
            <div className='text-desktop-description font-bold text-neutral-60'>Resources</div>
            <div className='mt-[12px]'>
              <div className='cursor-pointer text-desktop-description text-neutral-60 hover:text-green-40 hover:underline'>
                Media kit
              </div>
              <div className='cursor-pointer text-desktop-description text-neutral-60 hover:text-green-40 hover:underline'>
                Docs
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='text-desktop-description font-bold text-neutral-60'>Contact</div>
            <div className='mt-[12px]'>
              <Link href='mailto:minedfi@proton.me'>
                <div className='text-desktop-description text-neutral-60 hover:text-green-40 hover:underline'>
                  minedfi@proton.me
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-col items-center justify-between md:flex-row md:items-start'>
        <div className='text-desktop-description text-neutral-60'>
          Mined.fi. All right reserved. &copy; 2024
        </div>
        <div className='mt-2 flex text-desktop-description text-neutral-60 md:mt-0'>
          <div className='text-desktop-description text-neutral-60'>Follow us on:</div>
          <div className='hover: ml-[8px] flex space-x-[12px]'>
            <div className='cursor-pointer transition-all duration-200 hover:brightness-0'>
              <Image src='/assets/images/icons/x.svg' alt='X' width={16} height={16} />
            </div>
            <div className='transition-all duration-200 hover:brightness-0'>
              <Image
                src='/assets/images/icons/linkedin.svg'
                alt='Linkedin'
                width={16}
                height={16}
              />
            </div>
            <div className='cursor-pointer transition-all duration-200 hover:brightness-0'>
              <Image
                src='/assets/images/icons/telegram.svg'
                alt='Telegram'
                width={16}
                height={16}
              />
            </div>
            <div className='cursor-pointer transition-all duration-200 hover:brightness-0'>
              <Image src='/assets/images/icons/medium.svg' alt='Medium' width={16} height={16} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
