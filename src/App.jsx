import { useEffect, useRef, useState } from 'react'
import { personalInfo, skills, projects, experience, education, navLinks } from './data'
import myPic from './assets/mypic.jfif'
import {
  IconGithub, IconLinkedin, IconFacebook, IconMail, IconArrowUpRight,
  IconMapPin, IconBriefcase, IconCode, IconGraduationCap,
  IconUsers, IconHospital, IconCoffee, IconCheckSquare, IconShoppingCart,
} from './Icons'
import './App.css'

const projectIconMap = {
  users:    <IconUsers       width={22} height={22} />,
  hospital: <IconHospital    width={22} height={22} />,
  coffee:   <IconCoffee      width={22} height={22} />,
  check:    <IconCheckSquare width={22} height={22} />,
  cart:     <IconShoppingCart width={22} height={22} />,
}

/* ── Scroll-reveal hook ── */
let revealObserver = null
function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
  }
  return revealObserver
}

function useReveal(containerRef) {
  useEffect(() => {
    const root = containerRef?.current || document
    const els = root.querySelectorAll('.reveal:not(.visible)')
    const io = getRevealObserver()
    els.forEach((el) => io.observe(el))
    return () => els.forEach((el) => io.unobserve(el))
  }, [containerRef])
}

/* ── Custom Cursor ── */
function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top = e.clientY + 'px'
      }
    }
    const tick = () => {
      if (ring.current) {
        ring.current.style.left = pos.current.x + 'px'
        ring.current.style.top = pos.current.y + 'px'
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    const over = () => document.body.classList.add('cursor-hover')
    const out  = () => document.body.classList.remove('cursor-hover')

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a,button').forEach((el) => {
      el.addEventListener('mouseenter', over)
      el.addEventListener('mouseleave', out)
    })
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div className="cursor" aria-hidden="true">
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </div>
  )
}

