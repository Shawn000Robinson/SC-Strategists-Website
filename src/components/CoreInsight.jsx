const blocks = [
  {
    eyebrow: null,
    body: (
      <>
        Until recently, building custom, automated workflows was a luxury reserved for the Fortune 500.
        Everyone else was forced into the <strong className="text-[#0f0f0f]">"SaaS Trap"</strong>: paying
        massive fixed annual fees and per-user licenses for bloated software platforms where they only use
        10%–20% of the features.
      </>
    ),
    image: '/saas-trap.jpg?v=5',
    alt: 'The SaaS Trap',
    style: 'default',
  },
  {
    eyebrow: 'Our Strategic Philosophy',
    body: (
      <>
        If you use 90% of a platform's features, keep it. If you only use 15%, you are overpaying.
        As your AI strategists, we replace disconnected tools, unused licenses, and delayed pilots with
        custom-built AI.
      </>
    ),
    image: null,
    alt: 'Our Strategic Philosophy',
    style: 'accent',
  },
  {
    eyebrow: 'Custom Doesn\'t Mean Starting from Scratch',
    body: (
      <>
        We utilize enterprise-grade enablement platforms — pre-built foundational architectures — to handle
        the heavy lifting. We build exactly what you need without the bloat, without the lock-in, and without
        the per-seat penalties, while expediting your project across the finish line.
      </>
    ),
    image: '/custom-accelerated.jpg?v=4',
    alt: 'Custom and Accelerated',
    style: 'default',
  },
]

export default function CoreInsight() {
  return (
    <section className="relative py-32 px-6 bg-[#f2f4f4]">
      <div className="divider-gradient" />

      <div className="max-w-4xl mx-auto pt-16">
        {/* Eyebrow */}
        <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-4 text-center">
          The SaaS Trap
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0f0f0f] tracking-tight mb-12 text-center leading-tight">
          Stop Paying for Software You Don't Use.
        </h2>

        {/* Blocks */}
        <div className="space-y-6">
          {blocks.map(({ eyebrow, body, image, alt, style }, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden border ${
                style === 'accent'
                  ? 'border-accent/20 bg-accent/[0.03]'
                  : 'border-black/[0.08] bg-[#fafafa]'
              }`}
            >
              {/* Text */}
              <div className="px-8 pt-8 pb-6">
                {eyebrow && (
                  <p className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
                    style === 'accent' ? 'text-accent' : 'text-gray-400'
                  }`}>
                    {eyebrow}
                  </p>
                )}
                <p className={`text-base leading-relaxed ${
                  style === 'accent' ? 'text-[#0f0f0f] font-medium' : 'text-gray-600'
                }`}>
                  {body}
                </p>
              </div>

              {/* Image */}
              {image && (
                <div className={`border-t ${style === 'accent' ? 'border-accent/10' : 'border-black/[0.06]'}`}>
                  <img
                    src={image}
                    alt={alt}
                    className="w-full h-auto block"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
