export default function ChallengeVsSolution() {
  return (
    <section className="relative py-32 px-6 bg-[#f2f4f4]">
      <div className="divider-gradient" />

      <div className="max-w-5xl mx-auto pt-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-4">
            The SC Strategists Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f0f0f] tracking-tight mb-4 leading-tight">
            Built for Your Business.<br className="hidden sm:block" /> Not Built for Everyone.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Stop forcing your business to fit bloated software. Let's build strategic AI that fits your business.
          </p>
        </div>

        {/* Infographic image */}
        <div className="rounded-2xl overflow-hidden border border-black/[0.08] shadow-sm">
          <img
            src="/challenge-solution.jpg?v=3"
            alt="SC Strategists — Your Challenge vs Our Solution"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  )
}
