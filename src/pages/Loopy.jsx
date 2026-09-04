import {
  ArrowRight,
  Award,
  Bot,
  Check,
  Database,
  Download,
  FileSpreadsheet,
  Lock,
  Mail,
  MessageCircle,
  RefreshCw,
  ScanLine,
  Search,
  Send,
  Shield,
  Smartphone,
  Sparkles,
  Tags,
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

const WHATSAPP_LINK = 'https://wa.me/919044194343?text=Hi'

/* ------------------------------------------------------------------ content */

const CANDIDATE_STEPS = [
  {
    from: 'candidate',
    text: 'Hey, applying for the sales role. Sending my CV.',
    attachment: 'Resume_Final_v2.pdf',
  },
  {
    from: 'loopy',
    text: 'Got it — reading your CV now. Give me a moment while I pull out your experience and skills.',
  },
  {
    from: 'loopy',
    text: 'To verify it’s really you, I’ve sent a 6-digit code to your email and phone. Reply with both codes.',
  },
  {
    from: 'candidate',
    text: 'Email: 482913 · Phone: 077215',
  },
  {
    from: 'loopy',
    text: 'Verified. Here’s what I found — take a minute to review and fix anything I got wrong.',
  },
  {
    from: 'loopy',
    text: 'You’re matched to 3 roles. Field Sales Executive, Andheri — interested? YES / NO / MAYBE',
  },
]

const RECRUITER_CANDIDATES = [
  { name: 'Rohit Pawar', role: 'Field Sales Executive', score: 92, tags: ['Immediate', 'Local'] },
  { name: 'Meera Iyer', role: 'Field Sales Executive', score: 87, tags: ['15-day notice'] },
  { name: 'Sandeep Yadav', role: 'Field Sales Executive', score: 81, tags: ['Immediate'] },
  { name: 'Priya Naik', role: 'Field Sales Executive', score: 74, tags: ['30-day notice'] },
]

const CAPABILITIES = [
  {
    icon: ScanLine,
    title: 'CV & JD parsing',
    body: 'OpenAI-based extraction turns a CV photo or PDF into structured fields, with a manual fallback form whenever parsing is not confident.',
  },
  {
    icon: Lock,
    title: 'Dual-channel OTP',
    body: 'Every candidate is verified over both email (SendGrid) and phone (Twilio) before their profile enters the matching pool.',
  },
  {
    icon: Database,
    title: 'One canonical schema',
    body: 'A single Pydantic candidate schema is shared by the parser, the manual form and the matching engine — one data shape no matter how a profile was built.',
  },
  {
    icon: Search,
    title: 'Three matching modes',
    body: 'Keyword, skill-pie or department-first matching, selectable per deployment depending on how a client’s hiring team wants candidates ranked.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Bulk ops & export',
    body: 'Shortlist, tag and bulk-message candidates from an Excel-style dashboard, then export the shortlist straight to CSV or xlsx.',
  },
  {
    icon: Users,
    title: 'Role-based access',
    body: 'Admin and recruiter roles are enforced end to end, so a recruiter only ever sees the candidates and roles they are meant to.',
  },
  {
    icon: Shield,
    title: 'Upload security',
    body: 'Every file is antivirus-scanned and checked against file-type heuristics before it touches the parsing pipeline.',
  },
  {
    icon: RefreshCw,
    title: 'Regeneratable Standard CV',
    body: 'The ATS-friendly Loopy Standard CV PDF is generated once and regeneratable any time, entirely through the chat bot, no portal login needed.',
  },
]

/* ------------------------------------------------------------------ mockups */

/** The hero mockup doubles as the live demo entry point — the whole card is a link to the real WhatsApp bot. */
function ChatMockup() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block hover-lift"
      aria-label="Open a live chat with Loopy on WhatsApp"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#6C84D9]/30 to-[#A9B8EC]/20 rounded-3xl blur-2xl scale-95" />
      <div className="relative rounded-3xl bg-white shadow-2xl shadow-black/40 border border-white/10 overflow-hidden">
        <div className="px-5 py-4 bg-[#1B2A55] flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6C84D9] to-[#A9B8EC] flex items-center justify-center">
            <Bot size={18} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-sm font-bold loopy-wordmark">
              Loopy
            </div>
            <div className="text-[11px] text-white/50">
              usually replies in under a minute
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-white/10 text-white/80 text-[11px] font-semibold flex items-center gap-1.5 shrink-0 group-hover:bg-white/20 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Tap to try it live
          </span>
        </div>

        <div className="p-5 space-y-3 bg-[#F4F5F9] min-h-[360px]">
          {CANDIDATE_STEPS.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.from === 'candidate' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.from === 'candidate'
                    ? 'bg-[#6C84D9] text-white rounded-br-sm'
                    : 'bg-white text-gray-700 border border-gray-100 rounded-bl-sm shadow-sm'
                }`}
              >
                {msg.text}
                {msg.attachment && (
                  <div className="mt-2 flex items-center gap-2 bg-white/15 rounded-lg px-2.5 py-1.5 text-xs">
                    <FileSpreadsheet size={13} />
                    {msg.attachment}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="px-5 py-3 bg-white border-t border-gray-100 flex items-center gap-3">
          <div className="flex-1 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center px-4 text-sm text-gray-400">
            Message Loopy on WhatsApp…
          </div>
          <span className="w-9 h-9 rounded-full bg-[#1B2A55] flex items-center justify-center group-hover:bg-[#6C84D9] transition-colors">
            <Send size={15} className="text-white" />
          </span>
        </div>
      </div>
    </a>
  )
}

function RecruiterTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-gray-900">
            Field Sales Executive — Andheri
          </h4>
          <p className="text-xs text-gray-500">Ranked candidates · 4 of 61</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#1B2A55]/5 text-[#1B2A55] text-xs font-semibold border border-[#1B2A55]/10">
          skill-pie matching
        </span>
      </div>

      <div className="divide-y divide-gray-100">
        {RECRUITER_CANDIDATES.map((c) => (
          <div
            key={c.name}
            className="px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B2A55] to-[#6C84D9] flex items-center justify-center text-white text-sm font-bold shrink-0">
              {c.name
                .split(' ')
                .map((p) => p[0])
                .join('')}
            </div>

            <div className="flex-1 min-w-0">
              <div className="font-semibold text-gray-900 text-sm truncate">
                {c.name}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-28 shrink-0">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-gray-400">Match</span>
                <span className="font-bold text-gray-900">{c.score}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#1B2A55] to-[#6C84D9]"
                  style={{ width: `${c.score}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-3 bg-gray-50 flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <Tags size={13} /> Bulk tag
        </span>
        <span className="flex items-center gap-1.5">
          <Send size={13} /> Bulk message
        </span>
        <span className="flex items-center gap-1.5 ml-auto">
          <Download size={13} /> Export to xlsx
        </span>
      </div>
    </div>
  )
}

