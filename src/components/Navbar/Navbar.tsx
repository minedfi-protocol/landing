'use client'
import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { menuItems } from './config'

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className='z-50 box-border flex h-20 w-full flex-col items-center justify-center bg-neutral-10 px-4 lg:px-[140px]'>
      <div className='flex h-12 w-full max-w-[1160px] flex-row items-center justify-between gap-8 p-0'>
        <div className='flex h-6 w-[119px] flex-row items-start gap-1'>
          <div className='flex h-6 w-[119px] flex-row items-center gap-1'>
            <Image src='/assets/images/logo.svg' alt='Logo' width={119} height={24} />
          </div>
        </div>

        <div className='hidden h-12 w-[427px] flex-row items-center gap-8 rounded-[80px] px-6 lg:flex'>
          {menuItems.map(item => (
            <div
              key={item.label}
              className={`flex h-5 w-[${item.width}] flex-row items-center gap-1`}>
              <span className='text-sm text-neutral-60'>{item.label}</span>
              {item.hasDropdown && <ChevronDown className='h-[18px] w-[18px] text-[#625A52]' />}
            </div>
          ))}
        </div>

        <div className='hidden h-12 w-[264px] flex-row items-center justify-center gap-4 lg:flex'>
          <button className='flex h-12 w-[110px] cursor-pointer flex-row items-center justify-center rounded-[80px] border border-solid border-[#BFB8B0] px-5 py-3 transition-colors hover:bg-green-10'>
            <span className='text-sm font-medium leading-[120%] tracking-[-0.005em] text-neutral-80'>
              Contact
            </span>
          </button>

          <button className='flex h-12 w-[138px] cursor-pointer flex-row items-center justify-center rounded-[80px] bg-neutral-80 px-5 py-3 transition-colors hover:bg-neutral-60'>
            <span className='text-sm font-medium leading-[120%] tracking-[-0.005em] text-neutral-10'>
              Join waitlist
            </span>
          </button>
        </div>

        <button className='p-2 lg:hidden' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <X className='h-6 w-6 text-[#180F08]' />
          ) : (
            <Menu className='h-6 w-6 text-[#180F08]' />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className='absolute left-0 top-20 z-50 w-full border-t border-[#BFB8B0] bg-neutral-10 lg:hidden'>
          <div className='flex flex-col gap-4 p-4'>
            <div className='flex flex-col gap-4'>
              {menuItems.map(item => (
                <div
                  key={item.label}
                  className={`flex h-5 w-[${item.width}] flex-row items-center gap-1`}>
                  <span className='text-sm text-neutral-60'>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className='h-[18px] w-[18px] text-[#625A52]' />}
                </div>
              ))}
            </div>

            <div className='flex flex-col gap-4 border-t border-[#BFB8B0] pt-4'>
              <button className='flex h-12 w-full flex-row items-center justify-center rounded-[80px] border border-solid border-[#BFB8B0] px-5 py-3'>
                <span className='text-sm font-medium leading-[120%] tracking-[-0.005em] text-neutral-80'>
                  Contact
                </span>
              </button>

              <button className='flex h-12 w-full flex-row items-center justify-center rounded-[80px] bg-neutral-80 px-5 py-3'>
                <span className='text-sm font-medium leading-[120%] tracking-[-0.005em] text-neutral-10'>
                  Join waitlist
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
