import { HeartPulse, Cpu, ShoppingCart, DollarSign } from 'lucide-react'

const industries = [
  {
    icon: HeartPulse,
    industry: 'Healthcare',
    image: '/nurse-headshot.jpg',
    metrics: [
      { stat: '40%', label: 'reduction in admin costs' },
      { stat: '3×', label: 'faster patient query response' },
    ],
  },
  {
    icon: Cpu,
    industry: 'SaaS & Tech',
    image: '/saas-tech-headshot.jpg',
    metrics: [
      { stat: '2×', label: 'faster lead qualification' },
      { stat: '70%', label: 'fewer manual sales tasks' },
    ],
  },
  {
    icon: ShoppingCart,
    industry: 'E-Commerce',
    image: '/ecommerce-headshot.avif',
    metrics: [
      { stat: '25%', label: 'higher conversion rates' },
      { stat: '$30K/mo', label: 'savings in support ops' },
    ],
  },
  {
    icon: DollarSign,
    industry: 'Financial Services',
    image: '/financial-headshot.avif',
    metrics: [
      { stat: '35%', label: 'higher CSAT scores' },
      { stat: '60%', label: 'faster compliance workflows' },
    ],
  },
]

export default function ProofROI() {
  return (
    <section className="relative py-32 px-6 bg-[#e4eaec] overflow-hidden">
      <div className="divider-gradient" />

      <div className="max-w-6xl mx-auto pt-16">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-4">
            Measurable Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f0f0f] tracking-tight mb-4">
            Strategic AI That Drives Growth.
          </h2>
        </div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map(({ icon: Icon, industry, image, metrics }) => (
            <div
              key={industry}
              className="card-hover rounded-xl border border-black/[0.08] bg-[#fafafa] overflow-hidden"
            >
              {/* Image (if present) */}
              {image && (
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={image}
                    alt={industry}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-7">
                {!image && (
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 mb-5">
                    <Icon size={16} className="text-accent" />
                  </div>
                )}
                <p className="text-sm font-bold text-[#0f0f0f] tracking-tight mb-5">{industry}</p>
                <div className="space-y-4">
                  {metrics.map(({ stat, label }) => (
                    <div key={label}>
                      <p className="text-2xl font-black text-accent leading-none mb-1">{stat}</p>
                      <p className="text-xs text-gray-500 leading-snug">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
