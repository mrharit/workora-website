import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  ChevronDown,
  Clock,
  Compass,
  Gift,
  GraduationCap,
  Handshake,
  Heart,
  Laptop,
  Lightbulb,
  MapPin,
  Plane,
  Quote,
  Scale,
  Search,
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
  { value: '68', suffix: '', label: 'People on the team' },
  { value: '3', suffix: '', label: 'Offices across Mumbai' },
  { value: '3.4', suffix: ' yrs', label: 'Median tenure' },
  { value: '1,900', suffix: '+', label: 'Placements closed in FY25' },
]

const PILLARS = [
  {
    icon: Target,
    title: 'Ownership over hierarchy',
    body: 'A consultant owns their mandate end to end — the brief, the pipeline, the client conversation, the closure. Approvals do not sit between you and your work.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Heart,
    title: 'Candidates are people',
    body: 'Every applicant gets a reply, a reason, and a callback window we actually keep. We do not ghost, and we never charge a candidate a rupee.',
    gradient: 'from-rose-500 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'Numbers you can see',
    body: 'Submission ratios, interview-to-offer, time-to-fill and incentive accruals are visible to the whole team on a live board. No one guesses where they stand.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Lightbulb,
    title: 'Learn out loud',
    body: 'Every Friday one person walks the floor through a mandate they lost and what they would do differently. Post-mortems are normal, not punitive.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Scale,
    title: 'Speed with governance',
    body: 'Fast is only useful if it is repeatable. Every stage of a mandate is documented, so quality does not depend on who happens to be on the desk.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Handshake,
    title: 'Long games beat quick wins',
    body: 'We turn down mandates we cannot service well. A client relationship that lasts six years is worth more than six quarters of stretched delivery.',
    gradient: 'from-amber-500 to-orange-600',
  },
]

const BENEFITS = [
  {
    icon: Heart,
    title: '₹5L family floater',
    body: 'Health cover for you, your spouse, children and dependent parents from day one. No waiting period on the base policy.',
  },
  {
    icon: Plane,
    title: '24 earned leave + 10 holidays',
    body: 'Plus 6 casual and 6 sick days. Leave does not need a justification, and unused earned leave is encashable.',
  },
  {
    icon: Award,
    title: 'Quarterly closure incentive',
    body: 'Paid on collections, not on promises. Slabs are published at the start of the quarter and never revised mid-cycle.',
  },
  {
    icon: GraduationCap,
    title: '₹25,000 learning wallet',
    body: 'Per year, per person. Certifications, conferences, courses — approved on a one-line request, not a business case.',
  },
  {
    icon: Laptop,
    title: 'Two flexible days a week',
    body: 'Work from where you are on any two days you choose. Client-visit days are planned with your desk, not dictated.',
  },
  {
    icon: Users,
    title: 'Counselling support',
    body: 'Confidential access to licensed therapists for you and your immediate family, at no cost and outside the company.',
  },
  {
    icon: Gift,
    title: '₹50,000 referral bonus',
    body: 'For every referral who joins and crosses 90 days. Paid in full in the next payroll cycle, no clawback ladder.',
  },
  {
    icon: Briefcase,
    title: 'Hardware of choice',
    body: 'MacBook or ThinkPad, a second monitor, and a phone plan that covers the calling you actually do.',
  },
]

