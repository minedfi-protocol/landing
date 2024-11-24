import React from 'react'
interface PartnersCardItemProps {
  title: string
  logos: React.ReactNode
}
export const PartnersCardItem: React.FC<PartnersCardItemProps> = ({ logos, title }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-desktop-title-s'>{title}</p>
      <div className='mt-[24px]'>{logos}</div>
    </div>
  )
}
