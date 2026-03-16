import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">

      {/* Animated geometric grid */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      {/* Radial gradient — pulls focus to center, fades grid at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(10,10,10,0) 0%, #0a0a0a 75%)',
        }}
      />

      {/* Accent glow bloom behind headline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(79,142,247,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">

        {/* Eyebrow label */}
        <div className="fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">
            AI Strategy Consulting
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up fade-up-delay-1 text-balance font-bold leading-[1.05] tracking-tight text-white mb-6">
          <span className="block text-5xl sm:text-6xl md:text-7xl">
            Yesterday's
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.70) 100%)',
            }}
          >
            Impossibilities.
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl mt-1">
            Today's Reality.
          </span>
        </h1>

        {/* Subhead */}
        <p className="fade-up fade-up-delay-2 text-balance text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
          We bridge the gap between vision and execution through disciplined
          discovery, strategic architecture, and accelerated delivery.
        </p>

        {/* CTAs */}
        <div className="fade-up fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#framework"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-sm font-semibold tracking-tight transition-all duration-200 hover:bg-accent/90 hover:gap-3 accent-glow"
            style={{ backgroundColor: '#4f8ef7' }}
          >
            Explore the Framework
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#story"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-white text-sm font-medium tracking-tight transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06]"
          >
            Our Story
          </a>
        </div>

        {/* Scroll hint */}
        <div className="fade-up fade-up-delay-4 mt-20 flex justify-center">
          <div className="flex flex-col items-center gap-2 opacity-30">
            <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
