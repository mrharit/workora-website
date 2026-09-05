import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  ChevronDown,
  Clock,
  Compass,
  Handshake,
  IndianRupee,
  Lock,
  MapPin,
  MessageCircle,
  Percent,
  Quote,
  Scale,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import {
  Ambience,
  Badge,
  CTABand,
  GhostButton,
  PrimaryButton,
  SectionHeading,
} from '../components/ui.jsx'

const STATS = [
  { value: '8', suffix: '', label: 'Live CXO & technology mandates' },
  { value: '6', suffix: '', label: 'Sectors currently hiring' },
  { value: '45', suffix: ' days', label: 'Median search timeline' },
  { value: '100', suffix: '%', label: 'Mandates with a replacement guarantee' },
]

const APPROACH = [
  {
    icon: Lock,
    title: 'Confidential by default',
    body: 'Every mandate runs under NDA. Your current employer is never approached, and a client’s identity is disclosed only once you agree to proceed.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Target,
    title: 'Assessed beyond the resume',
    body: 'Structured leadership assessments for CXO mandates, technical deep-dives for technology mandates — never a single unstructured conversation deciding an offer.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Users,
    title: 'One consultant, start to finish',
    body: 'You speak to the person actually running the mandate, every time — not a rotating queue of coordinators relaying messages.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Market intelligence, not guesswork',
    body: 'Compensation benchmarks, org-design comparables and sector movement inform the brief before a single candidate is approached.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Scale,
    title: 'Fast, without cutting corners',
    body: 'A structured five-stage process that closes CXO mandates in a median of 45 days — against an industry average closer to four months.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Handshake,
    title: 'Built for retention, not just closure',
    body: 'Every placement carries a replacement guarantee. We are measured on whether you are still there in year two, not on the day you sign.',
    gradient: 'from-rose-500 to-red-600',
  },
]

const CANDIDATE_BENEFITS = [
  {
    icon: Lock,
    title: 'Confidentiality guaranteed',
    body: 'Your search stays private. We never approach your current employer or reveal your candidacy without explicit sign-off at each stage.',
  },
  {
    icon: IndianRupee,
    title: 'Compensation benchmarking',
    body: 'We benchmark your ask against real market data before you sit across the table, so you negotiate from fact, not a guess.',
  },
  {
    icon: Users,
    title: 'One point of contact',
    body: 'A single search consultant owns your mandate end to end — no handoffs, no repeating your story to five different people.',
  },
  {
    icon: MessageCircle,
    title: 'Transparent feedback',
    body: 'Real, specific feedback after every round — including the rounds that do not go your way.',
  },
  {
    icon: Clock,
    title: 'A process that moves',
    body: 'Our median CXO search closes in 45 days. We chase the client side of the process so you are not left waiting on silence.',
  },
  {
    icon: Target,
    title: 'Structured, not vibes-based',
    body: 'Leadership and technical assessments follow a consistent rubric across every mandate — not an unstructured conversation.',
  },
  {
    icon: Percent,
    title: 'Guided negotiation',
    body: 'We manage the back-and-forth on fixed versus variable, ESOPs and notice-period buyout, so you are not negotiating directly against your future boss.',
  },
  {
    icon: Handshake,
    title: 'A relationship past joining',
    body: 'We stay in touch well beyond your start date — many candidates come back to us when they are ready for the next mandate.',
  },
]

