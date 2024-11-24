import { useState, useRef, TouchEvent } from 'react'
import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
  const autoPlayRef = useRef<NodeJS.Timeout>()
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

  return (
    <div className='relative w-full overflow-hidden'>
      <div
        className='relative w-full max-w-2xl mx-auto flex justify-center items-center flex-col'
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}>
        {showGradient && (
          <div className='absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10' />
        )}

        <div className='overflow-hidden'>
          <div
            className='flex transition-transform duration-1000 ease-in-out'
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {childrenArray.map((child, index) => (
              <div key={index} className='w-full flex-shrink-0 flex justify-center'>
                {child}
              </div>
            ))}
          </div>
        </div>
        {showButtons && (
          <div className='flex mt-[14px] space-x-3 p-2'>
            <button
              onClick={() => {
                prevSlide()
                resetAutoPlay()
              }}
              className='z-20 p-2 rounded-full w-[56px] h-[56px] bg-neutral-20 hover:bg-white transition-colors  flex justify-center items-center'>
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
              className='z-20 p-2 w-[56px] h-[56px] rounded-full bg-neutral-60  hover:bg-white transition-colors flex justify-center items-center'>
              <Image src='/assets/images/button-arrow.svg' alt='left' width={24} height={24} />
            </button>
          </div>
        )}

        {showGradient && (
          <div className='absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10' />
        )}
      </div>
    </div>
  )
}

export default Carousel