const ROLES = [
  {
    title: 'Recruitment Consultant — BFSI',
    team: 'Delivery',
    location: 'Andheri East, Mumbai',
    band: '₹4.5 – 7.5 LPA',
    type: 'Full-time',
    experience: '2 – 4 years',
    summary:
      'Own BFSI mandates end to end for banking, insurance and NBFC clients — from intake call to offer acceptance.',
    responsibilities: [
      'Run intake calls with hiring managers and convert briefs into calibrated search strategies',
      'Source, screen and shortlist for mid-to-senior BFSI roles across sales, credit, risk and operations',
      'Manage a live pipeline of 8 – 12 mandates with weekly client reporting',
      'Prepare candidates for interviews and manage offer negotiation through to joining',
    ],
    requirements: [
      '2 – 4 years in agency or in-house recruitment, with at least one year in BFSI',
      'Comfortable with Naukri, LinkedIn Recruiter and a structured ATS',
      'A track record you can talk through — closures, ratios, and what you learned from the misses',
      'Fluent English and Hindi; Marathi is a plus for branch-network hiring',
    ],
  },
  {
    title: 'Senior Recruitment Consultant — Technology',
    team: 'Delivery',
    location: 'Andheri East, Mumbai',
    band: '₹8 – 13 LPA',
    type: 'Full-time',
    experience: '5 – 8 years',
    summary:
      'Lead technology mandates for product and services clients, and mentor two to three junior consultants on the desk.',
    responsibilities: [
      'Own niche and leadership technology searches — platform, data, security and engineering management',
      'Build market maps and talent-pool intelligence that clients use for workforce planning',
      'Set quality bars for the desk: screening rubrics, submission templates, feedback SLAs',
      'Coach juniors through their first independent closures',
    ],
    requirements: [
      '5 – 8 years in technology recruitment with demonstrable senior-level closures',
      'Ability to hold a credible technical conversation across at least two stacks',
      'Experience running a desk or mentoring recruiters',
      'Strong written communication — your submission notes should stand on their own',
    ],
  },
  {
    title: 'Sourcing Specialist',
    team: 'Sourcing',
    location: 'Powai, Mumbai',
    band: '₹3 – 5 LPA',
    type: 'Full-time',
    experience: '1 – 3 years',
    summary:
      'Build the top of the funnel. Deep sourcing across job boards, communities and non-traditional digital footprints.',
    responsibilities: [
      'Run boolean and x-ray searches across LinkedIn, Naukri, GitHub and niche communities',
      'Qualify candidates on availability, compensation expectation and role fit before handoff',
      'Maintain talent pools by skill and location so repeat mandates start warm',
      'Report daily on outreach volume, response rate and qualified-handoff conversion',
    ],
    requirements: [
      '1 – 3 years in sourcing or research, agency or in-house',
      'Genuinely good boolean; you should be able to explain a search string you are proud of',
      'Organised — a messy pipeline is the failure mode of this role',
      'Curiosity about industries you have not worked in yet',
    ],
  },
  {
    title: 'Talent Research Analyst',
    team: 'Sourcing',
    location: 'Remote (India)',
    band: '₹4 – 6.5 LPA',
    type: 'Full-time',
    experience: '2 – 4 years',
    summary:
      'Turn market noise into hiring intelligence — org charts, compensation benchmarks and competitor movement.',
    responsibilities: [
      'Produce market maps and org charts for client workforce-planning conversations',
      'Track salary movement and attrition signals across BFSI, technology and consumer sectors',
      'Build the compensation benchmark library the delivery desks quote from',
      'Turn research into short, readable briefs — not 40-slide decks',
    ],
    requirements: [
      '2 – 4 years in talent research, market intelligence or a comparable analyst role',
      'Strong spreadsheet skills and a habit of citing where a number came from',
      'Clear written English; this role is judged on the quality of its briefs',
      'Self-directed — the role is remote and lightly supervised by design',
    ],
  },
  {
    title: 'Account Manager — Client Success',
    team: 'Client Success',
    location: 'BKC, Mumbai',
    band: '₹10 – 16 LPA',
    type: 'Full-time',
    experience: '5 – 9 years',
    summary:
      'Own the health of a portfolio of enterprise accounts — delivery quality, commercials, renewals and expansion.',
    responsibilities: [
      'Run quarterly business reviews with client HR and business leadership',
      'Hold the delivery desks to SLA and escalate early when a mandate is drifting',
      'Own commercial terms, renewals and expansion into new business units',
      'Be the single accountable name on the account when something goes wrong',
    ],
    requirements: [
      '5 – 9 years in account management, client success or recruitment delivery leadership',
      'Comfortable presenting to CHRO and business-head audiences',
      'Numerate — you should be able to defend a margin conversation',
      'Willing to travel within Mumbai for client meetings most weeks',
    ],
  },
  {
    title: 'Business Development Manager',
    team: 'Growth',
    location: 'BKC, Mumbai',
    band: '₹9 – 15 LPA',
    type: 'Full-time',
    experience: '4 – 8 years',
    summary:
      'Open new logos for staffing, RPO and HR operations. Consultative selling, not cold-call volume.',
    responsibilities: [
      'Build and work a pipeline of target accounts across Mumbai, Pune and the wider west region',
      'Run discovery conversations that diagnose a hiring problem before proposing a service',
      'Own proposals, commercial structuring and contract closure with legal support',
      'Hand over cleanly to delivery and stay involved through the first two mandates',
    ],
    requirements: [
      '4 – 8 years selling recruitment, HR services or B2B services to enterprise buyers',
      'A network you can actually activate in the west region',
      'Comfort with a long sales cycle and a documented CRM discipline',
      'You are measured on signed contracts and first-mandate success, not meetings booked',
    ],
  },
  {
    title: 'HR Operations Executive',
    team: 'Internal HR',
    location: 'Andheri East, Mumbai',
    band: '₹3.5 – 5.5 LPA',
    type: 'Full-time',
    experience: '2 – 4 years',
    summary:
      'Run payroll, attendance, statutory filings and the employee lifecycle for Workora’s own team.',
    responsibilities: [
      'Process monthly payroll and coordinate PF, ESIC, professional tax and TDS filings',
      'Own onboarding, confirmation, transfer and exit documentation',
      'Maintain attendance and leave records and resolve employee queries within 48 hours',
      'Support the annual Form 16 issuance and audit responses',
    ],
    requirements: [
      '2 – 4 years in HR operations or payroll, ideally in a services business',
      'Working knowledge of EPF, ESIC, PT and Section 192 TDS mechanics',
      'Accuracy under a deadline — payroll does not get to be late',
      'Discretion with confidential employee information',
    ],
  },
  {
    title: 'Delivery Manager',
    team: 'Delivery',
    location: 'Thane, Mumbai',
    band: '₹14 – 20 LPA',
    type: 'Full-time',
    experience: '8 – 12 years',
    summary:
      'Lead a delivery pod of 10 – 14 consultants across multiple accounts. Own throughput, quality and retention.',
    responsibilities: [
      'Own pod-level delivery metrics: time-to-fill, submission-to-interview, offer-to-join',
      'Allocate mandates across the pod and rebalance when a desk is under water',
      'Run weekly one-on-ones and quarterly performance conversations',
      'Partner with account management on escalations and with growth on solution design',
    ],
    requirements: [
      '8 – 12 years in recruitment with at least three years managing recruiters',
      'A history of retaining a team — we will ask about attrition on your last pod',
      'Fluency with delivery dashboards and the discipline to run to them',
      'Calm in escalations; this role is most visible on the bad days',
    ],
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Application review',
    duration: '2 working days',
    body: 'A human reads it. You get a yes or a no with a reason — never silence.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Intro call with TA',
    duration: '30 minutes',
    body: 'Your background, what you want next, the honest version of the role, and the compensation band up front.',
    icon: Users,
  },
  {
    step: '03',
    title: 'Craft round',
    duration: '60 minutes',
    body: 'A live simulation of the actual job — an intake call, a search strategy, a client escalation. No trick questions.',
    icon: Compass,
  },
  {
    step: '04',
    title: 'Hiring manager & business round',
    duration: '45 minutes',
    body: 'The person you would report to, plus one leader from the business you would serve.',
    icon: Briefcase,
  },
  {
    step: '05',
    title: 'Offer & documentation',
    duration: '3 working days',
    body: 'Written offer with the full CTC break-up, incentive slabs and joining date agreed before you sign.',
    icon: BadgeCheck,
  },
]