const ROLES = [
  {
    title: 'Chief Financial Officer',
    category: 'CXO',
    location: 'Mumbai',
    band: '₹1.2 – 1.8 Cr + ESOPs',
    seniority: '15+ years, at least 5 as CFO or deputy CFO',
    client: 'Confidential — Series C fintech, ~₹250 Cr ARR',
    summary:
      'Own the finance function for a fast-scaling lending fintech through its next fundraise and toward a public-market-ready structure.',
    responsibilities: [
      'Own fundraising strategy and investor relations through the Series D round',
      'Build out FP&A, treasury and financial-controls functions as the company scales past ₹250 Cr ARR',
      'Partner with the board on unit economics, burn discipline and the path to profitability',
      'Lead statutory, tax and regulatory compliance across every state the company lends in',
    ],
    requirements: [
      '15+ years in finance leadership, with at least 5 as CFO or deputy CFO',
      'Direct experience raising institutional capital at Series C or later',
      'NBFC or lending-fintech background strongly preferred',
      'Comfortable presenting to a board with institutional investors on it',
    ],
  },
  {
    title: 'Chief Technology Officer',
    category: 'CXO',
    location: 'Bengaluru',
    band: '₹1.5 – 2.2 Cr + ESOPs',
    seniority: '14+ years, 5+ leading an org of 80 or more',
    client: 'Confidential — D2C consumer-tech platform, Series D',
    summary:
      'Rebuild the technology roadmap and engineering culture as the company moves from a single monolith to a multi-team platform.',
    responsibilities: [
      'Rebuild the engineering roadmap around a multi-team platform, moving off the current monolith',
      'Grow and structure an 80-person engineering org across four pods',
      'Own technology partnerships, build-vs-buy calls and the infrastructure cost curve',
      'Sit on the leadership team and translate technology bets into business outcomes',
    ],
    requirements: [
      '14+ years in engineering, with 5+ years leading orgs of 80 or more',
      'Direct experience taking a platform from monolith to services',
      'D2C or high-traffic consumer platform experience preferred',
      'A track record of hiring and retaining engineering leaders, not just engineers',
    ],
  },
  {
    title: 'Chief Human Resources Officer',
    category: 'CXO',
    location: 'Mumbai',
    band: '₹90L – 1.4 Cr',
    seniority: '16+ years, NBFC or BFSI experience preferred',
    client: 'Confidential — NBFC, 3,000+ employees across 60 branches',
    summary:
      'Lead HR strategy through a branch-network expansion and a shift to a performance-linked compensation model.',
    responsibilities: [
      'Design a performance-linked compensation model ahead of a branch-network expansion',
      'Own HR policy, statutory compliance and employee relations across 60+ branches',
      'Build leadership pipelines for branch-manager and regional roles',
      'Partner with the CEO on culture and retention as headcount crosses 3,000',
    ],
    requirements: [
      '16+ years in HR leadership, NBFC or BFSI experience strongly preferred',
      'Experience running HR across a multi-location branch network',
      'Direct exposure to performance-linked and variable compensation design',
      'Comfortable operating as a business partner to regional leadership, not just a policy owner',
    ],
  },
  {
    title: 'Chief Operating Officer',
    category: 'CXO',
    location: 'Pune',
    band: '₹1.1 – 1.6 Cr',
    seniority: '15+ years, multi-plant manufacturing operations',
    client: 'Confidential — Auto-components manufacturing group, 4 plants',
    summary:
      'Own end-to-end operations across four plants as the group prepares for a capacity expansion and a new export line.',
    responsibilities: [
      'Own end-to-end operations across four manufacturing plants',
      'Lead a capacity expansion and the launch of a new export line',
      'Drive operational efficiency, quality systems and vendor governance',
      'Report directly to the group CEO and sit on the executive committee',
    ],
    requirements: [
      '15+ years in operations leadership, multi-plant manufacturing background',
      'Direct experience with capacity expansion or greenfield plant setup',
      'Exposure to export compliance and international quality certifications',
      'A demonstrated record of improving plant-level efficiency metrics',
    ],
  },
  {
    title: 'VP Engineering',
    category: 'Technology',
    location: 'Bengaluru',
    band: '₹80L – 1.1 Cr + ESOPs',
    seniority: '12+ years, 4+ years managing managers',
    client: 'Confidential — Enterprise SaaS scale-up, Series C',
    summary:
      'Scale a 60-person engineering organisation through a platform re-architecture without slowing feature velocity.',
    responsibilities: [
      'Scale a 60-person engineering organisation through a platform re-architecture',
      'Own delivery velocity, on-call health and engineering quality bars',
      'Build a management layer under you — hire and develop 4–6 engineering managers',
      'Partner with product and design leadership on the roadmap',
    ],
    requirements: [
      '12+ years in engineering, 4+ years managing managers',
      'Direct experience re-architecting a platform without stalling feature delivery',
      'Enterprise SaaS or B2B platform background preferred',
      'Comfortable being measured on both delivery and team-health metrics',
    ],
  },
  {
    title: 'Director of Data & AI',
    category: 'Technology',
    location: 'Gurugram',
    band: '₹75L – 95L',
    seniority: '10+ years, applied ML in a regulated industry',
    client: 'Confidential — Digital lending platform',
    summary:
      'Build the data and applied-ML function from the ground up, starting with credit-risk models and collections analytics.',
    responsibilities: [
      'Build the data and applied-ML function from the ground up',
      'Ship credit-risk and collections models into production lending decisions',
      'Establish data governance and model-risk practices for a regulated lender',
      'Hire the founding data science and ML engineering team',
    ],
    requirements: [
      '10+ years in data/ML, with applied credit-risk or fraud modelling experience',
      'Comfortable operating in a regulated, audit-heavy environment',
      'Experience building a data function from zero, not just running an existing one',
      'Hands-on enough to review model code, not only strategy',
    ],
  },
  {
    title: 'Head of Product Engineering',
    category: 'Technology',
    location: 'Bengaluru',
    band: '₹65L – 90L',
    seniority: '10+ years, consumer health or wellness product preferred',
    client: 'Confidential — Healthtech platform, Series B',
    summary:
      'Own the product engineering roadmap across the patient and provider apps as the platform expands to three new states.',
    responsibilities: [
      'Own the product engineering roadmap across patient and provider-facing apps',
      'Lead the platform through an expansion into three new states',
      'Balance clinical-safety requirements against product velocity',
      'Build a product engineering team structure ahead of the scale-up',
    ],
    requirements: [
      '10+ years in product engineering, healthtech or regulated consumer product preferred',
      'Experience shipping consumer and provider-facing apps from the same platform',
      'Comfortable working alongside clinical and compliance stakeholders',
      'A track record of scaling a product engineering team through 2–3x growth',
    ],
  },
  {
    title: 'Principal Security Architect',
    category: 'Technology',
    location: 'Hyderabad',
    band: '₹70L – 1 Cr',
    seniority: '10+ years, payments or fintech infrastructure security',
    client: 'Confidential — Payments infrastructure company',
    summary:
      'Own the security architecture for a payments platform processing seven-figure daily transaction volumes ahead of a PCI-DSS recertification.',
    responsibilities: [
      'Own security architecture for a payments platform at seven-figure daily transaction volumes',
      'Lead the technical workstream for an upcoming PCI-DSS recertification',
      'Set secure-by-design standards across the payments and settlement stack',
      'Partner with engineering leadership on incident response and threat modelling',
    ],
    requirements: [
      '10+ years in security architecture, payments or fintech infrastructure preferred',
      'Direct experience through at least one PCI-DSS certification cycle',
      'Strong grasp of settlement, reconciliation and payments-specific attack surfaces',
      'Comfortable being the final technical authority on security trade-offs',
    ],
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Confidential intake',
    duration: '2 working days',
    body: 'A private conversation with the mandate’s lead consultant. Nothing moves to the client without your explicit go-ahead.',
    icon: Lock,
  },
  {
    step: '02',
    title: 'Consultant deep-dive',
    duration: '45 – 60 minutes',
    body: 'Your track record, what you’re solving for next, and an honest read on the mandate — including compensation, up front.',
    icon: Users,
  },
  {
    step: '03',
    title: 'Leadership assessment',
    duration: 'Varies by mandate',
    body: 'A case-based strategy review for CXO mandates; a technical and architecture deep-dive for technology mandates.',
    icon: Compass,
  },
  {
    step: '04',
    title: 'Client panel rounds',
    duration: '2 – 3 sessions',
    body: 'Board members, the CEO, or the relevant functional leadership, depending on the mandate. We prep you before every round.',
    icon: Briefcase,
  },
  {
    step: '05',
    title: 'Offer, references & onboarding',
    duration: '1 – 2 weeks',
    body: 'Reference checks run in parallel with offer negotiation. We stay involved through your first 90 days on the job.',
    icon: BadgeCheck,
  },
]

