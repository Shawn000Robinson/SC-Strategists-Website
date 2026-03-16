import { useState, useEffect } from 'react'

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
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 select-none"
          aria-label="SC Strategists home"
        >
          <div className="w-7 h-7 rounded-[5px] bg-accent/20 border border-accent/30 flex items-center justify-center">
            <span className="text-[10px] font-bold text-accent tracking-tight leading-none">SC</span>
          </div>
          <span className="text-sm font-semibold text-white tracking-tight">
            SC Strategists
          </span>
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          <a
            href="#framework"
            className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-md transition-colors duration-150 hover:bg-white/[0.04]"
          >
            The Framework
          </a>
          <a
            href="#story"
            className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-md transition-colors duration-150 hover:bg-white/[0.04]"
          >
            Our Story
          </a>
        </div>
      </div>
    </nav>
  )
}
