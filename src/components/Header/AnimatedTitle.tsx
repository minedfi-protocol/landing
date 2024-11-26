'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const AnimatedTitle = () => {
  const content = [
    {
      title: 'Redefining Mining',
      desc: 'Democratizing mining while fueling a sustainable future.'
    },
    {
      title: 'Mining made liquid',
      desc: 'Democratizing mining while fueling a sustainable future.'
    }
  ]

  const [index, setIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setIndex(prev => (prev + 1) % content.length)
        setIsAnimating(false)
      }, 2000)
    }, 4000)

    return () => clearInterval(interval)
  }, [content.length])
  console.log('index', index)
  console.log('isAnimating', isAnimating)
  return (
    <motion.div className='flex flex-col items-center justify-center'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 0 : 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className='bg-gradient-to-r from-[#180F08] to-[#5D544D] bg-clip-text p-4 text-center text-mobile-h1 text-transparent md:text-desktop-h1'>
        {content[index].title}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating && index === content.length - 1 ? 0 : 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className='mt-[24px] text-center text-mobile-subtitle text-neutral-40 md:text-desktop-subtitle'>
        {content[index].desc}
      </motion.h2>
    </motion.div>
  )
}
