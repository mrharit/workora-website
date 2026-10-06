import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Bot,
  Check,
  Database,
  FileSpreadsheet,
  History,
  Lock,
  Mail,
  Send,
  ShieldCheck,
  Sparkles,
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
import { TELEGRAM_BOT_LINK } from '../config.js'

const TOOL_SRC = '/tools/cv-to-rows.html'
const DEMO_MAILTO =
  'mailto:info@workoraindia.com?subject=CV%20database%20revival%20demo'

/* ------------------------------------------------------------------ content */

const TOOL_FACTS = [
  {
    icon: Lock,
    title: 'Stays in your browser',
    body: 'PDFs are read inside this tab. Nothing is uploaded or sent to a server.',
  },
  {
    icon: ShieldCheck,
    title: 'Honest about confidence',
    body: 'Email, phone and LinkedIn are reliable. Role, company and experience are best-effort and flagged under Review when unsure.',
  },
  {
    icon: Database,
    title: 'Sized for a batch, not a data dump',
    body: 'A tab handles a few hundred to a few thousand CVs. For a full 10,000-file dump, run the same extraction as a script.',
  },
]

const BOT_STEPS = [
  [
    'Every candidate gets a personal link',
    'Importing the Excel creates one invite link per candidate. Links go out by email, SMS or WhatsApp.',
  ],
  [
    'They confirm what we hold',
    'The bot shows role, company, experience, notice period and city, with Yes, correct / Update details / Not looking.',
  ],
  [
    'Updates take six quick answers',
    'Title, company, experience, notice period, expected CTC and city, each with “Keep as is”. Answers are checked and tidied by plain rules — “26,00,000” becomes “26 LPA”.',
  ],
  [
    'Saved with a timestamp and change log',
    'Status becomes Verified, Updated, Not looking or Opted out, and every changed field is logged before and after.',
  ],
]

const LIMITS = [
  {
    icon: Send,
    title: 'The candidate has to start the chat',
    body: 'A Telegram bot cannot message a phone number first. The candidate opens their personal link, or taps “Share my phone number”.',
  },
  {
    icon: Users,
    title: 'Expect 10–25% to respond',
    body: 'That is a realistic range for an old database. Size the campaign around it rather than around the full list.',
  },
  {
    icon: Lock,
    title: 'Consent comes first',
    body: 'The bot states that answers are stored and that /stop opts out at once. Real candidate data also needs consent handling under India’s DPDP Act.',
  },
]

/* ------------------------------------------------------------------ pieces */

/**
 * The tool is a self-contained page in /public. Same-origin, so the frame can
 * size itself to the tool's content and the tool never shows a nested scrollbar.
 */
function ToolFrame() {
  const ref = useRef(null)
  const [height, setHeight] = useState(1400)

  useEffect(() => {
    const frame = ref.current
    let observer
    const attach = () => {
      const body = frame.contentDocument?.body
      if (!body) return
      const measure = () =>
        setHeight(Math.ceil(body.getBoundingClientRect().height))
      measure()
      observer?.disconnect()
      observer = new ResizeObserver(measure)
      observer.observe(body)
    }
    frame.addEventListener('load', attach)
    if (frame.contentDocument?.readyState === 'complete') attach()
    return () => {
      frame.removeEventListener('load', attach)
      observer?.disconnect()
    }
  }, [])

  return (
    <div className="rounded-2xl border border-gray-200 bg-[#F4F7F7] shadow-xl shadow-black/5 overflow-hidden">
      <iframe
        ref={ref}
        src={TOOL_SRC}
        title="CV to Rows — turn CV PDFs into spreadsheet rows"
        className="block w-full border-0"
        style={{ height }}
      />
    </div>
  )
}

