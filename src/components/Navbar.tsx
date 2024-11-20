'use client'
import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className='box-border fixed left-0 top-0 z-50 flex h-20 w-full flex-col items-center justify-center bg-neutral-10 px-4 lg:px-[140px]'>
      <div className='flex h-12 w-full max-w-[1160px] flex-row items-center justify-between gap-8 p-0'>
        {/* Logo */}
        <div className='flex h-6 w-[119px] flex-row items-start gap-1'>
          <div className='flex h-6 w-[119px] flex-row items-center gap-1'>
            <Image src='/assets/images/logo.svg' alt='Logo' width={119} height={24} />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex h-12 w-[427px] flex-row items-center gap-8 rounded-[80px] px-6'>
          {/* Features Menu Item */}
          <div className='flex h-5 w-[82px] flex-row items-center gap-1'>
            <span className='text-sm text-neutral-60'>Features</span>
            <ChevronDown className='h-[18px] w-[18px] text-[#625A52]' />
          </div>

          {/* Integrations Menu Item */}
          <div className='flex h-5 w-[105px] flex-row items-center gap-1'>
            <span className='text-sm text-neutral-60'>Integrations</span>
            <ChevronDown className='h-[18px] w-[18px] text-[#625A52]' />
          </div>

          {/* MineDAO Menu Item */}
          <div className='flex h-5 w-[62px] flex-row items-center'>
            <span className='text-sm text-neutral-60'>MineDAO</span>
          </div>

          {/* Docs Menu Item */}
          <div className='flex h-5 w-[34px] flex-row items-center'>
            <span className='text-sm text-neutral-60'>Docs</span>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className='hidden lg:flex h-12 w-[264px] flex-row items-center justify-center gap-4'>
          <button className='flex h-12 w-[110px] flex-row items-center justify-center rounded-[80px] border border-solid border-[#BFB8B0] px-5 py-3'>
            <span className='text-sm font-medium leading-[120%] tracking-[-0.005em] text-neutral-80'>
              Contact
            </span>
          </button>

          <button className='flex h-12 w-[138px] flex-row items-center justify-center rounded-[80px] bg-neutral-80 px-5 py-3'>
            <span className='text-sm font-medium leading-[120%] tracking-[-0.005em] text-neutral-10'>
              Join waitlist
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className='lg:hidden p-2' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <X className='h-6 w-6 text-[#180F08]' />
          ) : (
            <Menu className='h-6 w-6 text-[#180F08]' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='lg:hidden absolute top-20 left-0 w-full bg-neutral-10 border-t border-[#BFB8B0]'>
          <div className='flex flex-col p-4 gap-4'>
            {/* Mobile Menu Items */}
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-neutral-60'>Features</span>
                <ChevronDown className='h-[18px] w-[18px] text-[#625A52]' />
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-neutral-60'>Integrations</span>
                <ChevronDown className='h-[18px] w-[18px] text-[#625A52]' />
              </div>
              <div className='flex items-center'>
                <span className='text-sm text-neutral-60'>MineDAO</span>
              </div>
              <div className='flex items-center'>
                <span className='text-sm text-neutral-60'>Docs</span>
              </div>
            </div>

            {/* Mobile Buttons */}
            <div className='flex flex-col gap-4 pt-4 border-t border-[#BFB8B0]'>
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
