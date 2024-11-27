'use client'
import { useEffect, useState } from 'react'

export const HeaderAnimation = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <video
      key={isMobile ? 'mobile' : 'desktop'}
      autoPlay
      muted
      loop
      playsInline
      className='h-full w-full bg-transparent object-cover md:object-center'>
      <source src={isMobile ? '/assets/drop-mobile.mp4' : '/assets/drop.mp4'} type='video/mp4' />
    </video>
  )
}
