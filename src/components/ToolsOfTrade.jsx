import { Rocket, LayoutGrid, GitBranch } from 'lucide-react'

const pillars = [
  {
    icon: Rocket,
    name: 'Foundational Acceleration',
    tagline: 'No multi-year builds',
    description:
      "You don't have time for multi-year builds. We deploy proven enablement platforms that handle the core architecture, allowing us to focus purely on customizing the specific features that make your business unique.",
  },
  {
    icon: LayoutGrid,
    name: 'Structured Transparency',
    tagline: 'Every engagement, fully documented',
    description:
      'Every engagement is fully documented. Tasks, timelines, client deliverables, and decisions are logged in real-time. No ambiguity. No surprises.',
  },
  {
    icon: GitBranch,
    name: 'Knowledge Architecture',
    tagline: 'Context that compounds',
    description:
      'We maintain living context for every engagement — connecting people, opportunities, and decisions into a coherent strategic picture that gets sharper over time.',
  },
]

export default function ToolsOfTrade() {
  return (
    <section className="relative py-32 px-6 bg-[#f2f4f4]">
      <div className="divider-gradient mb-0" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-4">
            Delivery Excellence
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f0f0f] tracking-tight mb-4">
            Process Is a Competitive Advantage.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Strategic discipline isn't overhead. It's the difference between a project that delivers and one that drifts.
          </p>
        </div>

        {/* Section image */}
        <div className="rounded-2xl overflow-hidden border border-black/[0.08] mb-10">
          <img src="/process.jpg" alt="Process Is a Competitive Advantage" className="w-full h-auto block" />
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, name, tagline, description }) => (
            <div
              key={name}
              className="card-hover rounded-xl border border-black/[0.08] bg-white p-8"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 mb-5">
                <Icon size={18} className="text-accent" />
              </div>
              <h3 className="text-base font-bold text-[#0f0f0f] tracking-tight mb-1">{name}</h3>
              <p className="text-xs text-gray-400 mb-4">{tagline}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
