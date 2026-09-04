import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import logo from '../assets/workora-logo.png'

const NAV_ITEMS = [
  { name: 'Careers', path: '/careers' },
  { name: 'HR Operations', path: '/hr-operations' },
  { name: 'Loopy', path: '/loopy' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/*
            The WORKORA wordmark in the logo PNG is near-black (#2D2D2D), so it
            disappears over the navy hero. Over a transparent header it sits on
            a white plate; once the header itself turns white, the plate goes.
          */}
          <Link to="/careers" className="flex items-center group">
            <div
              className={`relative p-2 rounded-xl transition-all duration-300 ${
                scrolled ? '' : 'bg-white rounded-lg shadow-md'
              }`}
            >
              <img
                src={logo}
                alt="Workora"
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? scrolled
                      ? 'text-[#3557C1] bg-[#3557C1]/10'
                      : 'text-white bg-white/20'
                    : scrolled
                      ? 'text-gray-700 hover:text-[#3557C1] hover:bg-[#3557C1]/5'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:info@workoraindia.com"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#3557C1] to-blue-600 text-white px-6 py-3 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#3557C1]/30 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Talk to us</span>
              <ArrowRight
                size={16}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#3557C1] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              scrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <nav
            className={`rounded-2xl p-4 space-y-2 ${
              scrolled ? 'bg-gray-50' : 'bg-[#1a2744]/95 backdrop-blur-xl'
            }`}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive(item.path)
                    ? 'text-[#3557C1] bg-[#3557C1]/10'
                    : scrolled
                      ? 'text-gray-700 hover:bg-white'
                      : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="mailto:info@workoraindia.com"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#3557C1] to-blue-600 text-white px-6 py-3 rounded-xl font-semibold mt-4"
            >
              <span>Talk to us</span>
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
