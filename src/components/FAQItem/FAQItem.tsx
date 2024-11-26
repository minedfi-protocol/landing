'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
  index: number | string
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=''>
      {index !== 0 && <div className='h-[1px] w-full bg-neutral-20' />}
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer pb-8 pt-6'>
        <div className='flex items-center justify-between'>
          <h3 className='text-mobile-title-s font-medium lg:text-desktop-label'>{question}</h3>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}>
            <Image
              src={
                isOpen
                  ? '/assets/images/FAQ/minus-circle.svg'
                  : '/assets/images/FAQ/plus-circle.svg'
              }
              alt={isOpen ? 'minus' : 'plus'}
              width={24}
              height={24}
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          className='overflow-hidden'>
          <p className='lg:text-desktop-h5 mt-2 text-mobile-description text-neutral-40'>
            {answer}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
