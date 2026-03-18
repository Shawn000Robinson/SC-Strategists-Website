import Nav from './components/Nav'
import Hero from './components/Hero'
import CoreInsight from './components/CoreInsight'
import Framework from './components/Framework'
import ChallengeVsSolution from './components/ChallengeVsSolution'
import Solutions from './components/Solutions'
import ProofROI from './components/ProofROI'
import ToolsOfTrade from './components/ToolsOfTrade'
import TechStack from './components/TechStack'
import AboutFounder from './components/AboutFounder'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#0f0f0f]">
      <Nav />
      <main>
        <Hero />
        <CoreInsight />
        <Framework />
        <ChallengeVsSolution />
        <Solutions />
        <ProofROI />
        <ToolsOfTrade />
        <TechStack />
        <AboutFounder />
      </main>
      <Footer />
    </div>
  )
}