function StandardCVMockup() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-black/5 p-8 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-[#1B2A55]">
        <div>
          <div className="text-lg font-bold text-gray-900">Rohit Pawar</div>
          <div className="text-xs text-gray-500">Field Sales Executive</div>
        </div>
        <span className="loopy-wordmark text-sm text-[#1B2A55]">Loopy</span>
      </div>

      <div className="space-y-4 text-xs text-gray-600">
        <div>
          <div className="font-bold text-gray-800 uppercase tracking-wider text-[10px] mb-1.5">
            Experience
          </div>
          <div className="h-2 bg-gray-100 rounded w-full mb-1.5" />
          <div className="h-2 bg-gray-100 rounded w-4/5 mb-1.5" />
          <div className="h-2 bg-gray-100 rounded w-3/5" />
        </div>
        <div>
          <div className="font-bold text-gray-800 uppercase tracking-wider text-[10px] mb-1.5">
            Skills
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Field sales', 'Lead gen', 'CRM', 'Retail'].map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 rounded-md bg-[#F4F5F9] text-[#1B2A55] text-[10px] font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
        <span>ATS-friendly · single column</span>
        <span className="flex items-center gap-1 text-[#1B2A55] font-semibold">
          <Check size={12} /> Loopy Standard
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------- page */

export default function Loopy() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0A1024] via-[#1B2A55] to-[#1B2A55] overflow-hidden">
        <Ambience
          orbs={[
            'from-[#6C84D9]/30 to-[#A9B8EC]/15',
            'from-[#6C84D9]/20 to-[#1B2A55]/30',
            'from-[#A9B8EC]/15 to-[#6C84D9]/10',
          ]}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-7 loopy-type">
              <div className="animate-fadeInUp">
                <Badge icon={Sparkles} tone="loopy">
                  A Workora product
                </Badge>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] animate-fadeInUp"
                style={{ animationDelay: '0.15s', letterSpacing: '-0.02em' }}
              >
                Hiring that starts
                <span className="block mt-3 bg-gradient-to-r from-[#6C84D9] via-[#A9B8EC] to-white bg-clip-text text-transparent">
                  in a chat.
                </span>
              </h1>

              <p
                className="text-base md:text-lg text-blue-100/70 leading-relaxed max-w-lg animate-fadeInUp"
                style={{ animationDelay: '0.3s' }}
              >
                Loopy is built for candidates who have never had a proper CV —
                largely tier-2 and tier-3 job seekers, disproportionately for
                sales roles. Send a CV as a chat message, get verified, get
                matched, and walk away with a clean, ATS-ready resume.
              </p>

              <div
                className="flex flex-wrap gap-4 pt-2 animate-fadeInUp"
                style={{ animationDelay: '0.45s' }}
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6C84D9] to-[#1B2A55] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(108,132,217,0.5)] hover:-translate-y-1"
                >
                  <MessageCircle size={18} />
                  Chat with Loopy on WhatsApp
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <GhostButton href="#capabilities">
                  What it does
                </GhostButton>
              </div>
            </div>

            <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <ChatMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Problem */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="The problem"
            title="Most job seekers don’t have a CV. They have a story."
            subtitle="A field sales candidate in a tier-2 city rarely owns a polished, ATS-ready resume — and the tools built for white-collar hiring assume they do. Loopy starts from a WhatsApp-style chat instead of a form, because that is where this candidate already is."
          />
          <div className="grid sm:grid-cols-3 gap-6 mt-4">
            {[
              { icon: Smartphone, label: 'Chat-first, not form-first' },
              { icon: Users, label: 'Built for tier-2 / tier-3 talent' },
              { icon: Award, label: 'Sales roles, disproportionately' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#F4F5F9]"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <item.icon size={22} className="text-[#1B2A55]" />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Candidate */}
      <section className="bg-[#F4F5F9] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Candidate journey"
                title="From a CV photo to a matched role"
                subtitle=""
              />
              <ol className="space-y-5">
                {[
                  ['Send a CV', 'As a photo, PDF, or plain text — however the candidate already has it.'],
                  ['Loopy parses it', 'OpenAI extraction pulls structured fields, with a manual fallback if parsing isn’t confident.'],
                  ['Verify by email + phone', 'Dual-channel OTP via SendGrid and Twilio before the profile is used for matching.'],
                  ['Review the profile', 'A guided, multi-step form the candidate edits before anything is submitted.'],
                  ['Get matched and pinged', 'YES / NO / MAYBE prompts for open roles, and a Loopy Standard CV, regeneratable by chat command any time.'],
                ].map(([title, body], i) => (
                  <li key={title} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#1B2A55] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-bold text-gray-900">{title}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {body}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <StandardCVMockup />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Recruiter */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <RecruiterTable />
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow="Recruiter journey"
                title="Ranked candidates, transparent scoring"
                subtitle=""
              />
              <ol className="space-y-5">
                {[
                  ['Upload a JD', 'Loopy parses it and the recruiter reviews and confirms the extracted requirements.'],
                  ['See ranked candidates', 'A transparent score breakdown, not a black-box number.'],
                  ['Shortlist and tag', 'Bulk operations across the whole ranked list, not one candidate at a time.'],
                  ['Bulk-message', 'Push a status update or an interview slot to a whole shortlist in one action.'],
                  ['Export to Excel', 'CSV or xlsx export for anything that needs to leave the dashboard.'],
                ].map(([title, body], i) => (
                  <li key={title} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#6C84D9] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-bold text-gray-900">{title}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {body}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Capabilities */}
      <section id="capabilities" className="bg-[#F4F5F9] py-20 md:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Under the hood"
            title="What Loopy actually does"
            subtitle="No feature here is aspirational — this is the shipped capability set."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="hover-lift bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B2A55]/5 flex items-center justify-center mb-5">
                  <cap.icon size={22} className="text-[#1B2A55]" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Give a candidate one chat instead of one form."
        subtitle="If your hiring is high-volume, sales-heavy, or reaching candidates who have never written a CV before, Loopy is built for exactly that funnel."
        gradient="from-[#0A1024] via-[#1B2A55] to-[#1B2A55]"
        orbs={[
          'from-[#6C84D9]/25 to-[#A9B8EC]/10',
          'from-[#6C84D9]/15 to-[#1B2A55]/20',
          'from-[#A9B8EC]/10 to-[#6C84D9]/10',
        ]}
        primary={
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6C84D9] to-white text-[#1B2A55] font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(108,132,217,0.4)] hover:-translate-y-1"
          >
            <MessageCircle size={18} />
            Try Loopy on WhatsApp
          </a>
        }
        secondary={
          <GhostButton href="mailto:info@workoraindia.com?subject=Loopy%20questions">
            <Mail size={18} className="mr-1" />
            Ask a question
          </GhostButton>
        }
      />
    </>
  )
}
