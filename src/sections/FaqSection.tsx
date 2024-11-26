import { FAQItem } from '@/components/FAQItem/FAQItem'
import React from 'react'

export const FaqSection = () => {
  const faqData = [
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
    },
    {
      question: 'Mocked question?',
      answer: 'Mocked answer for question on lading page.'
    },
    {
      question: 'Mocked question?',
      answer: 'Mocked answer for question on lading page.'
    },
    {
      question: 'Mocked question?',
      answer: 'Mocked answer for question on lading page.'
    },
    {
      question: 'Mocked question?',
      answer: 'Mocked answer for question on lading page.'
    }
  ]

  return (
    <section className='flex w-full flex-col items-center bg-[#FFFCF9] px-4 py-12 lg:px-[80px] lg:py-[96px]'>
      <div>
        <h2 className='mt-[12px] text-center text-mobile-h2 text-neutral-60 lg:w-[800px] lg:text-desktop-h2'>
          Frequently asked questions
        </h2>
        <p className='mt-2 text-center text-mobile-subtitle text-neutral-40 lg:mt-[20px] lg:w-[800px] lg:text-desktop-subtitle'>
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div className='lg:mt-12'>
        {faqData.map((faq, index) => (
          <FAQItem index={index} key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}
