'use client'
import { useState, useRef, TouchEvent } from 'react'
import React from 'react'
import Image from 'next/image'

interface CarouselProps {
  children: React.ReactNode
  autoPlay?: boolean
  showButtons?: boolean
  showGradient?: boolean
  interval?: number
}

export const Carousel = ({
  children,
  autoPlay = true,
  showButtons = true,
  showGradient = true,
  interval = 3000
}: CarouselProps) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout>()
  const sliderRef = useRef<HTMLDivElement>(null)
  const childrenArray = React.Children.toArray(children)

  const minSwipeDistance = 50

  const nextSlide = () => {
    setActiveSlide(prev => (prev === childrenArray.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide(prev => (prev === 0 ? childrenArray.length - 1 : prev - 1))
  }

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, interval)
    }
  }

  React.useEffect(() => {
    if (autoPlay) {
      resetAutoPlay()
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [autoPlay, interval])

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        nextSlide()
      } else {
        prevSlide()
      }
      resetAutoPlay()
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = x - startX
    const slideWidth = sliderRef.current.clientWidth
    const walkThreshold = slideWidth / 4

    if (Math.abs(walk) >= walkThreshold) {
      if (walk > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
      resetAutoPlay()
      setIsDragging(false)
    }
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <div className='relative w-full overflow-hidden'>
      <div
        ref={sliderRef}
        className='relative mx-auto flex w-full max-w-2xl cursor-grab flex-col items-center justify-center active:cursor-grabbing'
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
        {showGradient && (
          <div className='absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-neutral-10 to-transparent' />
        )}

        <div className='overflow-hidden'>
          <div
            className='flex transition-transform duration-1000 ease-in-out'
            style={{
              transform: `translateX(-${activeSlide * 100}%)`,
              pointerEvents: isDragging ? 'none' : 'auto'
            }}>
            {childrenArray.map((child, index) => (
              <div key={index} className='flex w-full flex-shrink-0 justify-center'>
                {child}
              </div>
            ))}
          </div>
        </div>
        {showButtons && (
          <div className='mt-[14px] flex space-x-3 p-2'>
            <button
              onClick={() => {
                prevSlide()
                resetAutoPlay()
              }}
              className='z-20 flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-full bg-neutral-20 p-2 transition-colors hover:bg-green-10'>
              <Image
                src='/assets/images/button-arrow-black.svg'
                alt='left'
                width={24}
                height={24}
                className='rotate-180'
              />
            </button>

            <button
              onClick={() => {
                nextSlide()
                resetAutoPlay()
              }}
              className='z-20 flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-full bg-neutral-80 p-2 transition-colors hover:bg-neutral-60'>
              <Image src='/assets/images/button-arrow.svg' alt='left' width={24} height={24} />
            </button>
          </div>
        )}

        {showGradient && (
          <div className='absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-neutral-10 to-transparent' />
        )}
      </div>
    </div>
  )
}

export default Carousel
