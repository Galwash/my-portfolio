import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
} from "lucide-react";

type Category = "Product" | "Cloud & AI" | "Data & Digital" | "Operations";

type Project = {
  title: string;
  organization: string;
  category: Category;
  period: string;
  visual: string;
  visualLabel: string;
  description: string;
  result?: string;
};

const categories = ["All work", "Product", "Cloud & AI", "Data & Digital", "Operations"] as const;
type Filter = (typeof categories)[number];

const projects: Project[] = [
  {
    title: "PD-S, PD-I & PS-300",
    organization: "Hilti AG · Global product management",
    category: "Product",
    period: "2018—19",
    visual: "laser",
    visualLabel: "MEASURE /\nWITH INTENT",
    description:
      "Supported the product development and launch of Hilti laser distance meters—shaping user stories, product features and global marketing packages.",
    result: "Product promotion contributed to 180% more global customer traffic.",
  },
  {
    title: "Connected measurement",
    organization: "Hilti AG · Master’s thesis research",
    category: "Data & Digital",
    period: "2018—19",
    visual: "connected",
    visualLabel: "FIELD TO\nDIGITAL",
    description:
      "Explored how laser distance meters could work with existing mobile apps, bringing measurement workflows closer to the digital tools construction teams already use.",
    result: "A proposed approach improved measurement accuracy by 15%.",
  },
  {
    title: "Supplier experience",
    organization: "LeaksHub Enterprise · Strategic product & sourcing",
    category: "Operations",
    period: "2021—Present",
    visual: "supply",
    visualLabel: "BETTER\nTOGETHER",
    description:
      "Oversaw supplier relationship management, connecting sourcing priorities with clearer, more effective working relationships across the supply base.",
    result: "Overall supplier satisfaction increased by 20%.",
  },
  {
    title: "Technical field partnership",
    organization: "Hilti Group EMEA · Ghana & UAE",
    category: "Product",
    period: "2019—20",
    visual: "field",
    visualLabel: "BUILT ON\nTRUST",
    description:
      "Connected sales teams with technical decision-makers, supported customers in the field and translated product expertise into stronger account relationships.",
    result: "Client retention rose 25%; issue-resolution time improved 30%.",
  },
  {
    title: "Product data & portfolio flow",
    organization: "Notel Oy · Product management improvement",
    category: "Data & Digital",
    period: "2017",
    visual: "data",
    visualLabel: "MAKE DATA\nWORK BETTER",
    description:
      "Reviewed Product Data Management and Product Portfolio Management processes, then recommended and implemented tools to make day-to-day work more efficient.",
  },
  {
    title: "Delivery capability creation",
    organization: "Haltion · New-product development",
    category: "Operations",
    period: "2016—17",
    visual: "delivery",
    visualLabel: "FROM PLAN\nTO DELIVERY",
    description:
      "Analysed delivery capability creation and helped optimize supply-chain and management processes to strengthen the new-product development flow.",
  },
  {
    title: "Azure cloud & security",
    organization: "Independent technical practice · Microsoft Azure",
    category: "Cloud & AI",
    period: "Ongoing",
    visual: "cloud",
    visualLabel: "CLOUD,\nCONSIDERED",
    description:
      "Building knowledge across Azure infrastructure, monitoring, identity, network security and cloud data—grounded in Microsoft Azure training and hands-on technical learning.",
  },
];

const skillGroups = [
  {
    index: "01",
    title: "Cloud & infrastructure",
    items: ["Microsoft Azure", "Virtual machines", "IaaS · PaaS · SaaS", "CI/CD pipelines", "Azure Monitor", "Cloud storage & data"],
  },
  {
    index: "02",
    title: "Security & identity",
    items: ["Azure Sentinel", "Azure Firewall", "Microsoft Threat Protection", "MFA & identity", "Network security groups", "RBAC · cloud security"],
  },
  {
    index: "03",
    title: "Data & analytics",
    items: ["Python", "R", "SQL", "Microsoft SQL Server", "BigQuery", "Tableau · Excel"],
  },
  {
    index: "04",
    title: "AI & intelligent systems",
    items: ["AI agent systems", "AI automation", "AI generalist", "Agent workflows", "Product management", "Data-driven decisions"],
  },
];

