export default function AboutFounder() {
  return (
    <section id="story" className="relative py-32 px-6 bg-surface-1/40">
      <div className="divider-gradient mb-0" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div>
            <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-4">
              About the Founder
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8 leading-tight">
              Built by Someone Who's Been in the Room.
            </h2>

            <div className="space-y-5 text-gray-400 text-base leading-relaxed">
              <p>
                Shawn Robinson has spent 20+ years at the intersection of technology
                and enterprise sales. Trained as a Navy nuclear machinist mate, forged
                at IBM leading 50+ engineers across 38 enterprise accounts, and proven
                in the field closing deals from $100K to $19M across healthcare,
                government, higher education, and financial services.
              </p>
              <p>
                His instinct is strategic. His bias is forward. His standard is excellence.
              </p>
            </div>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['Navy Nuclear', 'IBM Enterprise', '$19M Deals', '20+ Years', 'AI-First'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium text-gray-400 border border-white/10 bg-white/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Headshot placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-64 h-72 rounded-2xl border border-white/10 bg-surface-2 overflow-hidden flex items-end justify-center"
            >
              {/* Placeholder gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(160deg, rgba(79,142,247,0.06) 0%, rgba(10,10,10,0.8) 100%)',
                }}
              />
              <p className="relative z-10 text-xs text-gray-600 pb-4 text-center px-4">
                Headshot coming soon
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
