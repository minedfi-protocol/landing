import Navbar from '@/components/Navbar/Navbar'
import { About } from '@/sections/AboutSection'
import { Footer } from '@/sections/Footer'
import { HeaderSection } from '@/sections/HeaderSection'
import { PartnersSection } from '@/sections/PartnersSection'
import { StakersSection } from '@/sections/StakersSection'
import { TokenSection } from '@/sections/TokenSection'
export default function Home() {
  return (
    <div className='min-w-screen min-h-screen bg-neutral-10'>
      <HeaderSection />
      <About />
      <TokenSection />
      <StakersSection />
      <PartnersSection />
      <Footer />
    </div>
  )
}
