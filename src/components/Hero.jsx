import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa]">

      {/* Animated geometric grid */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      {/* Radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(250,250,250,0) 0%, #fafafa 75%)',
        }}
      />

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src="/logo-wordmark.svg"
          alt=""
          className="w-[520px] max-w-[70vw] opacity-[0.04] select-none"
          aria-hidden="true"
        />
      </div>

      {/* Accent glow bloom */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(43,170,170,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">

        {/* Eyebrow */}
        <div className="fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-black/[0.03] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium text-gray-500 tracking-widest uppercase">
            AI Strategy Consulting &amp; Custom Development
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up fade-up-delay-1 text-balance font-bold leading-[1.05] tracking-tight text-[#0f0f0f] mb-6">
          <span className="block text-5xl sm:text-6xl md:text-7xl">Yesterday's</span>
          <span
            className="block text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #0f0f0f 0%, rgba(15,15,15,0.55) 100%)' }}
          >
            Impossibilities.
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl mt-1">Today's Reality.</span>
        </h1>

        {/* Subhead */}
        <p className="fade-up fade-up-delay-2 text-balance text-lg sm:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto mb-12">
          You shouldn't have to change how you work to fit your software. We design AI around your business —
          built on proven platforms, deployed fast, and owned by you.
        </p>

        {/* CTAs */}
        <div className="fade-up fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:hello@scstrategists.com"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-sm font-semibold tracking-tight transition-all duration-200 hover:opacity-90 hover:gap-3 accent-glow"
          >
            Schedule a Strategy Call
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#framework"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-black/10 bg-black/[0.03] text-[#0f0f0f] text-sm font-medium tracking-tight transition-all duration-200 hover:border-black/20 hover:bg-black/[0.06]"
          >
            Explore the Framework
          </a>
        </div>

        {/* Scroll hint */}
        <div className="fade-up fade-up-delay-4 mt-20 flex justify-center">
          <div className="flex flex-col items-center gap-2 opacity-30">
            <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
