import { useState } from 'react'
import {
  ArrowRight,
  Banknote,
  BarChart3,
  CalendarClock,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock,
  Database,
  Download,
  FileSpreadsheet,
  FileText,
  Layers,
  LogOut,
  Percent,
  Receipt,
  Rocket,
  Shield,
  Sparkles,
  Target,
  UserPlus,
  Users,
  Wallet,
} from 'lucide-react'
import {
  Ambience,
  Badge,
  CTABand,
  GhostButton,
  PrimaryButton,
  SectionHeading,
} from '../components/ui.jsx'

/* ------------------------------------------------------------------ content */

const MODULES = [
  {
    icon: Wallet,
    title: 'Payroll',
    body: 'Multi-entity, multi-state salary processing with arrears, full-and-final settlement, reimbursements and a locked audit trail on every run.',
    points: ['Salary structuring & CTC modelling', 'Arrears and retro processing', 'Full & final settlement', 'Bank advice + payslip publishing'],
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Clock,
    title: 'Attendance & shifts',
    body: 'Biometric, geo-fenced mobile and roster-based capture, reconciled against the payroll cut-off so nothing is corrected after the fact.',
    points: ['Biometric & geo-punch capture', 'Rotational shift rosters', 'Overtime and late-mark rules', 'Regularisation workflow'],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: CalendarClock,
    title: 'Leave management',
    body: 'Policy-driven accrual, carry-forward, encashment and holiday calendars that differ correctly by state and by location.',
    points: ['Accrual & carry-forward rules', 'State-wise holiday calendars', 'Comp-off and sandwich handling', 'Encashment at exit'],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Target,
    title: 'Performance',
    body: 'Goal setting, mid-year check-ins and appraisal cycles with calibrated ratings that flow straight into the increment and arrears run.',
    points: ['OKR / KRA goal library', 'Continuous check-ins', 'Calibration & bell-curve controls', 'Increment letters generated in-line'],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: UserPlus,
    title: 'Onboarding & exit',
    body: 'Offer to joining to confirmation to exit, with document collection, background verification status and asset recovery tracked in one place.',
    points: ['Digital joining kit & e-sign', 'BGV status tracking', 'Probation & confirmation triggers', 'Exit checklist and asset recovery'],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Shield,
    title: 'Statutory compliance',
    body: 'PF, ESIC, professional tax, TDS, gratuity and bonus computed inside the payroll run — not reconciled afterwards in a spreadsheet.',
    points: ['ECR and ESIC return files', 'Form 24Q & Form 16 generation', 'State-wise PT and LWF', 'Register maintenance under S&E'],
    gradient: 'from-rose-500 to-red-600',
  },
]

const STATUTES = [
  {
    code: 'EPF',
    name: 'Employees’ Provident Fund',
    detail:
      '12% employee and 12% employer contribution on basic + DA, against a statutory wage ceiling of ₹15,000. Of the employer share, 8.33% goes to EPS, capped at ₹1,250 per member.',
    due: 'ECR filed and contribution paid by the 15th of the following month',
    icon: Banknote,
    accent: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    code: 'ESIC',
    name: 'Employees’ State Insurance',
    detail:
      '0.75% employee and 3.25% employer contribution for employees drawing gross wages up to ₹21,000 per month (₹25,000 for employees with disability).',
    due: 'Contribution by the 15th; returns for the two half-yearly periods',
    icon: Shield,
    accent: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    code: 'PT',
    name: 'Professional Tax',
    detail:
      'Levied state by state. In Maharashtra, ₹200 per month for salary above ₹25,000, with ₹300 deducted in February to complete the ₹2,500 annual cap.',
    due: 'Monthly or annual return depending on liability slab',
    icon: Percent,
    accent: 'text-violet-600 bg-violet-50 border-violet-100',
  },
  {
    code: 'TDS',
    name: 'Tax deducted at source — salary',
    detail:
      'Section 192 deduction computed on the employee’s declared regime, investment proofs and perquisite value, recomputed every month rather than only in Q4.',
    due: 'Deposited by the 7th of the following month',
    icon: Receipt,
    accent: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    code: '24Q',
    name: 'Quarterly TDS return',
    detail:
      'Form 24Q with Annexure I every quarter and Annexure II in the fourth quarter, reconciled against challans before filing.',
    due: '31 Jul · 31 Oct · 31 Jan · 31 May',
    icon: FileSpreadsheet,
    accent: 'text-cyan-600 bg-cyan-50 border-cyan-100',
  },
  {
    code: 'Form 16',
    name: 'Annual salary certificate',
    detail:
      'Part A pulled from TRACES and Part B generated from the payroll ledger, digitally signed and distributed to every employee on record.',
    due: 'Issued by 15 June following the financial year',
    icon: FileText,
    accent: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  },
  {
    code: 'Gratuity',
    name: 'Payment of Gratuity Act, 1972',
    detail:
      '15 days’ wages for every completed year of service, payable after five years of continuous service, with the actuarial provision carried month on month.',
    due: 'Settled within 30 days of becoming payable',
    icon: Layers,
    accent: 'text-teal-600 bg-teal-50 border-teal-100',
  },
  {
    code: 'Bonus',
    name: 'Payment of Bonus Act, 1965',
    detail:
      'Statutory bonus between 8.33% and 20% for eligible employees, computed on the allocable surplus with the set-on / set-off register maintained.',
    due: 'Paid within 8 months of the close of the accounting year',
    icon: ClipboardCheck,
    accent: 'text-rose-600 bg-rose-50 border-rose-100',
  },
]

