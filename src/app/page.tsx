import Navbar from '@/components/Navbar/Navbar'
import { About } from '@/sections/AboutSection'
import { HeaderSection } from '@/sections/HeaderSection'
export default function Home() {
  return (
    <div className='min-h-screen min-w-screen'>
      <Navbar />
      <HeaderSection />
      <About />
    </div>
  )
}
