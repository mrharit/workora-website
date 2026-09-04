# Workora Website — Build Spec

Standalone marketing site for Workora. Three routes, one shared shell, visual
language lifted from the live Workora production bundle in `design-reference/`.

This repo is self-contained: its own git repo, its own `.gitignore`, no
dependency on or reference to the Loopy Flask repo or any parent `CLAUDE.md`.
Loopy appears here only as a product Workora markets.

---

## 1. Design system (extracted, not invented)

Every value below was read out of `design-reference/workora.css` and
`design-reference/workora.js`. Do not substitute approximations.

### Typeface

`Parkinsans`, weights 300–800, from Google Fonts:
`https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&display=swap`

Applied globally via `* { font-family: Parkinsans, sans-serif }` — the
production site sets it on the universal selector, not on `body`.

### Colour

| Token | Hex | Use |
|---|---|---|
| `--color-brand` | `#3557C1` | primary; buttons, links, active nav, focus ring, selection |
| `--color-brand-deep` | `#1a3a8f` | gradient partner to brand |
| `--color-brand-soft` | `#5a7fd6` | text-gradient tail, section divider tail |
| `--color-ink-900` | `#0a1628` | darkest navy — hero + footer top |
| `--color-ink-800` | `#0d1e3d` | footer bottom |
| `--color-ink-700` | `#0f2557` | deep panel |
| `--color-ink-600` | `#162a50` | hero mid stop |
| `--color-ink-500` | `#1e3a6e` | hero end stop |
| `--color-ink-panel` | `#1a2744` | mobile menu panel over dark |
| accents | `#3080ff` `#54a2ff` `#00b7d7` `#00bb7f` `#00baa7` `#625fff` `#7d87ff` `#8d54ff` `#ac4bff` `#f99c00` | per-module gradients |

Dark surface gradient (hero):
`bg-gradient-to-br from-[#0a1628] via-[#162a50] to-[#1e3a6e]`

Footer gradient: `bg-gradient-to-b from-[#0a1628] to-[#0d1e3d]`

### Custom CSS layer (reproduce verbatim)

Keyframes `fadeInUp` `fadeInDown` `fadeInLeft` `fadeInRight` `float`
`scaleIn` `shimmer` `gradientMove`, with utilities:

- `.animate-fadeInUp` — `.8s ease-out forwards`
- `.animate-float` — `6s ease-in-out infinite`
- `.animate-scaleIn` — `.6s ease-out forwards`
- `.animate-gradient` — `background-size:200% 200%; 5s infinite`
- `.hover-lift` — `translateY(-8px)` + `0 20px 40px #0000001a` on hover
- `.card-hover` — `translateY(-5px) scale(1.02)`, `.4s cubic-bezier(.4,0,.2,1)`
- `.text-gradient` — `linear-gradient(135deg,#3557c1,#5a7fd6)` clipped to text
- `.section-divider::after` — 100×4px brand gradient bar, centred
- `.btn-primary::before` — white 30% sheen sweeping left→right over `.5s`

Scrollbar: 10px track `#f1f5f9`, thumb `#3557C1` r5, hover `#2a4599`.
`:focus-visible` → `2px solid #3557C1` offset 2. `::selection` → white on
`#3557C1`. `html { scroll-behavior: smooth }`. Under 640px, `h1` forced to
2.5rem and `h2` to 2rem.

### Ambient hero treatment

Three blurred gradient orbs, each `animate-pulse` with staggered
`animationDelay` (0s / 2s / 1s), plus a 1px white grid at `opacity-[0.03]`
and a radial dot pattern at `opacity-[0.02]`, `backgroundSize: 32px 32px`.

---

## 2. Logo fidelity — the plate rule

`design-reference/assets/logowithoutcolor-KlJXGgGs.png` is 636×161 RGBA. Its
dominant opaque pixels are `#2D2D2D` (the WORKORA wordmark) and `#4169E2`
(the mark). **The wordmark is near-black**, so it vanishes on the navy hero.

The production navbar solves this exactly as follows, and this build must
match it:

```jsx
<div className={`relative p-2 rounded-xl transition-all duration-300
  ${scrolled ? "" : "bg-white rounded-lg shadow-md"}`}>
  <img src={logo} alt="Workora Logo"
       className="h-10 w-auto object-contain group-hover:scale-105 transition-transform" />
</div>
```

- **Not scrolled** (transparent header over dark hero) → white plate,
  `rounded-lg`, `shadow-md`.
- **Scrolled** (header is `bg-white/95 backdrop-blur-xl`) → no plate; the
  header itself supplies the light ground.

The footer, always dark, uses the unconditional plate:
`<div className="bg-white p-3 rounded-xl inline-block">` with `h-10 w-auto`.

---

## 3. Shell

