import { Search, Map, Zap } from 'lucide-react'

const steps = [
  {
    icon: Search,
    label: 'S C O P E',
    title: 'Scope',
    description:
      'Discovery, requirements gathering, and right-sizing. We establish clarity before a single line of code is written — because undefined problems produce predictable failures.',
    number: '01',
  },
  {
    icon: Map,
    label: 'S T R A T E G Y',
    title: 'Strategy',
    description:
      'Due diligence and architecture planning. We pressure-test assumptions, evaluate build vs. buy, and design a roadmap that aligns technical decisions with business outcomes.',
    number: '02',
  },
  {
    icon: Zap,
    label: 'C R E A T E',
    title: 'Create',
    description:
      'Accelerated execution and custom development. With scope locked and strategy set, we move fast — connecting clients to the right partners and cutting the time from vision to value.',
    number: '03',
  },
]

export default function Framework() {
  return (
    <section id="framework" className="relative py-32 px-6">
      <div className="divider-gradient mb-0" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-4">
            The SC Framework
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            A Philosophy, Not Just a Process
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Three disciplines. One standard. Start Right.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map(({ icon: Icon, label, title, description, number }) => (
            <div
              key={title}
              className="card-hover relative rounded-xl border border-border bg-surface-1 p-8 overflow-hidden"
            >
              {/* Large background number */}
              <span
                className="absolute top-5 right-6 text-7xl font-black text-white/[0.03] select-none pointer-events-none leading-none"
              >
                {number}
              </span>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 mb-5">
                <Icon size={18} className="text-accent" />
              </div>

              {/* Eyebrow */}
              <p className="text-[10px] font-semibold text-gray-500 tracking-[0.2em] mb-2">
                {label}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                {title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
