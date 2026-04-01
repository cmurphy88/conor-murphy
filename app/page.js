import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import LogoBar from '@/components/sections/LogoBar'
import FeaturedWork from '@/components/sections/FeaturedWork'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import AboutBlogTeaser from '@/components/sections/AboutBlogTeaser'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        {/* Add this back in when there are more than one worked on */}
        {/* <LogoBar /> */}
        <FeaturedWork />
        <Process />
        <Testimonials />
        <AboutBlogTeaser />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
