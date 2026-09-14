import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ChromeScene from './components/ChromeScene.jsx'
import Cursor from './components/Cursor.jsx'
import ProjectVisual from './components/ProjectVisual.jsx'
import { getProject, projects } from './data/projects.js'

gsap.registerPlugin(ScrollTrigger)

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { scrollTo({ top: 0 }); document.body.dataset.route = pathname }, [pathname])
  return null
}

function Loader() {
  const [done, setDone] = useState(sessionStorage.getItem('seen-loader') === '1')
  useEffect(() => {
    if (done) return
    const timer = setTimeout(() => { sessionStorage.setItem('seen-loader', '1'); setDone(true) }, 1450)
    return () => clearTimeout(timer)
  }, [done])
  if (done) return null
  return <div className="loader" aria-label="Loading portfolio"><div className="loader-name">PRASHANT NIKAM</div><div className="loader-count"><span>00</span><span>23</span><span>48</span><span>76</span><span>100</span></div></div>
}

function Nav() {
  const [open, setOpen] = useState(false)
  return <header className="nav"><Link to="/" className="nav-brand">PN<span>®</span></Link><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open}>MENU</button><nav className={open ? 'open' : ''} onClick={() => setOpen(false)}><Link to="/#work">WORK</Link><Link to="/#about">ABOUT</Link><Link to="/#contact">CONTACT</Link></nav></header>
}

