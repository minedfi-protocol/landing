'use client'
import React, { useEffect, useRef } from 'react'

export const ChartAnimation = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          try {
            videoRef.current.play()
          } catch (error) {
            console.log('Video play error:', error)
          }
        } else if (videoRef.current) {
          if (!videoRef.current.paused) {
            videoRef.current.pause()
          }
        }
      })
    }, options)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className='z-[1] flex flex-col items-center gap-6 bg-[#FFFCF9] p-0 lg:h-[287px] lg:w-[509px]'>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload='auto'
        className='h-full w-full object-cover'>
        <source src='/assets/about-animation.mp4' type='video/mp4' />
      </video>
    </div>
  )
}
