import { Database, BookOpen } from 'lucide-react'

const tools = [
  {
    icon: Database,
    name: 'Notion',
    tagline: 'Data-driven project tracking',
    description:
      'Every engagement runs on structured databases — tasks, timelines, client deliverables, and decisions logged in real time. No ambiguity. Full transparency.',
  },
  {
    icon: BookOpen,
    name: 'Obsidian',
    tagline: 'Knowledge architecture',
    description:
      'A living second brain connecting people, opportunities, and institutional knowledge. The relationships between ideas surface as naturally as the ideas themselves.',
  },
]

export default function ToolsOfTrade() {
  return (
    <section className="relative py-32 px-6">
      <div className="divider-gradient mb-0" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-4">
            Tools of the Trade
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Process Is a Competitive Advantage.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            The tools we choose reflect the discipline we bring to every engagement.
          </p>
        </div>

        {/* Tool cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {tools.map(({ icon: Icon, name, tagline, description }) => (
            <div
              key={name}
              className="card-hover rounded-xl border border-border bg-surface-1 p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 border border-accent/20">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-base font-bold text-white tracking-tight">{name}</p>
                  <p className="text-xs text-gray-500">{tagline}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