const CALENDAR = [
  { day: '7th', task: 'TDS on salary deposited', tag: 'Income Tax' },
  { day: '15th', task: 'PF ECR filed and paid', tag: 'EPFO' },
  { day: '15th', task: 'ESIC contribution paid', tag: 'ESIC' },
  { day: '21st', task: 'Professional tax remitted (MH)', tag: 'State' },
  { day: '30th', task: 'LWF where applicable, S&E registers updated', tag: 'State' },
  { day: 'Quarterly', task: 'Form 24Q filed with annexures', tag: 'Income Tax' },
]

const ROLLOUT = [
  {
    week: 'Week 1',
    title: 'Data migration',
    icon: Database,
    body: 'We take your last three payroll runs, the master data and the statutory registers, and rebuild them inside the system.',
    owned: [
      'Employee master and salary structure mapping',
      'Opening balances for leave, gratuity and PT',
      'Historic challan and ECR reconciliation',
    ],
  },
  {
    week: 'Week 2',
    title: 'Parallel run',
    icon: BarChart3,
    body: 'One full cycle processed in both systems side by side. We do not go live until the variance report is zero.',
    owned: [
      'Gross-to-net variance report, employee by employee',
      'Statutory computation cross-check against your filings',
      'Payslip and bank-advice format sign-off',
    ],
  },
  {
    week: 'Week 3',
    title: 'Go live',
    icon: Rocket,
    body: 'First live run with our team on the call, then a named operations contact for every cycle after that.',
    owned: [
      'Live payroll with dual approval',
      'Employee self-service rollout and helpdesk',
      'Filing calendar handed over with owners against each date',
    ],
  },
]

const PLANS = [
  {
    name: 'Essential',
    price: '₹49',
    unit: 'per employee / month',
    body: 'Payroll, attendance, leave and statutory filing for a single entity.',
    features: [
      'Payroll with PF, ESIC, PT and TDS',
      'Attendance and leave management',
      'Payslips and employee self-service',
      'Form 24Q and Form 16 generation',
      'Email support, next business day',
    ],
    cta: 'Start with Essential',
    featured: false,
  },
  {
    name: 'Growth',
    price: '₹89',
    unit: 'per employee / month',
    body: 'Multi-entity, multi-state, plus performance and full lifecycle management.',
    features: [
      'Everything in Essential',
      'Multi-entity and multi-state payroll',
      'Performance and appraisal cycles',
      'Onboarding, BGV tracking and exit',
      'Named operations contact',
      'Custom reports and API access',
    ],
    cta: 'Talk to us about Growth',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: 'annual contract',
    body: 'Managed HR operations run by Workora’s team as an extension of yours.',
    features: [
      'Everything in Growth',
      'Fully managed payroll operations',
      'Statutory audit and inspection support',
      'Dedicated compliance officer',
      'SLA-backed turnaround commitments',
      'On-site transition support',
    ],
    cta: 'Request a proposal',
    featured: false,
  },
]

