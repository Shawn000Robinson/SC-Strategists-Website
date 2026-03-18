import { Brain, Puzzle, Building2, Bot } from 'lucide-react'

const capabilities = [
  {
    icon: Brain,
    title: 'AI Transformation',
    description:
      'Transform your entire organization with AI-powered workflows that unite sales, marketing, operations, and support into one cohesive, strategic growth machine.',
  },
  {
    icon: Puzzle,
    title: 'Enablement Platforms & Integration',
    description:
      'Stop starting from zero. We enhance your current CRM, ERP, or e-commerce platform using pre-built foundational components that accelerate enterprise-level delivery without requiring a rip-and-replace.',
  },
  {
    icon: Building2,
    title: 'Vertical AI',
    description:
      "Custom AI solutions strategically designed to navigate your industry's specific regulations, workflows, and competitive landscape.",
  },
  {
    icon: Bot,
    title: 'Ready-to-Deploy Agents',
    description:
      'Get live in weeks. From Sales Outreach and SEO Planning to Customer Support and Data Enrichment, we implement intelligent agents that do the heavy lifting instantly.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-32 px-6 bg-[#dce6ef]">
      <div className="divider-gradient mb-0" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-4">
            Built For Growth
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f0f0f] tracking-tight mb-4">
            How We Turn AI Challenges Into Strategic Wins
          </h2>
        </div>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden border border-black/[0.08] mb-10">
          <img src="/winning.jpg" alt="AI Challenges Into Strategic Wins" className="w-full h-auto block" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="card-hover rounded-xl border border-black/[0.08] bg-white p-8"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 mb-5">
                <Icon size={18} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-[#0f0f0f] tracking-tight mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
