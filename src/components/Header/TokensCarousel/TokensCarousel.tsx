'use client'
import { motion } from 'framer-motion'
import { TokenItem } from './TokenItem'

export const TokensCarousel = () => {
  const tokensData = [
    {
      img: '/assets/images/tokens/btc.svg',
      name: 'Bitcoin'
    },
    {
      img: '/assets/images/tokens/doge.svg',
      name: 'Doge'
    },
    {
      img: '/assets/images/tokens/ALPH.svg',
      name: 'Alephium'
    },
    {
      img: '/assets/images/tokens/ltc.svg',
      name: 'Litecoin'
    },
    {
      img: '/assets/images/tokens/kas.svg',
      name: 'Kaspa'
    },
    {
      img: '/assets/images/tokens/btc.svg',
      name: 'Bitcoin Cash'
    },
    {
      img: '/assets/images/tokens/skb.svg',
      name: 'Nervos Network'
    }
  ]

  const carouselItems = [...tokensData, ...tokensData, ...tokensData, ...tokensData]

  return (
    <div className='w-full overflow-hidden'>
      <motion.div
        className='my-4 flex w-max overflow-hidden lg:my-6 lg:mb-12'
        animate={{
          x: ['0%', '-50%']
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20
        }}>
        {carouselItems.map(token => (
          <TokenItem key={token.name} img={token.img} name={token.name} />
        ))}
      </motion.div>
    </div>
  )
}