const FAQS = [
  {
    q: 'Do you handle multi-state professional tax?',
    a: 'Yes. PT slabs, deduction months and return frequency differ by state, and each is configured against the employee’s work location rather than the registered office. Maharashtra, Karnataka, West Bengal, Tamil Nadu, Telangana, Gujarat and Madhya Pradesh are supported out of the box.',
  },
  {
    q: 'What happens if an employee crosses the ESIC wage threshold mid-contribution-period?',
    a: 'Contribution continues until the end of the running contribution period (April–September or October–March), which is what the ESI Act requires. The system holds the employee in scope rather than dropping them the month their gross crosses ₹21,000.',
  },
  {
    q: 'Can employees switch between the old and new tax regime?',
    a: 'Employees declare their regime at the start of the financial year and the TDS computation follows that election. Where a change is permissible, the system recomputes the year-to-date liability and spreads the difference across the remaining months rather than landing it all in March.',
  },
  {
    q: 'How is the gratuity provision handled?',
    a: 'A month-on-month provision is carried per employee based on completed service and current basic + DA, so the balance sheet number is always live. On exit after five years of continuous service, 15 days’ wages per completed year is computed automatically and flows into the full-and-final settlement.',
  },
  {
    q: 'Who files the returns — you or us?',
    a: 'On Essential and Growth, we generate the filing-ready files (ECR text file, ESIC return, 24Q FVU) and your team files them. On Enterprise, our compliance officer files on your behalf under your credentials and shares the acknowledgement within the same cycle.',
  },
  {
    q: 'What does implementation actually require from our side?',
    a: 'Three things: your last three payroll registers, the employee master with statutory identifiers, and one person who can sign off the parallel-run variance report. Everything else is on us.',
  },
]

/* ------------------------------------------------------- JSX-built mockups */

/** Payroll run summary — the hero mockup. No screenshots anywhere on this page. */
function PayrollRunMockup() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/25 to-cyan-500/25 rounded-3xl blur-2xl scale-95" />
      <div className="relative rounded-3xl bg-white shadow-2xl shadow-black/40 border border-white/10 overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-gray-900">
              Payroll run — March 2026
            </div>
            <div className="text-xs text-gray-500">
              Workora Technologies Pvt Ltd · Maharashtra
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
            Awaiting approval
          </span>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="text-xs text-gray-500 mb-1">Headcount</div>
              <div className="text-2xl font-bold text-gray-900">412</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="text-xs text-gray-500 mb-1">Gross payable</div>
              <div className="text-2xl font-bold text-gray-900">₹3.84 Cr</div>
            </div>
          </div>

          <div className="space-y-2.5">
            {[
              { label: 'Employee PF (12%)', value: '₹21,48,600', width: '62%', tone: 'bg-blue-500' },
              { label: 'ESIC (0.75%)', value: '₹1,92,400', width: '18%', tone: 'bg-emerald-500' },
              { label: 'Professional tax', value: '₹78,200', width: '11%', tone: 'bg-violet-500' },
              { label: 'TDS — Section 192', value: '₹46,12,900', width: '88%', tone: 'bg-amber-500' },
            ].map((row) => (
              <div key={row.label}>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-gray-600">{row.label}</span>
                  <span className="font-semibold text-gray-900">{row.value}</span>
                </div>
                <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${row.tone}`}
                    style={{ width: row.width }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500">Net disbursement</div>
              <div className="text-xl font-bold text-[#3557C1]">₹3,13,67,900</div>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold">
              <Check size={14} />
              Variance ₹0
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 hidden sm:block animate-float">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <Shield size={18} className="text-emerald-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500">Filings this cycle</div>
            <div className="text-sm font-bold text-gray-900">6 of 6 on time</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Week attendance strip — P / WFH / L / A cells. */
function AttendanceMockup() {
  const people = [
    { name: 'Rhea Menon', days: ['P', 'P', 'W', 'P', 'P'] },
    { name: 'Karan Bhatia', days: ['P', 'L', 'L', 'P', 'P'] },
    { name: 'Sana Qureshi', days: ['W', 'P', 'P', 'P', 'W'] },
    { name: 'Vivek Nair', days: ['P', 'P', 'P', 'A', 'P'] },
    { name: 'Ananya Ghosh', days: ['P', 'P', 'P', 'P', 'P'] },
  ]
  const tone = {
    P: 'bg-emerald-100 text-emerald-700',
    W: 'bg-blue-100 text-blue-700',
    L: 'bg-amber-100 text-amber-700',
    A: 'bg-rose-100 text-rose-700',
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h4 className="font-bold text-gray-900">Attendance — week 11</h4>
          <p className="text-xs text-gray-500">Mumbai · general shift</p>
        </div>
        <Clock size={18} className="text-[#3557C1]" />
      </div>

      <div className="grid grid-cols-[1fr_repeat(5,2rem)] gap-2 items-center text-xs">
        <span />
        {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
          <span key={i} className="text-center text-gray-400 font-semibold">
            {day}
          </span>
        ))}
        {people.map((person) => (
          <FragmentRow key={person.name} person={person} tone={tone} />
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap gap-3 text-[11px]">
        {[
          ['Present', 'bg-emerald-100 text-emerald-700'],
          ['WFH', 'bg-blue-100 text-blue-700'],
          ['Leave', 'bg-amber-100 text-amber-700'],
          ['Absent', 'bg-rose-100 text-rose-700'],
        ].map(([label, cls]) => (
          <span key={label} className="flex items-center gap-1.5 text-gray-500">
            <span className={`w-3 h-3 rounded ${cls.split(' ')[0]}`} />
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

function FragmentRow({ person, tone }) {
  return (
    <>
      <span className="text-gray-700 truncate pr-2">{person.name}</span>
      {person.days.map((day, i) => (
        <span
          key={i}
          className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${tone[day]}`}
        >
          {day}
        </span>
      ))}
    </>
  )
}