### Navbar — `fixed top-0 left-0 right-0 z-50 transition-all duration-500`

- Scroll listener flips `scrolled` at `window.scrollY > 20`.
- Scrolled: `bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5`;
  otherwise `bg-transparent`.
- Bar height `h-20`, container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Links are pill-shaped: `px-4 py-2 rounded-full font-medium`, with the
  four-way active/scrolled colour matrix from the original. Active route
  gets a `w-1 h-1 rounded-full bg-current` dot pinned bottom-centre.
- CTA: `bg-gradient-to-r from-[#3557C1] to-blue-600 text-white px-6 py-3
  rounded-full font-semibold`, hover lifts `-translate-y-0.5` with
  `shadow-[#3557C1]/30`.
- Mobile: `lg:hidden`, max-height transition to `500px` over `500ms`, panel
  is `bg-gray-50` when scrolled else `bg-[#1a2744]/95 backdrop-blur-xl`.
- **Trimmed:** the original's "Our Services" mega-dropdown is dropped — this
  site has three flat routes, so no dropdown state, no sub-items.

Nav items: `Careers` → `/careers`, `HR Operations` → `/hr-operations`,
`Loopy` → `/loopy`. `/` redirects to `/careers`.

### Footer

Keeps the original's dark gradient, radial dot overlay, white logo plate,
blurb, brand-dot link lists (`w-1.5 h-1.5 bg-blue-400 rounded-full` +
`hover:pl-2`), the `w-10 h-10 bg-white/10 rounded-lg` social/contact tiles
with per-network hover colours (`#0A66C2` LinkedIn, `#1877F2` Facebook,
Instagram gradient), and the collapsible disclaimer accordion.

**Trimmed** from five columns to three: brand block (`lg:col-span-2`),
Explore, Contact.

---

## 4. Route: `/careers` — "Work at Workora"

Internal hiring. Workora as employer, not Workora as vendor. No client-facing
service copy on this page.

1. **Hero** — dark, orbs, "We're hiring" badge, headline with `.text-gradient`
   on the second line, two CTAs, right-hand JSX collage (no stock photo).
2. **Stats strip** — 4 counters over the hero fold seam.
3. **Culture pillars** — 6 cards, icon in a gradient tile, `card-hover`.
4. **Benefits** — 8 tiles: ₹5L family floater, 24 earned leave + 10 holidays,
   quarterly closure incentive, ₹25,000/yr L&D wallet, 2 flexible WFH days,
   counselling support, ₹50,000 referral bonus, hardware of choice.
5. **Open roles** — filter chips by team; each row expands (accordion) to
   responsibilities + requirements. All Mumbai-anchored, INR bands:

   | Role | Team | Location | Band |
   |---|---|---|---|
   | Recruitment Consultant — BFSI | Delivery | Andheri East, Mumbai | ₹4.5–7.5 LPA |
   | Senior Recruitment Consultant — Technology | Delivery | Andheri East, Mumbai | ₹8–13 LPA |
   | Sourcing Specialist | Sourcing | Powai, Mumbai | ₹3–5 LPA |
   | Talent Research Analyst | Sourcing | Remote (India) | ₹4–6.5 LPA |
   | Account Manager — Client Success | Client Success | BKC, Mumbai | ₹10–16 LPA |
   | Business Development Manager | Growth | BKC, Mumbai | ₹9–15 LPA |
   | HR Operations Executive | Internal HR | Andheri East, Mumbai | ₹3.5–5.5 LPA |
   | Delivery Manager | Delivery | Thane, Mumbai | ₹14–20 LPA |

6. **Interview process** — 5 stages with durations, as a connected timeline:
   application review (2 working days) → TA intro call (30 min) → craft round
   / live role simulation (60 min) → hiring manager + business round (45 min)
   → offer and documentation (3 working days).
7. **Team voices** — 4 testimonials from Workora employees, with name, role
   and tenure. Distinct from the client testimonials on the production site.
8. **CTA band** → `careers@workoraindia.com`.

## 5. Route: `/hr-operations` — a product Workora sells

Positioned as software plus managed service, not as a staffing service line.

1. **Hero** — headline, sub, CTA, and a JSX payroll-run dashboard floating on
   the right. **Every mockup on this page is built in JSX/CSS**; no
   screenshots are sourced or referenced.
2. **Module grid** — Payroll, Attendance & Shifts, Leave, Performance,
   Onboarding & Exit, Statutory Compliance. Each with its own accent gradient.