function Home() {
  const scope = useRef()
  useLayoutEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-line span', { yPercent: 120, duration: 1.2, stagger: .08, ease: 'power4.out', delay: 1.25 })
      gsap.from('.hero-meta > *', { y: 20, opacity: 0, duration: .8, stagger: .08, delay: 1.65 })
      gsap.utils.toArray('[data-reveal]').forEach((el) => gsap.from(el, { y: 70, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%' } }))
      gsap.to('.hero-scene', { yPercent: 28, rotate: 8, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
      const track = document.querySelector('.horizontal-track')
      if (track && innerWidth > 760) gsap.to(track, { x: () => -(track.scrollWidth - innerWidth + 48), ease: 'none', scrollTrigger: { trigger: '.horizontal', start: 'top top', end: () => `+=${track.scrollWidth}`, scrub: 1, pin: true, invalidateOnRefresh: true } })
    }, scope)
    return () => ctx.revert()
  }, [])

  return <main ref={scope}>
    <Loader />
    <section className="hero">
      <div className="hero-kicker">PORTFOLIO / 2026</div>
      <div className="hero-scene"><ChromeScene /></div>
      <h1><span className="hero-line"><span>PRASHANT</span></span><span className="hero-line indent"><span>NIKAM</span></span></h1>
      <div className="hero-meta"><p>GRAPHIC &<br />ADVERTISING DESIGNER</p><p>Creating visual identities, campaigns<br />and experiences built to be noticed.</p><a href="#work">EXPLORE WORK <b>↓</b></a></div>
    </section>

    <section className="manifesto section-pad">
      <p className="eyebrow">01 / PHILOSOPHY</p>
      <h2 data-reveal>DESIGN ISN'T JUST<br />WHAT YOU SEE.<br /><em>IT'S WHAT STAYS</em><br />WITH YOU.</h2>
      <p className="manifesto-copy" data-reveal>I create visual communication that connects ideas, brands and people through thoughtful design.</p>
    </section>

    <section id="work" className="work section-pad">
      <div className="section-head"><p className="eyebrow">02 / SELECTED WORK</p><p>A selection of identity, advertising, packaging and visual communication projects.</p></div>
      <div className="work-list">
        {projects.slice(0, 4).map((project, index) => <Link to={`/project/${project.slug}`} className={`project-card layout-${index + 1}`} key={project.slug} data-cursor="view" data-reveal>
          <ProjectVisual project={project} />
          <div className="project-info"><span>{project.id}</span><h3>{project.title}</h3><p>{project.category} · {project.year}</p><b>↗</b></div>
        </Link>)}
      </div>
    </section>

    <section className="horizontal">
      <div className="horizontal-intro"><p className="eyebrow">CAMPAIGN / MOTION</p><h2>STORIES<br />THAT MOVE.</h2></div>
      <div className="horizontal-track">
        {projects.slice(3).map((project) => <Link to={`/project/${project.slug}`} className="horizontal-card" key={project.slug} data-cursor="view"><ProjectVisual project={project} /><span>{project.title} — {project.category}</span></Link>)}
      </div>
    </section>

    <section className="services section-pad">
      <p className="eyebrow">03 / EXPERTISE</p><h2 data-reveal>WHAT I DO</h2>
      {['BRAND IDENTITY','ADVERTISING','PACKAGING','SOCIAL MEDIA','VISUAL COMMUNICATION'].map((item, i) => <div className="service-row" key={item}><span>0{i+1}</span><h3>{item}</h3><b>↗</b></div>)}
    </section>

    <section id="about" className="about section-pad">
      <div><p className="eyebrow">04 / ABOUT</p><h2 data-reveal>I TURN IDEAS INTO VISUALS PEOPLE CAN <em>FEEL, UNDERSTAND</em> AND REMEMBER.</h2></div>
      <div className="portrait" aria-label="Portrait placeholder"><span>YOUR<br />PORTRAIT</span></div>
      <div className="bio" data-reveal><p>I'm Prashant Nikam, a Graphic & Advertising Designer from Maharashtra, India. My work lives where strategy, visual identity and art direction meet.</p><p>With four years of academic experience, agency exposure and freelance practice, I create branding, packaging, advertising and social campaigns designed to connect.</p></div>
    </section>

    <section className="timeline section-pad"><p className="eyebrow">05 / PATH</p>{[['2026','SELECTED — MAHARASHTRA STATE ART EXHIBITION'],['2026','GRAPHIC DESIGN INTERNSHIP · KLICKMAGNET'],['2023—26','FREELANCE DESIGN PRACTICE'],['2022—26','G.D. ART · ADVERTISING DESIGN']].map(([year,text])=><div className="timeline-row" key={text}><span>{year}</span><p>{text}</p></div>)}</section>

    <section className="capabilities"><div className="cap-track">PHOTOSHOP · ILLUSTRATOR · FIGMA · PREMIERE PRO · CANVA · <span>PHOTOSHOP · ILLUSTRATOR · FIGMA · PREMIERE PRO · CANVA ·</span></div></section>

    <section className="climax"><div className="climax-scene"><ChromeScene compact /></div><p className="eyebrow">06 / DESIGN IN MOTION</p><h2>IDEAS INTO<br /><em>VISUAL</em><br />EXPERIENCES.</h2></section>

    <section id="contact" className="contact section-pad"><p className="eyebrow">AVAILABLE FOR SELECTED PROJECTS</p><h2>HAVE AN IDEA?</h2><h3>LET'S MAKE IT<br /><em>IMPOSSIBLE TO IGNORE.</em></h3><a className="contact-cta" href="mailto:hello@prashantnikam.design">START A PROJECT <span>↗</span></a><footer><span>PRASHANT NIKAM</span><span>GRAPHIC & ADVERTISING DESIGNER</span><span>© {new Date().getFullYear()}</span></footer></section>
  </main>
}

function CaseStudy() {
  const { slug } = useParams(); const project = getProject(slug)
  if (!project) return <main className="not-found"><h1>PROJECT NOT FOUND</h1><Link to="/">BACK HOME</Link></main>
  const current = projects.indexOf(project); const next = projects[(current + 1) % projects.length]
  return <main className="case" style={{'--project-accent': project.accent}}>
    <section className="case-hero"><p className="eyebrow">PROJECT {project.id} / {project.year}</p><h1>{project.title}</h1><div className="case-meta"><p>{project.category}</p><p>{project.role}</p></div><ProjectVisual project={project} className="case-cover" /></section>
    <section className="case-idea section-pad"><p className="eyebrow">THE IDEA</p><h2>{project.concept}</h2><p>{project.overview}</p></section>
    <section className="case-grid section-pad"><div><span>01 / CHALLENGE</span><p>{project.challenge}</p></div><div><span>02 / CREATIVE DIRECTION</span><p>A disciplined visual system pairs confident typography, controlled colour and image-led storytelling to keep every touchpoint recognisable.</p></div><div><span>03 / OUTCOME</span><p>{project.outcome}</p></div></section>
    <section className="gallery section-pad"><ProjectVisual project={project} /><div className="gallery-pair"><ProjectVisual project={project} /><ProjectVisual project={project} /></div><ProjectVisual project={project} /></section>
    <Link to={`/project/${next.slug}`} className="next-project"><p>NEXT PROJECT →</p><h2>{next.title}</h2><ProjectVisual project={next} /></Link>
  </main>
}

export default function App() {
  return <><ScrollTop /><Nav /><Cursor /><Routes><Route path="/" element={<Home />} /><Route path="/project/:slug" element={<CaseStudy />} /><Route path="*" element={<Home />} /></Routes></>
}
