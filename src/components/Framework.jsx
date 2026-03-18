import { Lightbulb, Map, Zap } from 'lucide-react'

const steps = [
  {
    icon: Lightbulb,
    title: 'Dream',
    number: '01',
    image: '/dream.jpg?v=2',
    description:
      'Strategic discovery, requirements gathering, and right-sizing. We start by listening. We capture your vision, audit your existing software spend, evaluate AI readiness, and establish absolute clarity before a single line of code is written.',
  },
  {
    icon: Map,
    title: 'Strategic Blueprint',
    number: '02',
    image: '/blueprint.jpg',
    description:
      'Due diligence and architecture planning. We pressure-test assumptions, map your ROI opportunities, and produce a documented plan. This blueprint aligns every technical decision and every build vs. buy evaluation directly with your strategic business outcomes.',
  },
  {
    icon: Zap,
    title: 'Create',
    number: '03',
    image: '/create.jpg',
    description:
      'Accelerated execution through pre-built foundations. With the blueprint locked, our team moves fast — often taking you from concept to live deployment in just 4 to 8 weeks. By utilizing proven enablement platforms and pre-built IP, we engineer, build, and deploy custom AI solutions that cut the time from vision to value.',
  },
]

export default function Framework() {
  return (
    <section id="framework" className="relative py-32 px-6 bg-[#e4eaec]">
      <div className="divider-gradient mb-0" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-4">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f0f0f] tracking-tight mb-4">
            A Philosophy, Not Just a Process.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Three disciplines. One standard. Start Right.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map(({ icon: Icon, title, description, number, image }) => (
            <div
              key={title}
              className="card-hover relative rounded-xl border border-black/[0.08] bg-white overflow-hidden flex flex-col"
            >
              {/* Text content */}
              <div className="relative p-8 flex-1">
                {/* Background number */}
                <span className="absolute top-5 right-6 text-7xl font-black text-black/[0.04] select-none pointer-events-none leading-none">
                  {number}
                </span>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 mb-5">
                  <Icon size={18} className="text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0f0f0f] tracking-tight mb-3">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Optional image */}
              {image && (
                <div className="border-t border-black/[0.06] h-48 overflow-hidden">
                  <img src={image} alt={title} className="w-full h-full object-cover object-center" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
