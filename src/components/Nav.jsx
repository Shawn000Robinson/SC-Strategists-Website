import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-black/[0.08]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-2.5 select-none" aria-label="SC Strategists home">
          <img src="/logo-full.svg" alt="SC Strategists" className="h-10 w-auto" />
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          <a href="#framework" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#0f0f0f] rounded-md transition-colors duration-150 hover:bg-black/[0.04]">
            The Framework
          </a>
          <a href="#solutions" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#0f0f0f] rounded-md transition-colors duration-150 hover:bg-black/[0.04]">
            Solutions
          </a>
          <a href="#tech" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#0f0f0f] rounded-md transition-colors duration-150 hover:bg-black/[0.04]">
            Technology Stack
          </a>
          <a href="#story" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-[#0f0f0f] rounded-md transition-colors duration-150 hover:bg-black/[0.04]">
            Our Story
          </a>
        </div>

        {/* CTA */}
        <a
          href="https://calendly.com/shawn-scstrategists/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold tracking-tight transition-all duration-200 hover:opacity-90 accent-glow"
        >
          Book Your Strategy Call
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </nav>
  )
}
