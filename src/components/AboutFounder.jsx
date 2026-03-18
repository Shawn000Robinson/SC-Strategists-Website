const pills = [
  'Navy Nuclear',
  'IBM Enterprise',
  'Software Engineering',
  'Fortune 100 Experience',
  'Collaborative Leadership',
  'AI Strategist',
]

export default function AboutFounder() {
  return (
    <section id="story" className="relative py-32 px-6 bg-[#dce6ef]">
      <div className="divider-gradient mb-0" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div>
            <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-4">
              Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f0f0f] tracking-tight mb-8 leading-tight">
              Built by Someone Who's Been in the Room.
            </h2>

            <div className="space-y-5 text-gray-500 text-base leading-relaxed">
              <p>
                Shawn Robinson has spent over three decades at the intersection of complex technology and
                enterprise growth. His expertise is rooted in the rigorous discipline of the Navy Nuclear
                Power program, forged during his time as a Software Engineer and Manager at IBM leading
                large teams across 38 Fortune 100 accounts, and sharpened over a 20-year career delivering
                mid-market and enterprise software solutions.
              </p>
              <p>
                He has successfully led complex software initiatives and delivered transformative technology
                solutions across healthcare, government, financial services, higher education, manufacturing,
                retail, and beyond. A true generalist who speaks the language of every industry. Today, he
                founded SC Strategists to bring that Fortune 500-level strategic execution directly to
                mid-market businesses.
              </p>
              <p className="font-medium text-[#0f0f0f]">
                Strategic instinct. Forward momentum. Absolute delivery.
              </p>
            </div>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {pills.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium text-gray-500 border border-black/10 bg-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Headshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 rounded-2xl border border-black/10 overflow-hidden shadow-sm">
              <img
                src="/headshot.jpg"
                alt="Shawn Robinson"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
