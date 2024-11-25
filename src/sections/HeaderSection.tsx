import Image from 'next/image'

export const HeaderSection = () => {
  return (
    <section className='relative flex flex-col items-center gap-16 w-[calc(100%-40px)] bg-transparent mx-auto overflow-hidden rounded-3xl'>
      <div className='absolute -inset-1 z-0 '>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='w-full h-full object-cover md:object-center bg-transparent'>
          <source src='/assets/drop.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='relative z-10 w-full'>
        <div className='absolute top-5 md:-top-5 -left-0 w-[200px] md:w-[298px] h-[100px] md:h-[146px] bg-apy_mobile md:bg-apy bg-cover bg-center' />
        <div className='absolute top-5 md:-top-5 -right-0 w-[200px] md:w-[298px] h-[100px] md:h-[146px] bg-tvl_mobile md:bg-tvl bg-cover bg-center' />
        <div className='absolute bottom-8 -left-0 w-[200px] md:w-[340px] h-[100px] md:h-[146px] bg-hash_mobile md:bg-hashrate bg-cover bg-center' />
        <div className='absolute bottom-8 -right-0 w-[200px] md:w-[340px] h-[100px] md:h-[146px] bg-energy_mobile md:bg-energy bg-cover bg-center' />

        <div className='w-full min-h-[686px] bg-transparent flex flex-col items-center justify-center'>
          <h1 className='text-mobile-h1 text-center md:text-desktop-h1 bg-gradient-to-r p-4 from-[#180F08] to-[#5D544D] bg-clip-text text-transparent'>
            Redefining Mining
          </h1>
          <h1 className='text-mobile-subtitle text-center md:text-desktop-subtitle mt-[24px] text-neutral-40'>
            Democratizing mining while fueling a sustainable future.
          </h1>
          <button className='bg-neutral-80 rounded-[80px] px-[20px] py-[18px] text-desktop-label text-neutral-10 mt-[56px] md:mt-[46px] flex justify-center items-center'>
            Join waitlist
            <Image
              src={'/assets/images/button-arrow.svg'}
              alt='Right arrow'
              width={22}
              height={16}
              className='ml-[8px]'
            />
          </button>
        </div>
      </div>
    </section>
  )
}
