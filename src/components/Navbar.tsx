import React from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
export const Navbar = () => {
  return (
    <nav className='box-border absolute left-0 top-0 flex h-20 w-full flex-col items-center justify-center bg-[#FFFCF9] px-[140px]'>
      <div className='flex h-12 w-[1160px] flex-row items-center justify-between gap-8 p-0'>
        {/* Logo */}
        <div className='flex h-6 w-[119px] flex-row items-start gap-1'>
          <div className='flex h-6 w-[119px] flex-row items-center gap-1'>
            <Image src='/assets/images/logo.svg' alt='Logo' width={119} height={24} />
          </div>
        </div>

        {/* Menu List */}
        <div className='flex h-12 w-[427px] flex-row items-center gap-8 rounded-[80px] px-6'>
          {/* Features Menu Item */}
          <div className='flex h-5 w-[82px] flex-row items-center gap-1'>
            <span className=' text-sm text-[#2B231C]'>Features</span>
            <ChevronDown className='h-[18px] w-[18px] text-[#625A52]' />
          </div>

          {/* Integrations Menu Item */}
          <div className='flex h-5 w-[105px] flex-row items-center gap-1'>
            <span className=' text-sm text-[#2B231C]'>Integrations</span>
            <ChevronDown className='h-[18px] w-[18px] text-[#625A52]' />
          </div>

          {/* MineDAO Menu Item */}
          <div className='flex h-5 w-[62px] flex-row items-center'>
            <span className=' text-sm text-[#2B231C]'>MineDAO</span>
          </div>

          {/* Docs Menu Item */}
          <div className='flex h-5 w-[34px] flex-row items-center'>
            <span className=' text-sm text-[#2B231C]'>Docs</span>
          </div>
        </div>

        <div className='flex h-12 w-[264px] flex-row items-center justify-center gap-4'>
          <button className='flex h-12 w-[110px] flex-row items-center justify-center rounded-[80px] border-solid border border-[#BFB8B0] px-5 py-3'>
            <span className='text-sm font-medium leading-[120%] tracking-[-0.005em] text-[#180F08]'>
              Contact
            </span>
          </button>

          <button className='flex h-12 w-[138px] flex-row items-center justify-center rounded-[80px] bg-[#180F08] px-5 py-3'>
            <span className=' text-sm font-medium leading-[120%] tracking-[-0.005em] text-[#FFF9F2]'>
              Join waitlist
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