3. **India compliance block** — the differentiator. Concrete and checkable:
   - **EPF** — 12% employee + 12% employer, ₹15,000 statutory wage ceiling,
     8.33% to EPS capped at ₹1,250, ECR filed and paid by the **15th**.
   - **ESIC** — 0.75% employee / 3.25% employer, ₹21,000 gross threshold,
     contribution by the **15th**, half-yearly returns.
   - **Professional Tax** — state-wise; Maharashtra ₹200/month (₹300 in
     February) above ₹25,000 monthly salary.
   - **TDS on salary** — Section 192, deposited by the **7th** of the
     following month, **Form 24Q** quarterly (31 Jul / 31 Oct / 31 Jan /
     31 May).
   - **Form 16** — Parts A and B issued to every employee by **15 June**.
   - **Gratuity** — Payment of Gratuity Act 1972, 15 days' wages per
     completed year after 5 years of service.
   - **Bonus** — Payment of Bonus Act 1965, 8.33%–20%, by 30 November.
   - Also: Shops & Establishments registration, POSH committee and annual
     return, LWF where applicable.

   Rendered as a **statutory calendar** (due-date rail) plus a coverage table.
4. **Dashboard mockups (JSX)** — payroll run summary with status pills;
   attendance week strip with P/A/WFH/L cells; leave balance table; a
   compliance calendar; a CSS-only donut for headcount split.
5. **Implementation timeline** — 3 weeks: data migration → parallel run →
   go-live, with what Workora owns at each step.
6. **Plans** — Essential ₹49 / Growth ₹89 per employee per month, Enterprise
   custom. Annual billing note, minimum 25 employees.
7. **FAQ** accordion, then CTA band.

## 6. Route: `/loopy` — the product

Grounded in the real Loopy README, using the real Loopy brand tokens
(`#0A1024` midnight, `#1B2A55` deep indigo, `#6C84D9` periwinkle, `#F4F5F9`
cloud; `Outfit` 600/700/800, wordmark tracking `-0.04em`). Loopy's own
palette takes over this page's hero and accents so it reads as a distinct
product, while the Workora shell (navbar, footer) is unchanged.

1. **Hero** — Loopy midnight→indigo gradient, periwinkle orbs, headline
   "Hiring that starts in a chat", chat-thread mockup on the right.
2. **The problem** — candidates who have never had a proper CV; largely
   tier-2/tier-3 job seekers, disproportionately sales roles.
3. **Candidate journey** — 5 steps as chat bubbles: send CV → parsed →
   email + phone OTP → guided profile form → matched, pinged YES/NO/MAYBE →
   handed back a Loopy Standard CV, regeneratable by chat command.
4. **Recruiter journey** — upload JD → parsed and confirmed → ranked
   candidates with a transparent score breakdown → shortlist, tag,
   bulk-message, export. Rendered as a JSX ranked-candidate table with score
   bars.
5. **Capability grid** — CV/JD parsing with manual fallback, dual-channel OTP
   (email + SMS), one canonical candidate schema across parser/form/matching,
   three matching modes (keyword / skill-pie / department-first), bulk ops
   and xlsx export, role-based access, antivirus and file-type heuristics on
   upload, ATS-friendly Loopy Standard CV PDF, activity logging and
   time-based retention.
6. **Loopy Standard CV** — rendered as a paper-sheet mockup in JSX.
7. **CTA band** in Loopy colours.

---

## 7. Stack and constraints

Pinned exactly — all versions verified present on the registry:

| Package | Version |
|---|---|
| `vite` | 8.2.2 |
| `tailwindcss` + `@tailwindcss/vite` | 4.3.3 |
| `react` / `react-dom` | 19.2.8 |
| `react-router-dom` | 7.18.3 |
| `lucide-react` | 1.41.0 |
| `@vitejs/plugin-react` | 6.1.1 (peer `vite: ^8.0.0`) |

- **Tailwind v4, CSS-first.** No `tailwind.config.js`, no `postcss.config.js`.
  `@import "tailwindcss";` then an `@theme` block for the brand tokens, then a
  plain CSS block for the animation/utility layer above. Wired through
  `@tailwindcss/vite` in `vite.config.js`.
- **PowerShell-safe.** No `&&` in any documented command. Chain with `;` or
  run commands separately.
- Assets are copied into `src/assets/` and `public/` — nothing is read from
  outside this repo at build time.
- Routing: `BrowserRouter`, a `ScrollToTop` effect on `pathname`, and a
  `<Navigate to="/careers" replace />` at `/`.

## 8. Layout

```
workora-website/
├── .gitignore
├── SPEC.md
├── package.json
├── vite.config.js
├── index.html
├── design-reference/          # read-only source of truth, not built
├── public/
│   └── favicon.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   ├── workora-logo.png
    │   └── loopy-icon.svg
    ├── components/
    │   ├── Layout.jsx
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── ScrollToTop.jsx
    │   └── ui.jsx
    └── pages/
        ├── Careers.jsx
        ├── HROperations.jsx
        └── Loopy.jsx
```
