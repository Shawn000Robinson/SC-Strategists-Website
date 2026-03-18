const partners = [
  {
    name: 'TrueMark.io',
    focus: 'AWS Cloud & AI Infrastructure',
    initials: 'TM',
  },
  {
    name: 'SolutionStream',
    focus: 'Enterprise Custom Development',
    initials: 'SS',
  },
  {
    name: 'Red Oak Development',
    focus: 'Agile / Boutique Build',
    initials: 'RO',
  },
  {
    name: 'SupportVectors',
    focus: 'AI/ML Training & Implementation',
    initials: 'SV',
  },
  {
    name: 'Appscrip',
    focus: 'Pre-built IP / Accelerated Delivery',
    initials: 'AS',
  },
]

export default function PartnerNetwork() {
  return (
    <section className="relative py-32 px-6">
      <div className="divider-gradient mb-0" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-4">
            Partner Network
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f0f0f] tracking-tight mb-4">
            A Curated Network. Not a Vendor List.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Every partner was selected for one reason — they make our clients succeed faster.
          </p>
        </div>

        {/* Partner cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map(({ name, focus, initials }) => (
            <div
              key={name}
              className="card-hover flex flex-col items-center text-center rounded-xl border border-black/[0.08] bg-white p-6 gap-4"
            >
              {/* Logo placeholder */}
              <div className="w-12 h-12 rounded-lg bg-gray-100 border border-black/[0.08] flex items-center justify-center">
                <span className="text-xs font-bold text-gray-400 tracking-tight">
                  {initials}
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#0f0f0f] tracking-tight mb-1">
                  {name}
                </p>
                <p className="text-xs text-gray-500 leading-snug">
                  {focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