const linkedinUrl = "https://www.linkedin.com/in/abdullatifhussein88/";
const email = "galwash88@hotmail.com";

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Abdul Latif Hussein — back to top">
      <span className="brand-mark" aria-hidden="true"><span>A</span><i>H</i></span>
      <span className="brand-name">Abdul Latif Hussein<span>Portfolio · 2026</span></span>
    </a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card project-card--${project.visual}`} tabIndex={0} aria-label={`${project.title}, ${project.category}`}>
      <div className="project-art" aria-hidden="true">
        <div className="art-topline"><span>SELECTED WORK / {String(index + 1).padStart(2, "0")}</span><span>{project.period}</span></div>
        <div className="art-orbit art-orbit--one" />
        <div className="art-orbit art-orbit--two" />
        <div className="art-symbol">
          {project.visual === "laser" && <><span className="laser-ring" /><span className="laser-dot" /><span className="laser-line" /></>}
          {project.visual === "connected" && <><span className="node node--a" /><span className="node node--b" /><span className="node node--c" /><span className="node-line node-line--a" /><span className="node-line node-line--b" /></>}
          {project.visual === "supply" && <><span className="stack stack--one" /><span className="stack stack--two" /><span className="stack stack--three" /></>}
          {project.visual === "field" && <><span className="field-circle">H</span><span className="field-cross">+</span></>}
          {project.visual === "data" && <><span className="bar bar--one" /><span className="bar bar--two" /><span className="bar bar--three" /><span className="bar bar--four" /></>}
          {project.visual === "delivery" && <><span className="route route--one" /><span className="route route--two" /><span className="route-dot route-dot--a" /><span className="route-dot route-dot--b" /></>}
          {project.visual === "cloud" && <><span className="cloud-shape">✳</span><span className="cloud-code">{`{ agent }`}</span></>}
        </div>
        <p className="art-title">{project.visualLabel.split("\n").map((line) => <span key={line}>{line}</span>)}</p>
        <div className="project-reveal">
          <span className="reveal-kicker">THE THROUGHLINE</span>
          <p>{project.description}</p>
          {project.result && <strong>{project.result}</strong>}
          <span className="reveal-open"><ArrowUpRight size={17} aria-hidden="true" /></span>
        </div>
      </div>
      <div className="project-meta">
        <div><span className="project-organization">{project.organization}</span><h3>{project.title}</h3></div>
        <span className="project-category">{project.category}</span>
      </div>
    </article>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All work");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const visibleProjects = useMemo(
    () => activeFilter === "All work" ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const closeMenu = () => setMenuOpen(false);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const reply = String(form.get("reply") ?? "").trim();
    const subject = String(form.get("subject") ?? "Portfolio enquiry").trim();
    const message = String(form.get("message") ?? "").trim();
    const body = `Hello Abdul,\n\n${message}\n\n— ${name}\n${reply}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="portfolio" id="top">
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Expertise</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-overline"><span className="availability-dot" /> CLOUD · PRODUCT · INTELLIGENT SYSTEMS <span className="hero-index">FINLAND / 60°59′N</span></div>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">A multidisciplinary technology professional</p>
              <h1 id="hero-title">Thoughtful<br /><em>systems.</em><br />Meaningful<br className="mobile-break" /> impact<span className="hero-period">.</span></h1>
              <div className="hero-lower">
              <p className="hero-intro">I’m Abdul Latif Hussein—a cloud and product professional with deep knowledge of AI agent systems, AI automation and the work of an AI generalist.</p>
                <div className="hero-actions">
                  <a className="button button--dark" href="#work">Explore selected work <ArrowDownRight size={16} /></a>
                  <a className="text-link" href="#contact">Start a conversation <ArrowUpRight size={14} /></a>
                </div>
              </div>
            </div>
            <figure className="hero-portrait">
              <img src="/images/hero-portrait.jpeg" alt="Abdul Latif Hussein in an AI workspace, with code and an artificial intelligence illustration on the screens behind him." fetchPriority="high" />
              <figcaption><span><Sparkles size={14} /> AI · CLOUD · AUTOMATION</span><span>Abdul Latif Hussein</span></figcaption>
            </figure>
          </div>
          <div className="hero-baseline"><span>01 / INTRODUCTION</span><span>SCROLL TO EXPLORE <ArrowDownRight size={13} /></span><span>HÄMEENLINNA, FI</span></div>
        </section>

        <section className="metrics-band" aria-label="Selected career outcomes">
          <div className="section-wrap metrics-inner">
            <p className="metrics-label">A few measures of progress</p>
            <div className="metric"><strong>20<span>%</span></strong><small>supplier satisfaction<br />improvement</small></div>
            <div className="metric"><strong>25<span>%</span></strong><small>client retention<br />increase</small></div>
            <div className="metric"><strong>30<span>%</span></strong><small>faster customer<br />issue resolution</small></div>
            <div className="metric metric--last"><strong>$400<span>K</span></strong><small>additional revenue<br />in Q3 2019</small></div>
          </div>
        </section>

        <section className="work-section section-wrap section-pad" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">02 / Selected work</p><h2 id="work-title">Ideas into<br /><em>outcomes.</em></h2></div>
            <p className="section-aside">A selection of product, digital and operational work across construction technology, cloud and customer experience.</p>
          </div>
          <div className="filter-row" role="group" aria-label="Filter projects by category">
            <span className="filter-label">FILTER BY</span>
            {categories.map((category) => <button key={category} className={`filter-chip${activeFilter === category ? " is-active" : ""}`} type="button" aria-pressed={activeFilter === category} onClick={() => setActiveFilter(category)}>{category}<span>{category === "All work" ? projects.length : projects.filter((project) => project.category === category).length}</span></button>)}
            <span className="filter-count" aria-live="polite">{String(visibleProjects.length).padStart(2, "0")} PROJECTS</span>
          </div>
          <div className="projects-grid" aria-live="polite">
            {visibleProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </div>
          <p className="work-note"><span className="asterisk">*</span> Project summaries reflect selected work and outcomes from my professional experience.</p>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="section-wrap about-layout">
            <div className="about-heading"><p className="eyebrow">03 / About</p><h2 id="about-title">A practical<br />mind with a<br /><em>systems view.</em></h2><figure className="about-photo"><img src="/images/about-portrait.jpeg" alt="Abdul Latif Hussein seated at a desk wearing a light jacket." loading="lazy" /><figcaption><span>Abdul Latif Hussein</span><span>HÄMEENLINNA · FINLAND</span></figcaption></figure></div>
            <div className="about-copy">
              <p className="about-lead">Good technology is more than the stack. It’s the way people, processes and possibilities come together.</p>
              <p>My path has moved between cloud learning, product management and technical field engineering. From Finland to Ghana, the UAE and Liechtenstein, I’ve worked alongside teams and customers to turn complex needs into clear, workable next steps.</p>
              <p>I hold a master’s degree in Industrial Engineering and Management, with a focus on product management, and a bachelor’s in Mechanical Engineering and Production Technology. I bring curiosity, analytical thinking and a hands-on approach to every new problem.</p>
              <div className="ai-callout"><div className="ai-callout-icon"><Sparkles size={18} /></div><div><span className="eyebrow">Deep knowledge · broad perspective</span><h3>AI agents. Automation. Generalist.</h3><p>I bring deep knowledge of building AI agent systems and AI automation, paired with the breadth of an AI generalist: connecting models, workflows and real-world needs into useful intelligent systems.</p></div><ArrowUpRight className="ai-arrow" size={17} /></div>
              <div className="education-line"><span>EDUCATION</span><p><strong>MSc</strong> Industrial Engineering & Management <i>·</i> University of Oulu / TU Graz</p><p><strong>BEng</strong> Mechanical Engineering & Production Technology <i>·</i> Saimaa UAS / VIA University College</p></div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap section-pad" id="skills" aria-labelledby="skills-title">
          <div className="section-heading skills-heading">
            <div><p className="eyebrow">04 / Expertise</p><h2 id="skills-title">AI thinking.<br /><em>Real-world systems.</em></h2></div>
            <p className="section-aside">Deep knowledge in AI agent systems and automation, backed by the breadth of an AI generalist and a foundation in cloud, security, analytics and product systems.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => <article className="skill-group" key={group.index}><div className="skill-group-top"><span>{group.index}</span><ArrowUpRight size={15} /></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map((item) => <span key={item} className={item === "AI agent systems" ? "skill-tag skill-tag--accent" : "skill-tag"}>{item}</span>)}</div></article>)}
          </div>
          <div className="cert-strip"><span className="cert-label">TRAINING & CERTIFICATIONS</span><div className="cert-list"><span>Azure Fundamentals <b>AZ-900</b></span><span>Security, Compliance & Identity <b>SC-900</b></span><span>Azure Administrator <b>AZ-104</b></span><span>Azure Security Engineer <b>AZ-500</b></span><span>Azure DevOps Engineer <b>AZ-400</b></span><span>Google Data Analytics <b>Coursera</b></span></div></div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-layout">
            <div className="contact-copy"><p className="eyebrow">05 / Contact</p><h2 id="contact-title">Let’s make<br /><em>something</em><br />matter.</h2><p className="contact-intro">Have a cloud, product or data challenge in mind? I’d be glad to hear what you’re working on.</p><a className="contact-email" href={`mailto:${email}`}><Mail size={17} />{email}<ArrowUpRight size={15} /></a><a className="linkedin-link" href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={16} /> Connect on LinkedIn <ArrowUpRight size={14} /></a></div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-topline"><span>YOUR NOTE, PLEASE</span><span>REPLYING FROM FINLAND <span className="form-spark">✳</span></span></div>
              <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" placeholder="How should I address you?" autoComplete="name" required />
              <label htmlFor="contact-reply">Email address</label><input id="contact-reply" name="reply" type="email" placeholder="you@example.com" autoComplete="email" required />
              <label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" type="text" placeholder="What would you like to discuss?" required />
              <label htmlFor="contact-message">A little more</label><textarea id="contact-message" name="message" rows={4} placeholder="Tell me a bit about it…" required />
              <div className="form-footer"><span className="form-note">SUBMISSION OPENS YOUR EMAIL APP</span><button className="button button--lime" type="submit">Prepare message <ArrowRight size={16} /></button></div>
              {sent && <p className="form-confirmation" role="status"><Check size={15} /> Your email app should open with your note ready to send. If it doesn’t, email me directly above.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main"><div className="footer-brand-block"><Logo /><p>Building thoughtful systems<br />for what comes next.</p></div><div className="footer-links"><span>FIND YOUR WAY</span><a href="#work">Selected work <ArrowUpRight size={13} /></a><a href="#about">About <ArrowUpRight size={13} /></a><a href="#skills">Expertise <ArrowUpRight size={13} /></a></div><div className="footer-links"><span>SAY HELLO</span><a href={`mailto:${email}`}>{email} <ArrowUpRight size={13} /></a><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a><span className="footer-location">Hämeenlinna, Finland</span></div><a className="back-top" href="#top" aria-label="Back to top"><MoveUpRight size={20} /></a></div>
        <div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} ABDUL LATIF HUSSEIN</span><span>MADE WITH CURIOSITY & INTENTION</span><a href="#top">BACK TO THE TOP ↑</a></div>
      </footer>
    </div>
  );
}
