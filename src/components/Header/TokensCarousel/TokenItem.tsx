import Image from 'next/image'

interface TokenItemProps {
  img: string
  name: string
}

export const TokenItem: React.FC<TokenItemProps> = ({ img, name }) => {
  return (
    <div className='bg-light-gray-2 mr-4 flex items-center rounded-3xl lg:mr-6'>
      <Image src={img} alt={name} width={32} height={32} className='m-2' />
      <span className='py-2 pr-4'>{name}</span>
    </div>
  )
}