const VOICES = [
  {
    quote:
      'The process was the most rigorous I’ve been through — and the most respectful of my confidentiality. My employer at the time never found out I was in conversation until the day I resigned.',
    name: 'Rajiv Malhotra',
    role: 'Placed as Chief Financial Officer, fintech',
    tenure: '14 months into the role',
  },
  {
    quote:
      'I got the honest read on compensation and scope in the very first call, not after three rounds of interviews. That alone saved me weeks I would otherwise have wasted.',
    name: 'Ananya Reddy',
    role: 'Placed as VP Engineering, enterprise SaaS',
    tenure: '9 months into the role',
  },
  {
    quote:
      'I spoke to the same consultant from the first call to the signed offer. No hand-offs, no re-explaining my situation to someone new every stage.',
    name: 'Karthik Subramaniam',
    role: 'Placed as Chief Technology Officer, D2C platform',
    tenure: '19 months into the role',
  },
  {
    quote:
      'Eighteen months after I joined, the same consultant called to check in — not to sell me on anything, just to ask how it was going. That is not the norm in this industry.',
    name: 'Meenal Deshpande',
    role: 'Placed as Chief Human Resources Officer, NBFC',
    tenure: '22 months into the role',
  },
]

const CATEGORIES = ['All mandates', 'CXO', 'Technology']

