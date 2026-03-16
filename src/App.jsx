import Nav from './components/Nav'
import Hero from './components/Hero'
import Framework from './components/Framework'
import PartnerNetwork from './components/PartnerNetwork'
import AboutFounder from './components/AboutFounder'
import ToolsOfTrade from './components/ToolsOfTrade'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Nav />
      <main>
        <Hero />
        <Framework />
        <PartnerNetwork />
        <AboutFounder />
        <ToolsOfTrade />
      </main>
      <Footer />
    </div>
  )
}