const VOICES = [
  {
    quote:
      'I joined as a sourcer with eleven months of experience and no BFSI background. Eighteen months later I was running my own mandates. Nobody made me wait my turn — they made me ready.',
    name: 'Shruti Kulkarni',
    role: 'Recruitment Consultant, BFSI',
    tenure: '2 years 4 months',
  },
  {
    quote:
      'The Friday loss reviews were uncomfortable for about a month, and then they became the most useful hour of my week. You learn faster when the misses are on the table.',
    name: 'Aditya Raut',
    role: 'Senior Recruitment Consultant, Technology',
    tenure: '3 years 1 month',
  },
  {
    quote:
      'I asked to move from delivery into client success and it took one conversation. The internal-mobility policy is not a poster on a wall here, it is a form and a two-week process.',
    name: 'Fatima Shaikh',
    role: 'Account Manager, Client Success',
    tenure: '4 years 7 months',
  },
  {
    quote:
      'Incentives are published at the start of the quarter and paid on collections. In five years nobody has moved my goalposts in month three. That is rarer in this industry than it should be.',
    name: 'Nikhil Deshpande',
    role: 'Delivery Manager',
    tenure: '5 years 2 months',
  },
]

const TEAMS = ['All roles', 'Delivery', 'Sourcing', 'Client Success', 'Growth', 'Internal HR']

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
              {role.team}
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
              {role.experience}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#3557C1]" />
              {role.type}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="text-right">
            <div className="text-base font-bold text-gray-900">{role.band}</div>
            <div className="text-xs text-gray-500">Fixed CTC</div>
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
              What you will do
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
              What we are looking for
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
                `Application — ${role.title}`,
              )}`}
              className="btn-primary group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3557C1] to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#3557C1]/30"
            >
              Apply for this role
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Careers() {
  const [team, setTeam] = useState('All roles')
  const [openRole, setOpenRole] = useState(null)

  const visibleRoles = useMemo(
    () => (team === 'All roles' ? ROLES : ROLES.filter((r) => r.team === team)),
    [team],
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
                <Badge icon={Sparkles}>8 open roles · Mumbai & remote</Badge>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] animate-fadeInUp"
                style={{ animationDelay: '0.15s' }}
              >
                We build careers for a living.
                <span className="block mt-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
                  Start with your own.
                </span>
              </h1>

              <p
                className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg animate-fadeInUp"
                style={{ animationDelay: '0.3s' }}
              >
                Workora is a Mumbai recruitment firm of 68 people. We hire
                consultants, sourcers, account managers and operators — and we
                run our own hiring the way we tell clients to run theirs:
                transparent bands, real feedback, and a decision inside two
                weeks.
              </p>

              <div
                className="flex flex-wrap gap-4 pt-2 animate-fadeInUp"
                style={{ animationDelay: '0.45s' }}
              >
                <PrimaryButton href="#open-roles">
                  See open roles
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </PrimaryButton>
                <GhostButton href="#life">Life at Workora</GhostButton>
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
                      Hiring board — this week
                    </div>
                    <div className="text-blue-100/60 text-sm">
                      Internal talent acquisition
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { role: 'Recruitment Consultant', stage: 'Craft round', count: 4, tone: 'bg-blue-500' },
                    { role: 'Sourcing Specialist', stage: 'Intro call', count: 7, tone: 'bg-cyan-500' },
                    { role: 'Account Manager', stage: 'Business round', count: 2, tone: 'bg-violet-500' },
                    { role: 'Delivery Manager', stage: 'Offer stage', count: 1, tone: 'bg-emerald-500' },
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
                    <div className="text-2xl font-bold text-white">11 days</div>
                    <div className="text-blue-100/50 text-xs">
                      Median application to offer
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-blue-100/50 text-xs">
                      Applicants who get a reply
                    </div>
                  </div>
                </div>
              </div>

              {/*
                Detached fully clear of the card (offset > rotated footprint)
                so it never lands over the header text — unlike the
                production hero, this card is text-dense edge to edge with
                no empty video backdrop for it to sit on.
              */}
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

      {/* ------------------------------------------------------------- Culture */}
      <section id="life" className="bg-white py-20 md:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="Six things that are true here"
            subtitle="Not values on a wall — the operating rules people can hold each other to, including us."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="card-hover group bg-white rounded-2xl p-7 border border-gray-200 hover:border-transparent hover:shadow-xl hover:shadow-black/5"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <pillar.icon size={26} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pillar.body}
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
            eyebrow="Benefits"
            title="What you actually get"
            subtitle="Specific numbers, because a benefits page without numbers is a benefits page that is hiding something."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit) => (
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
            eyebrow="Open roles"
            title="Eight seats to fill"
            subtitle="Every band below is the fixed CTC we will actually offer in that range. Incentives sit on top and are published separately."
          />

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {TEAMS.map((option) => {
              const count =
                option === 'All roles'
                  ? ROLES.length
                  : ROLES.filter((r) => r.team === option).length
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setTeam(option)
                    setOpenRole(null)
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    team === option
                      ? 'bg-[#3557C1] text-white border-[#3557C1] shadow-md shadow-[#3557C1]/25'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#3557C1]/40 hover:text-[#3557C1]'
                  }`}
                >
                  {option}
                  <span
                    className={`ml-2 text-xs ${team === option ? 'text-white/70' : 'text-gray-400'}`}
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
            Nothing matching?{' '}
            <a
              href="mailto:careers@workoraindia.com?subject=Open%20application"
              className="text-[#3557C1] font-semibold hover:underline"
            >
              Send us an open application
            </a>{' '}
            — we read every one and keep it live for six months.
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
            eyebrow="Interview process"
            title="Five stages, about two weeks"
            subtitle="You will know the compensation band before the first call and the decision timeline before the last one."
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
            eyebrow="Team voices"
            title="From people who work here"
            subtitle="Four colleagues, unedited, on what changed for them after joining."
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
                      {voice.tenure} at Workora
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Send us the version of your CV you would actually send a friend"
        subtitle="No cover letter, no portal, no 40-field form. One email, and a human reply within two working days."
        primary={
          <PrimaryButton href="mailto:careers@workoraindia.com?subject=Application">
            careers@workoraindia.com
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </PrimaryButton>
        }
        secondary={<GhostButton href="#open-roles">Back to open roles</GhostButton>}
      />
    </>
  )
}
