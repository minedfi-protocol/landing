'use client'
import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='relative flex flex-col items-center md:px-[140px] pb-5 gap-16 w-full min-h-[196px] bg-neutral-10 overflow-hidden'>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between w-full mt-6'>
        <div>
          <Image
            src='/assets/images/logo.svg'
            alt='Footer logo'
            width={96}
            height={23}
            className='w-[120px] md:w-[96px]'
          />
        </div>
        <div className='flex space-x-[57px] justify-center md:mt-0 mt-8'>
          <div className='flex flex-col'>
            <div className='text-neutral-60 text-desktop-description font-bold'>Resources</div>
            <div className='mt-[12px]'>
              <div className='text-neutral-60 text-desktop-description'>Media kit</div>
              <div className='text-neutral-60 text-desktop-description'>Docs</div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='text-neutral-60 text-desktop-description  font-bold'>Contact</div>
            <div className='mt-[12px]'>
              <div className='text-neutral-60 text-desktop-description'>minedfi@proton.me</div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center md:items-start flex-col md:flex-row justify-between w-full'>
        <div className='text-neutral-60 text-desktop-description'>
          Mined.fi. All right reserved. &copy; 2024
        </div>
        <div className='text-neutral-60 text-desktop-description flex md:mt-0 mt-2'>
          <div className='text-neutral-60 text-desktop-description'>Follow us on:</div>
          <div className='space-x-[12px] flex ml-[8px]'>
            <div>
              <Image src='/assets/images/icons/x.svg' alt='X' width={16} height={16} />
            </div>
            <div>
              <Image
                src='/assets/images/icons/linkedin.svg'
                alt='Linkedin'
                width={16}
                height={16}
              />
            </div>
            <div>
              <Image
                src='/assets/images/icons/telegram.svg'
                alt='Telegram'
                width={16}
                height={16}
              />
            </div>
            <div>
              <Image src='/assets/images/icons/medium.svg' alt='Medium' width={16} height={16} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
