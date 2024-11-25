import React from 'react'

interface AboutCardItemProps {
  number: string
  description: string
}

export const AboutCardItem: React.FC<AboutCardItemProps> = ({ description, number }) => {
  return (
    <div className='bg-[#F5F2EF] max-w-[346px] px-[48px] py-[16px] rounded-[20px] h-fit flex items-center justify-center flex-col'>
      <div className='text-neutral-40 text-center text-desktop-body-s border border-neutral-60 w-[40px] h-[40px] py-[8px] px-[5px] rounded-full border-solid'>
        {number}
      </div>
      <div className='mt-[8px] text-neutral-40 text-desktop-body-s text-center'>{description}</div>
    </div>
  )
}
