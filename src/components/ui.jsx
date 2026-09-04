/**
 * Shared visual primitives. The orb + grid ambience, the pill badge, the
 * section heading with the brand divider, and the closing CTA band are all
 * lifted from the production bundle so every page reads as one site.
 */

/** Three blurred gradient orbs plus a 1px grid — the dark-section ambience. */
export function Ambience({
  orbs = [
    'from-blue-500/30 to-purple-600/20',
    'from-cyan-500/20 to-blue-600/30',
    'from-indigo-500/20 to-violet-600/10',
  ],
  grid = true,
}) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        className={`absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br ${orbs[0]} rounded-full blur-[120px] animate-pulse`}
      />
      <div
        className={`absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr ${orbs[1]} rounded-full blur-[100px] animate-pulse`}
        style={{ animationDelay: '2s' }}
      />
      <div
        className={`absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-gradient-to-br ${orbs[2]} rounded-full blur-[80px] animate-pulse`}
        style={{ animationDelay: '1s' }}
      />
      {grid && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      )}
    </div>
  )
}

/** Small pill used above headlines. `tone` switches light-on-dark vs dark-on-light. */
export function Badge({ icon: Icon, children, tone = 'dark', className = '' }) {
  const tones = {
    dark: 'bg-white/10 text-white border-white/20 backdrop-blur-sm',
    light: 'bg-[#3557C1]/10 text-[#3557C1] border-[#3557C1]/20',
    loopy:
      'bg-[#6C84D9]/15 text-[#A9B8EC] border-[#6C84D9]/30 backdrop-blur-sm',
  }
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${tones[tone]} ${className}`}
    >
      {Icon && <Icon size={16} />}
      {children}
    </span>
  )
}

/** Centred section heading with the 100x4 brand divider underneath. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  align = 'center',
}) {
  const isDark = tone === 'dark'
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-3xl ${alignment} mb-14`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.18em] mb-4 ${
            isDark ? 'text-blue-300' : 'text-[#3557C1]'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`section-divider pb-6 text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight ${
          isDark ? 'text-white' : 'text-gray-900'
        } ${align === 'left' ? '[&::after]:left-0 [&::after]:translate-x-0' : ''}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-base md:text-lg leading-relaxed ${
            isDark ? 'text-blue-100/70' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

/** Solid brand button. */
export function PrimaryButton({ as = 'a', className = '', children, ...rest }) {
  const Tag = as
  return (
    <Tag
      className={`btn-primary group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3557C1] to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(53,87,193,0.45)] hover:-translate-y-1 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Glass button for dark surfaces. */
export function GhostButton({ as = 'a', className = '', children, ...rest }) {
  const Tag = as
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Closing call-to-action band. */
export function CTABand({
  title,
  subtitle,
  primary,
  secondary,
  gradient = 'from-[#0a1628] via-[#162a50] to-[#1e3a6e]',
  orbs,
}) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} text-white`}
    >
      <Ambience orbs={orbs} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-6 text-base md:text-lg text-blue-100/75 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {primary}
          {secondary}
        </div>
      </div>
    </section>
  )
}
