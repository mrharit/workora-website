import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Mail, MapPin } from 'lucide-react'
import logo from '../assets/workora-logo.png'

/*
 * lucide-react 1.x dropped brand/social logos (Facebook, Instagram,
 * LinkedIn, ...) — they no longer ship in the package. Inlined as minimal
 * SVGs here instead of pulling in a second icon library for three glyphs.
 */
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  )
}
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const EXPLORE = [
  { name: 'Work at Workora', path: '/careers' },
  { name: 'HR Operations', path: '/hr-operations' },
  { name: 'Loopy', path: '/loopy' },
]

const DISCLAIMERS = [
  'Workora never asks candidates for money, deposits, or payments for interviews, job offers, or placements.',
  'Recruitment timelines, hiring volumes, and delivery results may differ based on role requirements, market conditions, industry dynamics, geographic factors, and client specific parameters.',
  'Unless expressly stated otherwise, all material published on this website is owned by Workora. No content may be copied, reused, or distributed without prior written consent.',
  'Statutory rates, thresholds, and filing dates referenced on this website reflect the position at the time of publication and are subject to change by the relevant authority.',
  'By submitting personal or business information through this website, you authorize Workora to collect, store, and use such data for communication and service delivery purposes.',
  'This disclaimer and the use of this website shall be governed by the laws of India.',
]

export default function Footer() {
  const [open, setOpen] = useState(false)

  return (
    <footer className="relative bg-gradient-to-b from-[#0a1628] to-[#0d1e3d] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Always dark behind it, so the plate is unconditional here. */}
            <div className="bg-white p-3 rounded-xl inline-block">
              <img src={logo} alt="Workora" className="h-10 w-auto" />
            </div>
            <p className="text-blue-100/70 leading-relaxed max-w-sm">
              Workora partners with organizations to design unified talent
              ecosystems that deliver consistency, speed, and measurable hiring
              outcomes across roles, functions, and geographies.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-[#0A66C2] hover:text-white transition-all"
              >
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-[#1877F2] hover:text-white transition-all"
              >
                <FacebookIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E4405F] hover:to-[#FCAF45] hover:text-white transition-all"
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Explore</h4>
            <ul className="space-y-3">
              {EXPLORE.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-blue-100/70 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@workoraindia.com"
                className="flex items-center gap-3 text-blue-100/70 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <span>info@workoraindia.com</span>
              </a>
              <a
                href="mailto:careers@workoraindia.com"
                className="flex items-center gap-3 text-blue-100/70 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <span>careers@workoraindia.com</span>
              </a>
              <div className="flex items-center gap-3 text-blue-100/70">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-blue-400" />
                </div>
                <span>Andheri East, Mumbai 400093</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="flex items-center gap-3 text-blue-100/70 hover:text-white transition-colors w-full"
          >
            <span className="text-sm font-semibold uppercase tracking-wider">
              Disclaimer
            </span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              open ? 'max-h-[600px] opacity-100 mt-5' : 'max-h-0 opacity-0'
            }`}
          >
            <ol className="list-decimal list-inside space-y-3 text-sm text-blue-100/60 leading-relaxed">
              {DISCLAIMERS.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-100/50 text-sm">
            © {new Date().getFullYear()} Workora. All rights reserved.
          </p>
          <p className="text-blue-100/50 text-sm">
            Built in Mumbai for teams hiring across India.
          </p>
        </div>
      </div>
    </footer>
  )
}