/* ── Navbar ── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map((l) => document.querySelector(l.href))
      sections.forEach((s) => {
        if (!s) return
        const rect = s.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom > 100) setActive(s.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container navbar__inner">
        <span className="navbar__logo gradient-text" aria-label={personalInfo.name}>
          {personalInfo.name.split(' ')[0]}<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <ul className="navbar__links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={active === l.href.slice(1) ? { color: 'var(--text-h)' } : {}}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={personalInfo.resume} className="btn btn-outline navbar__cta">
          Resume <IconArrowUpRight className="icon-sm" />
        </a>
      </div>
    </nav>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section id="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__eyebrow" role="status">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Available for work
          </div>

          <div className="win hero__terminal">
            <div className="win__bar">
              <span className="win__dots" aria-hidden="true"><i /><i /><i /></span>
              <span className="win__title">~/{personalInfo.name.split(' ')[0].toLowerCase()} — intro.sh</span>
            </div>
            <div className="win__body">
              <p className="term-line">
                <span className="term-prompt">$</span> whoami
              </p>

              <h1 className="hero__name">
                Hi, I'm{' '}
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              <p className="hero__title">
                <span className="token-comment">// </span>{personalInfo.title}
              </p>

              <p className="hero__bio">{personalInfo.bio}</p>

              <div className="hero__actions">
                <a href="#projects" className="btn btn-primary">
                  View My Work <IconArrowUpRight className="icon-sm" />
                </a>
                <a href="#contact" className="btn btn-outline">Get in Touch</a>
              </div>

              <nav className="hero__social" aria-label="Social links">
                <a href={personalInfo.github} target="_blank" rel="noreferrer">
                  <IconGithub className="icon-sm" /> GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                  <IconLinkedin className="icon-sm" /> LinkedIn
                </a>
                <a href={personalInfo.facebook} target="_blank" rel="noreferrer">
                  <IconFacebook className="icon-sm" /> Facebook
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="hero__avatar-wrap">
          <img
            src={myPic}
            alt={`${personalInfo.name} profile photo`}
            className="hero__avatar"
          />
          <span className="hero__avatar-badge">
            <span className="hero__avatar-badge-dot" aria-hidden="true" />
            Available
          </span>
        </div>
      </div>
    </section>
  )
}

/* ── About ── */
function About() {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <section id="about" ref={ref}>
      <div className="container">
        <p className="section-label reveal">About me</p>
        <h2 className="section-title reveal reveal-delay-1">Who I am</h2>
        <div className="about__grid">
          <div className="about__text reveal reveal-delay-1">
            <p>{personalInfo.bio}</p>
            <ul className="about__meta">
              <li>
                <IconMapPin className="icon-sm" />
                <span>Location</span>{personalInfo.location}
              </li>
              <li>
                <IconMail className="icon-sm" />
                <span>Email</span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </li>
              <li>
                <IconBriefcase className="icon-sm" />
                <span>Status</span>Open to opportunities
              </li>
            </ul>
          </div>

          <div className="glass-card about__edu reveal reveal-delay-2">
            {education.map((e) => (
              <div className="about__edu-item" key={e.id}>
                <p className="section-label" style={{ gap: 6 }}>
                  <IconGraduationCap className="icon-sm" />
                  {e.degree ? 'Degree' : 'Strand'}
                </p>
                <h3>{e.degree || e.Strand}</h3>
                <p>{e.school}</p>
                <p>{e.location}</p>
                <span className="edu-year">{e.start} – {e.end}</span>
                {e.notes && <p className="edu-notes">{e.notes}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Skills ── */
function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))]
  const [activeTab, setActiveTab] = useState('All')
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) io.observe(sectionRef.current)
    return () => io.disconnect()
  }, [])

  const tabs = ['All', ...categories]
  const filtered = activeTab === 'All'
    ? skills
    : skills.filter((s) => s.category === activeTab)

  const grouped = (activeTab === 'All' ? categories : [activeTab]).map((cat) => ({
    cat,
    items: filtered.filter((s) => s.category === cat),
  })).filter((g) => g.items.length > 0)

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <p className="section-label reveal">What I work with</p>
        <h2 className="section-title reveal reveal-delay-1">Skills</h2>

        <div className="skills__tabs reveal reveal-delay-1" role="tablist" aria-label="Skill categories">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={activeTab === t}
              className={`skills__tab${activeTab === t ? ' active' : ''}`}
              onClick={() => setActiveTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="skills__grid">
          {grouped.map(({ cat, items }, gi) => (
            <div key={cat} className={`glass-card skills__group reveal reveal-delay-${Math.min(gi + 1, 3)}`}>
              <h3 className="skills__cat">
                <IconCode className="icon-sm" />
                {cat}
              </h3>
              <ul className="skills__list">
                {items.map((s) => (
                  <li key={s.name}>
                    <div className="skill__header">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="skill__bar" role="progressbar" aria-valuenow={s.level} aria-valuemin={0} aria-valuemax={100} aria-label={s.name}>
                      <div
                        className="skill__fill"
                        style={{ width: animated ? `${s.level}%` : '0%' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Projects ── */
function Projects() {
  const ref = useRef(null)
  useReveal(ref)
  const [filter, setFilter] = useState('featured')
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label reveal">Things I've built</p>
        <h2 className="section-title reveal reveal-delay-1">Projects</h2>

        <div className="projects__filters reveal reveal-delay-1" role="group" aria-label="Project filter">
          {['featured', 'all'].map((f) => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f === 'featured' ? '★ Featured' : 'All Projects'}
            </button>
          ))}
        </div>

        <div className="projects__grid" ref={ref}>
          {filtered.map((p, i) => (
            <article
              key={p.id}
              className="glass-card project-card"
            >
              <div className="project-card__icon">
                {projectIconMap[p.icon]}
              </div>
              <div className="project-card__header">
                <h3>{p.title}</h3>
                <div className="project-card__links">
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} source code`} title="Source Code">
                    <IconGithub className="icon-sm" />
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`} title="Live Demo">
                      <IconArrowUpRight className="icon-sm" />
                    </a>
                  )}
                </div>
              </div>
              <p>{p.description}</p>
              <ul className="project-card__tech" aria-label="Technologies used">
                {p.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Experience ── */
function Experience() {
  const ref = useRef(null)
  useReveal(ref)
  const fmt = (dateStr) => {
    if (!dateStr) return 'Present'
    return dateStr.split('-')[0]
  }

  return (
    <section id="experience">
      <div className="container">
        <p className="section-label reveal">Where I've worked</p>
        <h2 className="section-title reveal reveal-delay-1">Experience</h2>
        <div className="timeline" ref={ref}>
          {experience.map((e, i) => (
            <div key={e.id} className={`timeline__item glass-card reveal reveal-delay-${Math.min(i + 1, 3)}`}>
              <div className="timeline__meta">
                <span className="timeline__date">
                  {e.start ? `${fmt(e.start)} — ${fmt(e.end)}` : fmt(e.end)}
                </span>
                <span className="timeline__type">
                  <IconBriefcase className="icon-sm" />
                  {e.type}
                </span>
              </div>
              <h3>{e.role}</h3>
              <p className="timeline__company">{e.company} · {e.location}</p>
              <p>{e.description}</p>
              <ul className="project-card__tech" aria-label="Technologies used">
                {e.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Contact ── */
function Contact() {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <section id="contact" ref={ref}>
      <div className="container contact__inner">
        <p className="section-label reveal">Get in touch</p>
        <h2 className="contact__title gradient-text reveal reveal-delay-1">
          Let's build something together.
        </h2>
        <p className="contact__sub reveal reveal-delay-2">
          Open to new opportunities, collaborations, or just a good conversation about tech. My inbox is always open.
        </p>
        <a href={`mailto:${personalInfo.email}`} className="btn btn-primary reveal reveal-delay-2">
          <IconMail className="icon-sm" /> Say Hello
        </a>
        <nav className="contact__links reveal reveal-delay-3" aria-label="Social links">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact__link">
            <IconGithub className="icon-sm" /> GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact__link">
            <IconLinkedin className="icon-sm" /> LinkedIn
          </a>
          <a href={personalInfo.facebook} target="_blank" rel="noreferrer" className="contact__link">
            <IconFacebook className="icon-sm" /> Facebook
          </a>
        </nav>
      </div>
    </section>
  )
}

/* ── App ── */
export default function App() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" aria-hidden="true" />
        <About />
        <div className="section-divider" aria-hidden="true" />
        <Skills />
        <div className="section-divider" aria-hidden="true" />
        <Projects />
        <div className="section-divider" aria-hidden="true" />
        <Experience />
        <div className="section-divider" aria-hidden="true" />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>Designed & built by <span>{personalInfo.name}</span> · {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  )
}
