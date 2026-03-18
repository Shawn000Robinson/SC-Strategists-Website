import { ArrowRight } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-white">

      {/* Final CTA band */}
      <div className="relative overflow-hidden bg-[#0f0f0f] px-6 py-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(26,58,92,0.35) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
            Let's Build Your AI Growth Engine.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Stop paying for software you don't use. Let's leverage pre-built platforms to design the exact
            strategic AI tools your business needs to scale, fast.
          </p>
          <a
            href="https://calendly.com/shawn-scstrategists/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-white text-sm font-semibold tracking-tight transition-all duration-200 hover:opacity-90 accent-glow"
          >
            Schedule a Strategy Call
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-black/[0.08]">
        <div className="max-w-6xl mx-auto px-6 py-14">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

            {/* Brand */}
            <div>
              <img src="/logo-full.svg" alt="SC Strategists" className="h-10 w-auto mb-3" />
              <p className="text-sm text-[#0f0f0f] font-semibold">SC Strategists LLC</p>
              <p className="text-sm text-gray-400 italic mt-1">Start Right.</p>
            </div>

            {/* Nav */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-1">Navigation</p>
              <a href="#framework" className="text-sm text-gray-500 hover:text-[#0f0f0f] transition-colors duration-150">The Framework</a>
              <a href="#solutions" className="text-sm text-gray-500 hover:text-[#0f0f0f] transition-colors duration-150">Solutions</a>
              <a href="#tech" className="text-sm text-gray-500 hover:text-[#0f0f0f] transition-colors duration-150">Technology Stack</a>
              <a href="#story" className="text-sm text-gray-500 hover:text-[#0f0f0f] transition-colors duration-150">Our Story</a>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-1">Contact</p>
              <a
                href="mailto:hello@scstrategists.com"
                className="text-sm text-gray-500 hover:text-[#0f0f0f] transition-colors duration-150"
              >
                hello@scstrategists.com
              </a>
            </div>

          </div>

          <div className="divider-gradient mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-400">
              &copy; {year} SC Strategists LLC. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 italic">
              Yesterday's Impossibilities. Today's Reality.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
