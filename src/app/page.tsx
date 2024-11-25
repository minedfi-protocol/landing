import Navbar from '@/components/Navbar/Navbar'
import { About } from '@/sections/AboutSection'
import { HeaderSection } from '@/sections/HeaderSection'
import { StakersSection } from '@/sections/StakersSection'
import { TokenSection } from '@/sections/TokenSection'
export default function Home() {
  return (
    <div className='min-w-screen min-h-screen'>
      <HeaderSection />
      <About />
      <TokenSection />
      <StakersSection />
      <div className='h-svh bg-neutral-10' />
    </div>
  )
}
