const SI = 'https://cdn.simpleicons.org'
const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

// icon: simple-icons slug (auto-colored via CDN)
// diIcon: devicons path (rendered white via CSS filter on dark bg)
const categories = [
  {
    label: 'Orchestration & Agents',
    techs: [
      { name: 'LangChain', icon: 'langchain' },
      { name: 'AutoGen' },
    ],
  },
  {
    label: 'Observability & Gateway',
    techs: [
      { name: 'Langfuse' },
      { name: 'Portkey' },
    ],
  },
  {
    label: 'Databases & Storage',
    techs: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Pinecone' },
      { name: 'Zep' },
    ],
  },
  {
    label: 'Models',
    techs: [
      { name: 'Claude', icon: 'anthropic' },
      { name: 'OpenAI' },
      { name: 'Gemini', icon: 'googlegemini' },
    ],
  },
  {
    label: 'Vector & Search',
    techs: [
      { name: 'Qdrant' },
      { name: 'Milvus' },
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    techs: [
      { name: 'AWS', diIcon: 'amazonwebservices/amazonwebservices-original' },
      { name: 'Azure', diIcon: 'azure/azure-original' },
      { name: 'Amazon Bedrock' },
    ],
  },
  {
    label: 'Frontend',
    techs: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    label: 'Backend & Runtimes',
    techs: [
      { name: 'Python', icon: 'python' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: '.NET', icon: 'dotnet' },
      { name: 'Java', diIcon: 'java/java-original' },
    ],
  },
  {
    label: 'Security & Compliance',
    techs: [
      { name: 'OAuth 2.0' },
      { name: 'SOC 2' },
      { name: 'HIPAA' },
      { name: 'Zero Trust' },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech" className="relative py-32 px-6 bg-[#0f0f0f]">
      <div className="divider-gradient" />

      <div className="max-w-6xl mx-auto pt-16">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-4">
            The Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Built on the World's Best Platforms.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We leverage industry-leading AI, cloud, and automation platforms to build secure, scalable solutions
            that plug directly into your environment — not replace it.
          </p>
        </div>

        {/* Category groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ label, techs }) => (
            <div
              key={label}
              className="card-hover rounded-xl border border-white/[0.08] bg-white/[0.04] p-6"
            >
              <p className="text-xs font-semibold text-gray-500 tracking-[0.15em] uppercase mb-4">
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {techs.map(({ name, icon, diIcon }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.08] border border-white/[0.06] text-sm font-medium text-gray-200"
                  >
                    {icon && (
                      <img
                        src={`${SI}/${icon}/d1d5db`}
                        alt={name}
                        className="w-4 h-4 flex-shrink-0"
                      />
                    )}
                    {diIcon && (
                      <img
                        src={`${DI}/${diIcon}.svg`}
                        alt={name}
                        className="w-4 h-4 flex-shrink-0 brightness-0 invert opacity-80"
                      />
                    )}
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