/** Illustrative thread only — fictional candidate, same fields the real bot asks. */
function TelegramMockup() {
  const bot = (children) => (
    <div className="flex justify-start">
      <div className="max-w-[88%] rounded-2xl rounded-bl-sm bg-white px-4 py-2.5 text-sm leading-relaxed text-gray-700 shadow-sm border border-gray-100">
        {children}
      </div>
    </div>
  )
  const candidate = (text) => (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-[#2AABEE] px-4 py-2.5 text-sm leading-relaxed text-white">
        {text}
      </div>
    </div>
  )
  const chips = (labels) => (
    <div className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <span
          key={label}
          className="rounded-full border border-[#2AABEE]/40 bg-white px-3 py-1.5 text-xs font-semibold text-[#1A8CC9]"
        >
          {label}
        </span>
      ))}
    </div>
  )

  return (
    <div className="relative">
      <div className="absolute inset-0 scale-95 rounded-3xl bg-gradient-to-r from-[#2AABEE]/25 to-[#3557C1]/15 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-black/10">
        <div className="flex items-center gap-3 bg-[#1B3A5C] px-5 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2AABEE]">
            <Bot size={18} className="text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-bold text-white">CV Verify Bot</div>
            <div className="text-[11px] text-white/50">bot · example conversation</div>
          </div>
          <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/80">
            Fictional candidate
          </span>
        </div>

        <div className="space-y-3 bg-[#EAF2F8] p-5">
          {bot(
            <>
              Hi Neha, here is what we hold for you:
              <div className="mt-2 space-y-0.5 text-xs text-gray-600">
                <div>Senior BIM Engineer · Arcon Design Consultants</div>
                <div>9 yrs experience · 60-day notice · Gurugram</div>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Your answers are stored to keep your profile current. Send
                /stop any time to opt out.
              </div>
            </>,
          )}
          {chips(['Yes, correct', 'Update details', 'Not looking'])}
          {candidate('Update details')}
          {bot('What is your expected CTC? You can also keep it as is.')}
          {candidate('26,00,000')}
          {bot(
            <>
              Please review before saving:
              <div className="mt-2 rounded-lg bg-[#F4F5F9] px-3 py-2 text-xs text-gray-600">
                Expected CTC · <span className="line-through">24 LPA</span> →{' '}
                <span className="font-bold text-gray-900">26 LPA</span>
              </div>
            </>,
          )}
          {chips(['Save', 'Edit again'])}
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------- page */

export default function CVToRows() {
  const hasBotLink = Boolean(TELEGRAM_BOT_LINK)

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#162a50] to-[#1e3a6e]">
        <Ambience />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl space-y-7">
            <div className="animate-fadeInUp">
              <Badge icon={Sparkles}>Database revival</Badge>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] animate-fadeInUp"
              style={{ animationDelay: '0.15s', letterSpacing: '-0.02em' }}
            >
              From a folder of old CVs
              <span className="block mt-3 bg-gradient-to-r from-[#54a2ff] via-[#a9c4ff] to-white bg-clip-text text-transparent pb-2">
                to a live candidate database.
              </span>
            </h1>
            <p
              className="text-base md:text-lg text-blue-100/70 leading-relaxed max-w-2xl animate-fadeInUp"
              style={{ animationDelay: '0.3s' }}
            >
              Step 1 reads every CV PDF into one spreadsheet row. Step 2 asks
              each candidate on Telegram to confirm or update their details,
              and logs every change with a timestamp.
            </p>
            <div
              className="flex flex-wrap gap-4 pt-2 animate-fadeInUp"
              style={{ animationDelay: '0.45s' }}
            >
              <PrimaryButton href="#tool">
                <FileSpreadsheet size={18} />
                Try CV to Rows
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </PrimaryButton>
              {hasBotLink ? (
                <GhostButton
                  href={TELEGRAM_BOT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send size={18} />
                  Open the Telegram bot
                </GhostButton>
              ) : (
                <GhostButton href="#telegram-bot">
                  <Send size={18} />
                  See the Telegram step
                </GhostButton>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Tool */}
      <section id="tool" className="bg-[#F4F5F9] py-20 md:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Step 1 · Works right here"
            title="Drop CV PDFs, get one row per candidate"
            subtitle="Drop a folder of PDFs below. The example rows show the output; your own files replace them. Download the result as Excel or CSV."
          />
          <ToolFrame />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TOOL_FACTS.map((fact) => (
              <div
                key={fact.title}
                className="rounded-2xl border border-gray-100 bg-white p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#3557C1]/10">
                  <fact.icon size={20} className="text-[#3557C1]" />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">
                  {fact.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {fact.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Telegram */}
      <section
        id="telegram-bot"
        className="bg-white py-20 md:py-28 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Step 2 · Telegram bot"
                title="Ask every candidate to confirm their details"
                subtitle="The Excel from Step 1 is imported into the bot. Candidates answer in a chat, and the sheet stays current."
              />
              <ol className="space-y-5">
                {BOT_STEPS.map(([title, body], i) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3557C1] text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-bold text-gray-900">{title}</div>
                      <div className="text-sm leading-relaxed text-gray-600">
                        {body}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap gap-4">
                {hasBotLink ? (
                  <PrimaryButton
                    href={TELEGRAM_BOT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send size={18} />
                    Open the Telegram bot
                  </PrimaryButton>
                ) : (
                  <PrimaryButton href={DEMO_MAILTO}>
                    <Mail size={18} />
                    Request a live demo
                  </PrimaryButton>
                )}
              </div>
            </div>

            <TelegramMockup />
          </div>

          <div className="mt-20">
            <SectionHeading
              eyebrow="Before you run it"
              title="What to know up front"
              subtitle="These limits come from Telegram and from the law, not from the tool, so they are worth stating before any client does."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {LIMITS.map((item) => (
                <div
                  key={item.title}
                  className="hover-lift rounded-2xl border border-gray-100 bg-[#F4F5F9] p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                    <item.icon size={20} className="text-[#3557C1]" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 flex items-start justify-center gap-2 text-center text-sm text-gray-500">
              <History size={16} className="mt-0.5 shrink-0" />
              Every change is written to an audit log, so a candidate’s record
              can always be traced back.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="Turn a dead database into a live one."
        subtitle="Try CV to Rows on a folder of your own CVs, then see how the Telegram step confirms each candidate."
        primary={
          <PrimaryButton href="#tool">
            <Check size={18} />
            Try CV to Rows
          </PrimaryButton>
        }
        secondary={
          hasBotLink ? (
            <GhostButton
              href={TELEGRAM_BOT_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send size={18} />
              Open the Telegram bot
            </GhostButton>
          ) : (
            <GhostButton href={DEMO_MAILTO}>
              <Mail size={18} />
              Request a live demo
            </GhostButton>
          )
        }
      />
    </>
  )
}