function RoleCard({ role, open, onToggle }) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? 'border-[#3557C1]/40 shadow-lg shadow-[#3557C1]/5 bg-white'
          : 'border-gray-200 bg-white hover:border-[#3557C1]/30'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-lg font-bold text-gray-900">{role.title}</h3>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#3557C1]/10 text-[#3557C1]">
              {role.category}
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            {role.summary}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-[#3557C1]" />
              {role.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={14} className="text-[#3557C1]" />
              {role.seniority}
            </span>
            <span className="flex items-center gap-1.5">
              <Lock size={14} className="text-[#3557C1]" />
              {role.client}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="text-right">
            <div className="text-base font-bold text-gray-900">{role.band}</div>
            <div className="text-xs text-gray-500">Compensation range</div>
          </div>
          <span
            className={`w-9 h-9 rounded-full bg-[#3557C1]/10 text-[#3557C1] flex items-center justify-center transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          >
            <ChevronDown size={18} />
          </span>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 border-t border-gray-100 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              What the role owns
            </h4>
            <ul className="space-y-3">
              {role.responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3557C1] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              What we are assessing for
            </h4>
            <ul className="space-y-3">
              {role.requirements.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <a
              href={`mailto:careers@workoraindia.com?subject=${encodeURIComponent(
                `Confidential interest — ${role.title}`,
              )}`}
              className="btn-primary group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3557C1] to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#3557C1]/30"
            >
              Express interest confidentially
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Careers() {
  const [category, setCategory] = useState('All mandates')
  const [openRole, setOpenRole] = useState(null)

  const visibleRoles = useMemo(
    () =>
      category === 'All mandates'
        ? ROLES
        : ROLES.filter((r) => r.category === category),
    [category],
  )

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a1628] via-[#162a50] to-[#1e3a6e] overflow-hidden">
        <Ambience />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-7">
              <div className="animate-fadeInUp">
                <Badge icon={Sparkles}>8 live mandates · Confidential search</Badge>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] animate-fadeInUp"
                style={{ animationDelay: '0.15s' }}
              >
                Executive & technology leadership.
                <span className="block mt-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
                  Placed with precision.
                </span>
              </h1>

              <p
                className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg animate-fadeInUp"
                style={{ animationDelay: '0.3s' }}
              >
                Workora runs confidential CXO and technology leadership
                searches for growth-stage and enterprise businesses across
                India. Every mandate below is live — client identities stay
                under NDA until you choose to proceed.
              </p>

              <div
                className="flex flex-wrap gap-4 pt-2 animate-fadeInUp"
                style={{ animationDelay: '0.45s' }}
              >
                <PrimaryButton href="#open-roles">
                  See open mandates
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </PrimaryButton>
                <GhostButton href="#approach">How our search works</GhostButton>
              </div>
            </div>

            {/* Right-hand collage — built in JSX, no stock photography. */}
            <div
              className="relative animate-fadeInUp"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/25 to-cyan-500/25 rounded-3xl blur-2xl scale-95" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-2xl shadow-black/40">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-white font-semibold">
                      Live mandates — this week
                    </div>
                    <div className="text-blue-100/60 text-sm">
                      CXO & technology search
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { role: 'Chief Technology Officer', stage: 'Final panel', count: 3, tone: 'bg-blue-500' },
                    { role: 'VP Engineering', stage: 'Case study round', count: 5, tone: 'bg-cyan-500' },
                    { role: 'Chief Financial Officer', stage: 'Reference checks', count: 2, tone: 'bg-violet-500' },
                    { role: 'Chief HR Officer', stage: 'Client shortlist', count: 4, tone: 'bg-emerald-500' },
                  ].map((row) => (
                    <div
                      key={row.role}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <span className={`w-2 h-10 rounded-full ${row.tone}`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-sm font-semibold truncate">
                          {row.role}
                        </div>
                        <div className="text-blue-100/50 text-xs">{row.stage}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold">{row.count}</div>
                        <div className="text-blue-100/40 text-[11px]">in play</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-white">34 days</div>
                    <div className="text-blue-100/50 text-xs">
                      Median time to first shortlist
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-blue-100/50 text-xs">
                      Mandates with a replacement guarantee
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-20 -left-20 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 opacity-90 shadow-lg animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- Stats */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-16 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden shadow-xl shadow-black/5">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white p-6 md:p-8 text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#3557C1]">
                  {stat.value}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="mt-2 text-sm text-gray-500 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Approach */}
      <section id="approach" className="bg-white py-20 md:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our approach"
            title="How we run a CXO & technology search"
            subtitle="Not a job board with extra steps — the operating rules behind every mandate, whether it is a boardroom search or a technical leadership hire."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPROACH.map((item) => (
              <div
                key={item.title}
                className="card-hover group bg-white rounded-2xl p-7 border border-gray-200 hover:border-transparent hover:shadow-xl hover:shadow-black/5"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <item.icon size={26} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Benefits */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="For candidates"
            title="What you get by going through us"
            subtitle="Specific commitments, because a search process without them is just a longer interview."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CANDIDATE_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="hover-lift bg-white rounded-2xl p-6 border border-gray-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3557C1]/10 flex items-center justify-center mb-5">
                  <benefit.icon size={22} className="text-[#3557C1]" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Open roles */}
      <section id="open-roles" className="bg-white py-20 md:py-28 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Live mandates"
            title="Eight mandates, two practices"
            subtitle="Every band below is the compensation range we are mandated to close within. Client identities stay confidential until you choose to proceed."
          />

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map((option) => {
              const count =
                option === 'All mandates'
                  ? ROLES.length
                  : ROLES.filter((r) => r.category === option).length
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setCategory(option)
                    setOpenRole(null)
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    category === option
                      ? 'bg-[#3557C1] text-white border-[#3557C1] shadow-md shadow-[#3557C1]/25'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#3557C1]/40 hover:text-[#3557C1]'
                  }`}
                >
                  {option}
                  <span
                    className={`ml-2 text-xs ${category === option ? 'text-white/70' : 'text-gray-400'}`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="space-y-4">
            {visibleRoles.map((role) => (
              <RoleCard
                key={role.title}
                role={role}
                open={openRole === role.title}
                onToggle={() =>
                  setOpenRole(openRole === role.title ? null : role.title)
                }
              />
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Being approached for something that isn’t listed yet, or want to be
            considered proactively?{' '}
            <a
              href="mailto:careers@workoraindia.com?subject=Confidential%20profile%20submission"
              className="text-[#3557C1] font-semibold hover:underline"
            >
              Share your profile confidentially
            </a>{' '}
            — we keep it on file for six months.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------------- Process */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#162a50] to-[#1e3a6e] py-20 md:py-28 overflow-hidden">
        <Ambience
          orbs={[
            'from-blue-500/20 to-indigo-600/10',
            'from-cyan-500/15 to-blue-600/20',
            'from-violet-500/15 to-purple-600/10',
          ]}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tone="dark"
            eyebrow="Our process"
            title="How a confidential search runs"
            subtitle="You will know the compensation range and the honest read on the mandate before the first real interview, and the decision timeline before the last one."
          />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {PROCESS.map((stage, index) => (
              <div key={stage.step} className="relative">
                {index < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] h-px bg-gradient-to-r from-white/30 to-white/5" />
                )}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all h-full">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 mx-auto lg:mx-0">
                    <stage.icon size={24} className="text-blue-300" />
                  </div>
                  <div className="text-xs font-bold text-blue-300/70 tracking-widest mb-2">
                    {stage.step}
                  </div>
                  <h3 className="text-white font-bold mb-1">{stage.title}</h3>
                  <div className="text-xs text-cyan-300 mb-3">
                    {stage.duration}
                  </div>
                  <p className="text-sm text-blue-100/60 leading-relaxed">
                    {stage.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- Voices */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Candidate voices"
            title="From people we placed"
            subtitle="Four candidates, on what the search process was actually like — not on how the job turned out."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {VOICES.map((voice) => (
              <div
                key={voice.name}
                className="hover-lift bg-white rounded-2xl p-8 border border-gray-200 flex flex-col"
              >
                <Quote size={28} className="text-[#3557C1]/25 mb-5" />
                <p className="text-gray-700 leading-relaxed flex-1">
                  {voice.quote}
                </p>
                <div className="mt-7 pt-6 border-t border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3557C1] to-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                    {voice.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900">
                      {voice.name}
                    </div>
                    <div className="text-sm text-gray-500">{voice.role}</div>
                    <div className="text-xs text-[#3557C1] mt-0.5">
                      {voice.tenure}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Share your profile for a confidential conversation"
        subtitle="If you are being approached for a CXO or senior technology role — or want to be considered proactively — send your profile. Every conversation starts under NDA."
        primary={
          <PrimaryButton href="mailto:careers@workoraindia.com?subject=Confidential%20profile%20submission">
            careers@workoraindia.com
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </PrimaryButton>
        }
        secondary={<GhostButton href="#open-roles">Back to open mandates</GhostButton>}
      />
    </>
  )
}
