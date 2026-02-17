import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowRight,
  Brain,
  GitBranch,
  Sliders,
  MessagesSquare,
  Phone,
  Zap,
  BarChart3,
  Menu,
  X,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: LandingPage })

// ─── Shared animation variants ─────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

// ─── Navbar ─────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-stone-200/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-emerald-800 tracking-tight">
          civiq
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Features', 'How It Works', 'About'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/ /g, '-')}`}
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Request Demo
          </motion.a>
        </div>

        <button
          className="md:hidden text-stone-600"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white border-b border-stone-200"
          >
            <div className="px-6 pb-4 pt-2 space-y-3">
              {['Features', 'How It Works', 'About'].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/ /g, '-')}`}
                  className="block text-stone-600 text-sm"
                  onClick={() => setOpen(false)}
                >
                  {l}
                </a>
              ))}
              <a
                href="#contact"
                className="block text-center px-4 py-2 bg-emerald-700 text-white text-sm font-medium rounded-lg"
                onClick={() => setOpen(false)}
              >
                Request Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// ─── Hero ───────────────────────────────────────────────────

function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 bg-gradient-to-b from-emerald-50/60 to-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Now in beta — Flossmoor, IL
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 leading-tight tracking-tight mb-6"
          >
            AI agents that manage{' '}
            <span className="text-emerald-700">city government</span> operations
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-lg text-stone-500 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Don't just answer calls and create tickets. Civiq agents triage issues,
            coordinate departments, and resolve problems — autonomously.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
            >
              Request a Demo
            </motion.a>
            <a
              href="#how-it-works"
              className="group flex items-center gap-1.5 px-6 py-3 text-stone-600 hover:text-stone-900 font-medium text-sm transition-colors"
            >
              See How It Works
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Features ───────────────────────────────────────────────

const features = [
  {
    icon: GitBranch,
    title: 'Intelligent Triage',
    desc: 'Issues routed to the right department with full context. No more phone tag between offices.',
  },
  {
    icon: Brain,
    title: 'Total Memory',
    desc: 'When 50 people report the same issue, your agent knows — and gives every caller the latest status.',
  },
  {
    icon: Sliders,
    title: 'Smart Rules',
    desc: '"If water main, escalate immediately." Your conditions, enforced around the clock.',
  },
  {
    icon: MessagesSquare,
    title: 'Department Coordination',
    desc: 'Agents communicate across departments, gather responses, and keep everything moving to resolution.',
  },
]

function Features() {
  return (
    <section id="features" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-emerald-700 mb-2">
            Features
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-stone-900 mb-3"
          >
            Built for how cities actually work
          </motion.h2>
          <motion.p variants={fadeUp} className="text-stone-500 max-w-lg mx-auto">
            Not another chatbot. A system of agents that manage operations end-to-end.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px -8px rgba(0,0,0,0.08)' }}
              className="p-6 rounded-xl border border-stone-200 bg-stone-50/50 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors duration-200 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-1.5">{f.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── How It Works ───────────────────────────────────────────

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'A citizen calls',
    desc: 'Your AI agent answers instantly — 24/7, with the patience and local knowledge of your best staff.',
  },
  {
    num: '02',
    icon: Zap,
    title: 'The agent takes action',
    desc: 'It identifies the issue, checks related reports, and contacts the right department. No bottleneck.',
  },
  {
    num: '03',
    icon: BarChart3,
    title: 'Resolution & insight',
    desc: 'The problem gets fixed. The agent follows up and captures patterns that make your city smarter.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-emerald-700 mb-2">
            How It Works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-stone-900 mb-3"
          >
            From first ring to resolution
          </motion.h2>
          <motion.p variants={fadeUp} className="text-stone-500 max-w-md mx-auto">
            Three steps. Fully autonomous.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mx-auto mb-5">
                <s.icon size={22} />
              </div>
              <span className="text-xs font-mono text-emerald-600 mb-2 block">{s.num}</span>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{s.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── About ──────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.p variants={fadeUp} className="text-sm font-medium text-emerald-700 mb-2">
          About
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-stone-900 mb-6"
        >
          Built by people who ship agents to production
        </motion.h2>
        <motion.p variants={fadeUp} className="text-stone-500 leading-relaxed mb-4">
          We're two brothers who've spent over a year building AI agents across dozens of industries.
          We kept seeing the same pattern: organizations drowning in requests that need to be triaged,
          tracked, and followed up on.
        </motion.p>
        <motion.p variants={fadeUp} className="text-stone-500 leading-relaxed mb-8">
          City governments have it the worst — and deserve the best technology.
          We're in beta with city officials in Flossmoor, Illinois, building every feature
          alongside the people who use them.
        </motion.p>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-9 h-9 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-emerald-700 text-xs font-semibold">
              LG
            </div>
            <div className="w-9 h-9 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-emerald-700 text-xs font-semibold">
              JG
            </div>
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-stone-900">Luke & Josiah Griggs</p>
            <p className="text-xs text-stone-400">Co-founders · Better-Hack '26 Winners</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─── CTA ────────────────────────────────────────────────────

function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-emerald-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Ready to transform your city?
        </motion.h2>
        <motion.p variants={fadeUp} className="text-emerald-200 mb-8 max-w-md mx-auto">
          Start with a 30-day pilot. No setup fees, no credit card.
        </motion.p>

        <motion.form
          variants={fadeUp}
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto"
        >
          <input
            type="email"
            placeholder="your@city.gov"
            className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-300/60 text-sm focus:outline-none focus:border-white/40 transition-colors"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="w-full sm:w-auto px-6 py-3 bg-white text-emerald-800 font-medium text-sm rounded-lg hover:bg-emerald-50 transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            Request Demo
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  )
}

// ─── Footer ─────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-10 px-6 bg-white border-t border-stone-200">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm font-bold text-emerald-800">civiq</span>
        <div className="flex items-center gap-6 text-xs text-stone-400">
          <a href="#features" className="hover:text-stone-600 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-stone-600 transition-colors">How It Works</a>
          <a href="#about" className="hover:text-stone-600 transition-colors">About</a>
          <Link to="/privacy-policy" className="hover:text-stone-600 transition-colors">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-stone-600 transition-colors">Terms &amp; Conditions</Link>
        </div>
        <p className="text-xs text-stone-400">&copy; 2026 Civiq</p>
      </div>
    </footer>
  )
}

// ─── Page ───────────────────────────────────────────────────

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}
