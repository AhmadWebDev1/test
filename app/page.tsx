import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import TravelMap from './components/TravelMap'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import DirectionWrapper from './components/DirectionWrapper'

export default function Home() {
  return (
    <DirectionWrapper>
      <main className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <TravelMap />
        <Gallery />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </DirectionWrapper>
  )
}