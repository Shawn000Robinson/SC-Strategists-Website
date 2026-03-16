export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-[5px] bg-accent/20 border border-accent/30 flex items-center justify-center">
                <span className="text-[10px] font-bold text-accent tracking-tight leading-none">SC</span>
              </div>
              <span className="text-sm font-semibold text-white tracking-tight">SC Strategists LLC</span>
            </div>
            <p className="text-sm text-gray-500 italic">Start Right.</p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-1">Navigation</p>
            <a href="#framework" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">
              The Framework
            </a>
            <a href="#story" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">
              Our Story
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-1">Contact</p>
            <a
              href="mailto:hello@scstrategists.com"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
            >
              hello@scstrategists.com
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="divider-gradient mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            &copy; {year} SC Strategists LLC. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 italic">
            Yesterday's Impossibilities. Today's Reality.
          </p>
        </div>

      </div>
    </footer>
  )
}