/** Leave balances. */
function LeaveMockup() {
  const rows = [
    { type: 'Earned leave', opening: 24, taken: 9, balance: 15 },
    { type: 'Casual leave', opening: 6, taken: 4, balance: 2 },
    { type: 'Sick leave', opening: 6, taken: 1, balance: 5 },
    { type: 'Comp-off', opening: 3, taken: 3, balance: 0 },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h4 className="font-bold text-gray-900">Leave balance</h4>
          <p className="text-xs text-gray-500">FY 2025–26 · as on 31 Mar</p>
        </div>
        <CalendarClock size={18} className="text-[#3557C1]" />
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs text-gray-400 uppercase tracking-wider">
            <th className="text-left font-semibold pb-3">Type</th>
            <th className="text-right font-semibold pb-3">Opening</th>
            <th className="text-right font-semibold pb-3">Taken</th>
            <th className="text-right font-semibold pb-3">Balance</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row) => (
            <tr key={row.type}>
              <td className="py-3 text-gray-700">{row.type}</td>
              <td className="py-3 text-right text-gray-500">{row.opening}</td>
              <td className="py-3 text-right text-gray-500">{row.taken}</td>
              <td className="py-3 text-right font-bold text-gray-900">
                {row.balance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-800">
        15 days carry forward to FY 2026–27. Balance above the 30-day cap is
        encashed with the April run.
      </div>
    </div>
  )
}

/** CSS-only headcount donut. */
function HeadcountDonut() {
  const segments = [
    { label: 'On roll', value: 412, color: '#3557C1' },
    { label: 'Contract', value: 96, color: '#00b7d7' },
    { label: 'Interns', value: 34, color: '#8d54ff' },
    { label: 'Notice period', value: 18, color: '#f99c00' },
  ]
  const total = segments.reduce((sum, s) => sum + s.value, 0)
  let cursor = 0
  const stops = segments
    .map((s) => {
      const start = (cursor / total) * 100
      cursor += s.value
      const end = (cursor / total) * 100
      return `${s.color} ${start}% ${end}%`
    })
    .join(', ')

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h4 className="font-bold text-gray-900">Headcount split</h4>
          <p className="text-xs text-gray-500">All entities</p>
        </div>
        <Users size={18} className="text-[#3557C1]" />
      </div>

      <div className="flex items-center gap-6">
        <div
          className="relative w-32 h-32 rounded-full shrink-0"
          style={{ background: `conic-gradient(${stops})` }}
        >
          <div className="absolute inset-[18%] bg-white rounded-full flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-gray-900">{total}</span>
            <span className="text-[10px] text-gray-400">total</span>
          </div>
        </div>

        <ul className="space-y-2.5 text-sm flex-1">
          {segments.map((s) => (
            <li key={s.label} className="flex items-center gap-2.5">
              <span
                className="w-3 h-3 rounded-sm shrink-0"
                style={{ background: s.color }}
              />
              <span className="text-gray-600 flex-1">{s.label}</span>
              <span className="font-semibold text-gray-900">{s.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------- page */

export default function HROperations() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a1628] via-[#162a50] to-[#1e3a6e] overflow-hidden">
        <Ambience />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-7">
              <div className="animate-fadeInUp">
                <Badge icon={Sparkles}>Workora HR Operations</Badge>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] animate-fadeInUp"
                style={{ animationDelay: '0.15s' }}
              >
                Payroll that closes
                <span className="block mt-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
                  with zero variance.
                </span>
              </h1>

              <p
                className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg animate-fadeInUp"
                style={{ animationDelay: '0.3s' }}
              >
                Payroll, attendance, leave, performance and the full statutory
                stack — PF, ESIC, professional tax, TDS, Form 16 — computed
                inside one run, for teams from 25 to 25,000 across every Indian
                state you operate in.
              </p>

              <div
                className="flex flex-wrap gap-4 pt-2 animate-fadeInUp"
                style={{ animationDelay: '0.45s' }}
              >
                <PrimaryButton href="mailto:info@workoraindia.com?subject=HR%20Operations%20demo">
                  Book a walkthrough
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </PrimaryButton>
                <GhostButton href="#compliance">See compliance coverage</GhostButton>
              </div>

              <div
                className="flex flex-wrap gap-x-8 gap-y-3 pt-6 text-sm text-blue-100/60 animate-fadeInUp"
                style={{ animationDelay: '0.6s' }}
              >
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-400" />
                  3-week implementation
                </span>
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-400" />
                  Parallel run before go-live
                </span>
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-400" />
                  Filing-ready ECR, 24Q, Form 16
                </span>
              </div>
            </div>

            <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <PayrollRunMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Modules */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Modules"
            title="Six modules, one employee record"
            subtitle="Attendance feeds leave, leave feeds payroll, payroll feeds compliance. Nothing is re-keyed between them, so nothing drifts."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((module) => (
              <div
                key={module.title}
                className="card-hover group bg-white rounded-2xl p-7 border border-gray-200 hover:border-transparent hover:shadow-xl hover:shadow-black/5"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <module.icon size={26} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {module.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {module.body}
                </p>
                <ul className="space-y-2">
                  {module.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-gray-500"
                    >
                      <Check size={15} className="text-[#3557C1] mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Compliance */}
      <section id="compliance" className="bg-gray-50 py-20 md:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="India statutory coverage"
            title="The rates and dates, in the product"
            subtitle="Indian payroll is not payroll plus a compliance add-on. Every rate, ceiling and due date below is computed inside the run and reconciled before it closes."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {STATUTES.map((statute) => (
                <div
                  key={statute.code}
                  className="hover-lift bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center ${statute.accent}`}
                    >
                      <statute.icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <div className="font-bold text-gray-900 leading-tight">
                        {statute.code}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {statute.name}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {statute.detail}
                  </p>
                  <div className="pt-3 border-t border-gray-100 flex items-start gap-2 text-xs text-gray-500">
                    <CalendarClock size={14} className="text-[#3557C1] mt-0.5 shrink-0" />
                    {statute.due}
                  </div>
                </div>
              ))}
            </div>

            {/* Due-date rail */}
            <div className="lg:sticky lg:top-28 h-fit">
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162a50] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-1">Every month, in order</h3>
                <p className="text-sm text-blue-100/60 mb-6">
                  The recurring filing calendar we run to.
                </p>

                <ol className="relative space-y-5 pl-6 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-white/15">
                  {CALENDAR.map((item) => (
                    <li key={item.task} className="relative">
                      <span className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-blue-400 ring-4 ring-[#0a1628]" />
                      <div className="text-sm font-bold text-white">
                        {item.day}
                      </div>
                      <div className="text-sm text-blue-100/70 leading-snug">
                        {item.task}
                      </div>
                      <div className="text-[11px] text-blue-300/60 mt-1">
                        {item.tag}
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-blue-100/50">
                  Also maintained: Shops &amp; Establishments registers, POSH
                  committee constitution and annual return, and Labour Welfare
                  Fund where the state levies it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Dashboards */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Inside the product"
            title="What your HR team looks at daily"
            subtitle="Every view below is the real layout, rebuilt here in the browser."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AttendanceMockup />
            <LeaveMockup />
            <HeadcountDonut />
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Download,
                title: 'Filing-ready exports',
                body: 'ECR text file, ESIC return, 24Q FVU and the bank advice, generated from the closed run — not rebuilt in Excel afterwards.',
              },
              {
                icon: LogOut,
                title: 'Full & final in one screen',
                body: 'Notice recovery, leave encashment, gratuity and pending reimbursements settled together, with the exit letter generated in-line.',
              },
              {
                icon: FileText,
                title: 'Audit trail on everything',
                body: 'Who changed a salary structure, when, and what it was before. Every payroll run is locked and versioned at approval.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-[#3557C1]" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Implementation */}
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
            eyebrow="Implementation"
            title="Live in three weeks"
            subtitle="We do not go live on a promise. We go live after a parallel run reconciles to zero, employee by employee."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {ROLLOUT.map((phase) => (
              <div
                key={phase.week}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-white/25 transition-all"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <phase.icon size={24} className="text-blue-300" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-blue-300/70 tracking-widest uppercase">
                      {phase.week}
                    </div>
                    <h3 className="text-white font-bold text-lg">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-blue-100/60 leading-relaxed mb-5">
                  {phase.body}
                </p>
                <ul className="space-y-2.5">
                  {phase.owned.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-blue-100/75"
                    >
                      <Check size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Plans */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Plans"
            title="Priced per employee, billed annually"
            subtitle="Minimum 25 employees. Implementation is a one-time fee quoted against your entity and state count — no surprise line items."
          />

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 border transition-all ${
                  plan.featured
                    ? 'bg-gradient-to-br from-[#0a1628] to-[#162a50] border-transparent text-white shadow-2xl shadow-[#3557C1]/20 md:-mt-4 md:pb-10'
                    : 'bg-white border-gray-200 hover-lift'
                }`}
              >
                {plan.featured && (
                  <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-semibold">
                    Most chosen
                  </span>
                )}
                <h3
                  className={`text-lg font-bold mb-1 ${plan.featured ? 'text-white' : 'text-gray-900'}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 leading-relaxed ${plan.featured ? 'text-blue-100/70' : 'text-gray-600'}`}
                >
                  {plan.body}
                </p>

                <div className="mb-6">
                  <span
                    className={`text-4xl font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`block text-xs mt-1 ${plan.featured ? 'text-blue-100/50' : 'text-gray-500'}`}
                  >
                    {plan.unit}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 text-sm ${plan.featured ? 'text-blue-100/80' : 'text-gray-600'}`}
                    >
                      <Check
                        size={15}
                        className={`mt-0.5 shrink-0 ${plan.featured ? 'text-emerald-400' : 'text-[#3557C1]'}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:info@workoraindia.com?subject=${encodeURIComponent(
                    `HR Operations — ${plan.name}`,
                  )}`}
                  className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                    plan.featured
                      ? 'bg-white text-[#0a1628] hover:bg-blue-50'
                      : 'bg-[#3557C1]/10 text-[#3557C1] hover:bg-[#3557C1] hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Questions"
            title="The ones HR heads actually ask"
          />

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const open = openFaq === faq.q
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition-all ${
                    open
                      ? 'border-[#3557C1]/40 bg-white shadow-lg shadow-[#3557C1]/5'
                      : 'border-gray-200 bg-white hover:border-[#3557C1]/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : faq.q)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-4 text-left p-5"
                  >
                    <span className="font-semibold text-gray-900">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#3557C1] shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABand
        title="Bring us your last three payroll runs"
        subtitle="We will rebuild them in the product and show you the variance report before you commit to anything."
        primary={
          <PrimaryButton href="mailto:info@workoraindia.com?subject=HR%20Operations%20walkthrough">
            Book a walkthrough
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </PrimaryButton>
        }
        secondary={<GhostButton href="#compliance">Review coverage first</GhostButton>}
      />
    </>
  )
}
