import { useState, useRef, TouchEvent } from 'react'
import { CardItem } from '../CardItem/CardItem'
import React from 'react'

export const StakingCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  const minSwipeDistance = 50

  const slides = [
    {
      number: '1',
      description: 'Stake your assets on your terms with flexible vesting periods.'
    },
    {
      number: '2',
      description: 'Receive Liquid Mining Tokens (LMTs) in return (e.g., sALPH, sKAS, sBTC).'
    },
    {
      number: '3',
      description:
        'Watch your allocation grow and monitor your staking performance with full visibility and real-time insights.'
    }
  ]

  const nextSlide = () => {
    setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    autoPlayRef.current = setInterval(() => {
      nextSlide()
    }, 3000)
  }

  React.useEffect(() => {
    resetAutoPlay()
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [])

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
    <div
      className='relative w-full max-w-2xl mx-auto flex justify-center items-center'
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}>
      <div className='absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10'></div>

      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-1000 ease-in-out'
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className='w-full flex-shrink-0 flex justify-center'>
              <CardItem number={slide.number} description={slide.description} />
            </div>
          ))}
        </div>
      </div>
      <div className='absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10'></div>
    </div>
  )
}

export default StakingCarousel
