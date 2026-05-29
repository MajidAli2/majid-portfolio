import { useEffect, useMemo, useState } from "react";

const NAV = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Journey", id: "journey" },
  { label: "Services", id: "services" },
  { label: "GitHub", id: "github" },
  { label: "Contact", id: "contact" },
];

const HERO_TAGS = ["Ethical Hacker", "AI Enthusiast", "Java Developer", "Python Developer", "DSA Problem Solver"];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/MajidAli2",
    short: "GH",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/majid-ali-28755738a",
    short: "LI",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:majidabdulbaqi09@gmail.com",
    short: "EM",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923251370694",
    short: "WA",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const PROJECTS = [
  {
    title: "NLP Chatbot with Sentiment Analysis",
    desc: "An NLP-based chatbot that understands sentiment and generates intelligent responses using natural language processing techniques.",
    tech: ["Java", "NLP", "Sentiment Analysis"],
    link: "https://github.com/MajidAli2/Natural-Language-Processing-NLP-Chatbot-with-Sentiment-Analysis",
    tone: "#f59e0b",
  },
  {
    title: "Java Web Scraper",
    desc: "A Java-based scraper that extracts and processes website data efficiently for learning and automation workflows.",
    tech: ["Java", "Web Scraping"],
    link: "https://github.com/MajidAli2/Java_Web_Scrappper",
    tone: "#22c55e",
  },
];

const SKILLS_LANG = [
  { name: "Java", pct: 75 },
  { name: "Python", pct: 70 },
  { name: "C++", pct: 65 },
  { name: "SQL", pct: 60 },
];

const CORE_SKILLS = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Networking",
  "Ethical Hacking",
  "Cybersecurity Basics",
  "Problem Solving",
  "Operating Systems",
  "Digital Logic Design",
];

const TOOLS = ["MySQL", "GitHub", "Windows", "Microsoft Office"];

const JOURNEY = [
  { year: "2023", title: "Core Java Foundations", desc: "OOP, data types, collections, file I/O", icon: "☕", state: "done" },
  { year: "2023", title: "DSA Practice", desc: "Arrays, linked lists, trees, graphs, and sorting", icon: "🧠", state: "done" },
  { year: "2024", title: "Ethical Hacking Exploration", desc: "Cybersecurity basics, Kali Linux, and CTF concepts", icon: "🔐", state: "active" },
  { year: "2024", title: "AI & NLP Projects", desc: "Sentiment analysis, chatbot development, ML fundamentals", icon: "🤖", state: "active" },
  { year: "2024", title: "Python & Automation", desc: "Scripting, web scraping, and workflow automation", icon: "🐍", state: "active" },
  { year: "2025", title: "Networking Deep-Dive", desc: "TCP/IP, protocols, security, and Cisco basics", icon: "🌐", state: "upcoming" },
];

const SERVICES = [
  { icon: "🌐", title: "Web Development", desc: "Responsive web applications with a polished UI" },
  { icon: "☕", title: "Java Applications", desc: "Desktop and enterprise Java solutions" },
  { icon: "🤖", title: "AI Projects", desc: "ML models and NLP-driven applications" },
  { icon: "🔐", title: "Cybersecurity", desc: "Security audits and ethical hacking basics" },
  { icon: "🧩", title: "Problem Solving", desc: "Algorithm design and DSA optimization" },
  { icon: "📡", title: "Networking", desc: "Network configuration and protocol literacy" },
];

const CERTS = [
  { title: "Networking Fundamentals", icon: "📡", status: "In Progress", color: "#38bdf8" },
  { title: "Ethical Hacking", icon: "🔐", status: "Learning", color: "#fb7185" },
  { title: "AI & Machine Learning", icon: "🤖", status: "In Progress", color: "#c084fc" },
  { title: "Java Development", icon: "☕", status: "Practicing", color: "#f59e0b" },
  { title: "Python Programming", icon: "🐍", status: "Learning", color: "#60a5fa" },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,800&family=IBM+Plex+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:#08090d;color:#eef2ff;font-family:'Plus Jakarta Sans',sans-serif;overflow-x:hidden;}
body::before{content:'';position:fixed;inset:0;pointer-events:none;background:radial-gradient(circle at top left,rgba(244,114,182,.12),transparent 30%),radial-gradient(circle at top right,rgba(56,189,248,.14),transparent 28%),radial-gradient(circle at 50% 120%,rgba(251,191,36,.08),transparent 34%);}
::-webkit-scrollbar{width:10px;}
::-webkit-scrollbar-track{background:#08090d;}
::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#38bdf8,#f59e0b);border-radius:999px;border:2px solid #08090d;}
.wrap{width:min(1200px,calc(100% - 40px));margin:0 auto;}
.surface{background:rgba(12,14,21,.72);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(148,163,184,.14);box-shadow:0 24px 80px rgba(0,0,0,.35);}
.surface-soft{background:rgba(255,255,255,.03);border:1px solid rgba(148,163,184,.12);box-shadow:0 18px 60px rgba(0,0,0,.22);}
.eyebrow{font-family:'IBM Plex Mono',monospace;letter-spacing:.28em;text-transform:uppercase;color:#38bdf8;font-size:.72rem;}
.title{font-family:'Fraunces',serif;font-size:clamp(2rem,4.5vw,3.9rem);line-height:1.02;font-weight:800;letter-spacing:-.03em;color:#f8fafc;}
.title span{background:linear-gradient(135deg,#38bdf8,#f59e0b);-webkit-background-clip:text;background-clip:text;color:transparent;}
.section-title{font-family:'Fraunces',serif;font-size:clamp(1.7rem,3vw,2.5rem);font-weight:800;color:#f8fafc;}
.section-title span{color:#38bdf8;}
.reveal{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease;}
.reveal.in{opacity:1;transform:translateY(0);}
.pill{display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(148,163,184,.16);background:rgba(255,255,255,.03);color:#cbd5e1;font-family:'IBM Plex Mono',monospace;font-size:.76rem;}
.chip{display:inline-flex;align-items:center;padding:7px 12px;border-radius:999px;border:1px solid rgba(56,189,248,.18);background:rgba(56,189,248,.08);color:#dbeafe;font-size:.76rem;}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 22px;border-radius:14px;border:1px solid transparent;font-family:'IBM Plex Mono',monospace;font-size:.77rem;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;transition:transform .2s,box-shadow .2s,background .2s,border-color .2s;color:#0f172a;text-decoration:none;}
.btn:hover{transform:translateY(-2px);}
.btn-primary{background:linear-gradient(135deg,#38bdf8,#f59e0b);box-shadow:0 14px 40px rgba(56,189,248,.22);}
.btn-secondary{background:transparent;border-color:rgba(148,163,184,.2);color:#e2e8f0;}
.btn-secondary:hover{background:rgba(255,255,255,.04);border-color:rgba(56,189,248,.35);}
.navlink{color:#cbd5e1;font-size:.8rem;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;transition:color .2s;}
.navlink:hover{color:#38bdf8;}
.progress{height:8px;border-radius:999px;background:rgba(148,163,184,.12);overflow:hidden;}
.progress span{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#38bdf8,#f59e0b);box-shadow:0 0 18px rgba(56,189,248,.45);}
.timeline-line{position:absolute;left:11px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,transparent,rgba(56,189,248,.35),rgba(245,158,11,.35),transparent);}
.timeline-dot{width:22px;height:22px;border-radius:50%;flex:0 0 auto;box-shadow:0 0 0 8px rgba(56,189,248,.09),0 0 24px rgba(56,189,248,.35);}
.input{width:100%;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,.03);border:1px solid rgba(148,163,184,.16);color:#f8fafc;font:inherit;outline:none;transition:border-color .2s,box-shadow .2s,background .2s;}
.input::placeholder{color:#64748b;}
.input:focus{border-color:rgba(56,189,248,.45);box-shadow:0 0 0 4px rgba(56,189,248,.08);background:rgba(255,255,255,.05);}
@media (max-width: 900px){.desktop-nav{display:none!important;}.mobile-toggle{display:flex!important;}.hero-grid{grid-template-columns:1fr!important;}.split-2{grid-template-columns:1fr!important;}.skills-grid{grid-template-columns:1fr!important;}.contact-grid{grid-template-columns:1fr!important;}}
`;

function useTyping(words, speed = 85, deleteSpeed = 40, pause = 1400) {
  const [state, setState] = useState({ text: "", index: 0, deleting: false, waiting: false });

  useEffect(() => {
    if (state.waiting) {
      const timer = setTimeout(() => setState((current) => ({ ...current, waiting: false, deleting: true })), pause);
      return () => clearTimeout(timer);
    }

    const word = words[state.index];
    const timer = setTimeout(() => {
      if (!state.deleting) {
        const next = word.slice(0, state.text.length + 1);
        if (next === word) setState((current) => ({ ...current, text: next, waiting: true }));
        else setState((current) => ({ ...current, text: next }));
      } else {
        const next = state.text.slice(0, -1);
        if (next === "") setState((current) => ({ ...current, text: "", deleting: false, index: (current.index + 1) % words.length }));
        else setState((current) => ({ ...current, text: next }));
      }
    }, state.deleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [state, words, speed, deleteSpeed, pause]);

  return state.text;
}

function useReveal(loading) {
  useEffect(() => {
    if (loading) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    }, 120);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading]);
}

function SectionTitle({ eyebrow, title, accent, copy }) {
  return (
    <div className="reveal" style={{ textAlign: "center", marginBottom: 44 }}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>
      <h2 className="section-title" style={{ marginBottom: copy ? 14 : 0 }}>
        {title} <span>{accent}</span>
      </h2>
      {copy ? <p style={{ color: "#94a3b8", maxWidth: 680, margin: "0 auto", lineHeight: 1.8 }}>{copy}</p> : null}
    </div>
  );
}

function Navbar({ onNavigate, open, setOpen }) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSolid(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="surface"
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(1200px, calc(100% - 24px))",
        zIndex: 1000,
        borderRadius: 20,
        padding: "14px 18px",
        background: solid ? "rgba(10,12,19,.88)" : "rgba(10,12,19,.58)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <button onClick={() => onNavigate("hero")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", textAlign: "left" }}>
          <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.1rem", fontWeight: 800, letterSpacing: ".04em" }}>Majid Ali</div>
          <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: ".68rem", color: "#94a3b8", letterSpacing: ".2em", textTransform: "uppercase" }}>Cybersecurity + AI</div>
        </button>

        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {NAV.map((item) => (
            <span key={item.id} className="navlink" onClick={() => onNavigate(item.id)}>{item.label}</span>
          ))}
          <button className="btn btn-primary" onClick={() => onNavigate("contact")} style={{ padding: "11px 16px" }}>Hire Me</button>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setOpen((value) => !value)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", width: 42, height: 42, alignItems: "center", justifyContent: "center" }}
          aria-label="Toggle navigation"
        >
          <div style={{ width: 18, height: 2, background: "#e2e8f0", position: "relative", borderRadius: 999 }}>
            <span style={{ position: "absolute", left: 0, top: -6, width: 18, height: 2, background: "#e2e8f0", borderRadius: 999, transform: open ? "translateY(6px) rotate(45deg)" : "none", transition: "transform .2s" }} />
            <span style={{ position: "absolute", left: 0, top: 6, width: 18, height: 2, background: "#e2e8f0", borderRadius: 999, transform: open ? "translateY(-6px) rotate(-45deg)" : "none", transition: "transform .2s" }} />
          </div>
        </button>
      </div>

      {open ? (
        <div className="surface-soft" style={{ marginTop: 14, borderRadius: 18, padding: 16, display: "grid", gap: 14 }}>
          {NAV.map((item) => (
            <span key={item.id} className="navlink" onClick={() => onNavigate(item.id)} style={{ fontSize: ".88rem" }}>{item.label}</span>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function Hero({ onNavigate }) {
  const typing = useTyping(HERO_TAGS);
  const quickStats = [
    { value: "2+", label: "Projects" },
    { value: "4", label: "Languages" },
    { value: "1+", label: "Years Coding" },
  ];

  return (
    <section id="hero" style={{ minHeight: "100vh", padding: "128px 0 72px", position: "relative" }}>
      <div className="wrap hero-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 28, alignItems: "center" }}>
        <div className="reveal" style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Portfolio / 2026</div>
          <h1 className="title" style={{ maxWidth: 720, marginBottom: 18 }}>
            Designing software that feels <span>sharp, useful, and memorable.</span>
          </h1>
          <p style={{ maxWidth: 620, color: "#cbd5e1", fontSize: "1.02rem", lineHeight: 1.85, marginBottom: 18 }}>
            I’m Majid Ali, a computer science student focused on cybersecurity, AI, Java, and Python. I like practical builds, clean systems, and work that turns ideas into something people can actually use.
          </p>

          <div className="surface-soft" style={{ display: "inline-flex", flexWrap: "wrap", gap: 10, padding: 12, borderRadius: 18, marginBottom: 18 }}>
            <span className="pill">Based in Pakistan</span>
            <span className="pill">Project-driven</span>
            <span className="pill">Security + AI</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, color: "#94a3b8", fontFamily: "IBM Plex Mono, monospace", fontSize: ".82rem" }}>
            <span style={{ color: "#38bdf8" }}>Currently exploring</span>
            <span style={{ color: "#f8fafc" }}>{typing}</span>
            <span style={{ width: 2, height: 18, background: "#f59e0b", display: "inline-block" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12, maxWidth: 520, marginBottom: 26 }}>
            {quickStats.map((item) => (
              <div key={item.label} className="surface-soft" style={{ borderRadius: 18, padding: "16px 14px" }}>
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.7rem", fontWeight: 800, marginBottom: 4 }}>{item.value}</div>
                <div style={{ color: "#94a3b8", fontSize: ".82rem", letterSpacing: ".08em", textTransform: "uppercase" }}>{item.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
            <button className="btn btn-primary" onClick={() => onNavigate("projects")}>View Projects</button>
            <button className="btn btn-secondary" onClick={() => onNavigate("contact")}>Contact Me</button>
            <a className="btn btn-secondary" href="/CV_PDF.pdf" download>Resume</a>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                title={item.label}
                className="surface-soft"
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#cbd5e1",
                  textDecoration: "none",
                }}
              >
                {item.svg}
              </a>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ position: "relative", zIndex: 1 }}>
          <div className="surface" style={{ borderRadius: 28, padding: 22, overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top, rgba(56,189,248,.18), transparent 38%), radial-gradient(circle at 100% 100%, rgba(245,158,11,.14), transparent 35%)" }} />
            <div style={{ position: "relative", display: "grid", gap: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 76, height: 76, borderRadius: "50%", background: "linear-gradient(135deg, rgba(56,189,248,.25), rgba(245,158,11,.25))", border: "1px solid rgba(255,255,255,.12)", display: "grid", placeItems: "center", fontFamily: "Fraunces, serif", fontSize: "1.85rem", fontWeight: 800 }}>MA</div>
                <div>
                  <div style={{ fontSize: ".78rem", color: "#94a3b8", letterSpacing: ".18em", textTransform: "uppercase", fontFamily: "IBM Plex Mono, monospace" }}>Profile Snapshot</div>
                  <div style={{ fontSize: "1.15rem", fontWeight: 700, marginTop: 4 }}>Majid Ali</div>
                  <div style={{ color: "#cbd5e1", marginTop: 4 }}>Security-minded developer building across AI and software engineering.</div>
                </div>
              </div>

              <div className="surface-soft" style={{ borderRadius: 20, padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span className="eyebrow" style={{ fontSize: ".64rem" }}>Current Focus</span>
                  <span className="chip">Open to opportunities</span>
                </div>
                <div style={{ display: "grid", gap: 10 }}>
                  {[
                    ["Security research", "Learning the practical side of cyber defense and ethical hacking."],
                    ["AI projects", "Working on NLP and useful automation tools."],
                    ["DSA practice", "Keeping fundamentals sharp with problem solving."],
                  ].map(([title, desc]) => (
                    <div key={title} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, alignItems: "start" }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: "linear-gradient(135deg,#38bdf8,#f59e0b)", marginTop: 6 }} />
                      <div>
                        <div style={{ fontWeight: 700, marginBottom: 4 }}>{title}</div>
                        <div style={{ color: "#94a3b8", lineHeight: 1.65, fontSize: ".92rem" }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
                <div className="surface-soft" style={{ borderRadius: 18, padding: 16 }}>
                  <div style={{ color: "#94a3b8", fontSize: ".78rem", marginBottom: 6 }}>Location</div>
                  <div style={{ fontWeight: 700 }}>Pakistan</div>
                </div>
                <div className="surface-soft" style={{ borderRadius: 18, padding: 16 }}>
                  <div style={{ color: "#94a3b8", fontSize: ".78rem", marginBottom: 6 }}>Available for</div>
                  <div style={{ fontWeight: 700 }}>Projects and collaborations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const facts = [
    { value: "2+", label: "Projects built" },
    { value: "4+", label: "Languages" },
    { value: "1+", label: "Years coding" },
    { value: "∞", label: "Drive to learn" },
  ];

  return (
    <section id="about" style={{ padding: "96px 0" }}>
      <div className="wrap">
        <SectionTitle
          eyebrow="About Me"
          title="A focused builder with a"
          accent="wide curiosity"
          copy="I like working at the intersection of cybersecurity, AI, and software engineering. My goal is simple: build projects that are technically solid, visually clean, and actually useful."
        />

        <div className="split-2" style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 22, alignItems: "stretch" }}>
          <div className="reveal surface" style={{ borderRadius: 26, padding: 28, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top right, rgba(56,189,248,.1), transparent 32%), radial-gradient(circle at bottom left, rgba(245,158,11,.08), transparent 28%)" }} />
            <div style={{ position: "relative" }}>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Profile</div>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.55rem", fontWeight: 800, marginBottom: 14, lineHeight: 1.2 }}>I’m building a path toward software engineering and cybersecurity.</div>
              <div style={{ color: "#cbd5e1", lineHeight: 1.9, display: "grid", gap: 14 }}>
                <p>I am a passionate Computer Science student with a strong interest in software development, ethical hacking, artificial intelligence, networking, and problem solving.</p>
                <p>I enjoy building real-world projects, learning modern technologies, and exploring security concepts to keep improving my programming skills.</p>
                <p>My aim is to grow into a strong software engineer and cybersecurity professional who can contribute to practical, high-impact solutions.</p>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
            {facts.map((fact) => (
              <div key={fact.label} className="reveal surface-soft" style={{ borderRadius: 22, padding: 22, textAlign: "center" }}>
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "2rem", fontWeight: 800, marginBottom: 6 }}>{fact.value}</div>
                <div style={{ color: "#94a3b8", fontSize: ".82rem", letterSpacing: ".1em", textTransform: "uppercase" }}>{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [ready, setReady] = useState(false);
  const ref = useMemo(() => ({ current: null }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setReady(true);
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <section id="skills" ref={ref} style={{ padding: "96px 0" }}>
      <div className="wrap">
        <SectionTitle
          eyebrow="Capabilities"
          title="Skills that support"
          accent="the work"
          copy="I focus on practical fundamentals first, then layer in tools and technologies that help me ship better projects."
        />

        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18 }}>
          <div className="reveal surface" style={{ borderRadius: 24, padding: 24 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Languages</div>
            <div style={{ display: "grid", gap: 18 }}>
              {SKILLS_LANG.map((skill) => (
                <div key={skill.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontWeight: 700 }}>{skill.name}</span>
                    <span style={{ color: "#38bdf8", fontFamily: "IBM Plex Mono, monospace" }}>{skill.pct}%</span>
                  </div>
                  <div className="progress"><span style={{ width: ready ? `${skill.pct}%` : "0%", transition: "width 1.2s ease" }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal surface" style={{ borderRadius: 24, padding: 24 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Core Skills</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {CORE_SKILLS.map((skill) => (
                <span key={skill} className="chip">{skill}</span>
              ))}
            </div>
          </div>

          <div className="reveal surface" style={{ borderRadius: 24, padding: 24 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Tools</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
              {TOOLS.map((tool) => (
                <div key={tool} className="surface-soft" style={{ borderRadius: 18, padding: 14, color: "#dbeafe", fontWeight: 600 }}>{tool}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: "96px 0" }}>
      <div className="wrap">
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects that show"
          accent="what I build"
          copy="These are focused, learning-driven projects that reflect my interests in AI, automation, and practical development."
        />

        <div className="split-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 18 }}>
          {PROJECTS.map((project) => (
            <article key={project.title} className="reveal surface" style={{ borderRadius: 26, padding: 26, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${project.tone}12, transparent 46%)` }} />
              <div style={{ position: "relative" }}>
                <div className="eyebrow" style={{ marginBottom: 16 }}>Featured Project</div>
                <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.55rem", marginBottom: 14, lineHeight: 1.2 }}>{project.title}</h3>
                <p style={{ color: "#cbd5e1", lineHeight: 1.85, marginBottom: 18 }}>{project.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 22 }}>
                  {project.tech.map((tech) => <span key={tech} className="chip">{tech}</span>)}
                </div>
                <a className="btn btn-secondary" href={project.link} target="_blank" rel="noreferrer">View on GitHub</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  const status = {
    done: { label: "Done", bg: "rgba(56,189,248,.12)", color: "#7dd3fc", border: "rgba(56,189,248,.25)" },
    active: { label: "Active", bg: "rgba(245,158,11,.12)", color: "#fcd34d", border: "rgba(245,158,11,.25)" },
    upcoming: { label: "Upcoming", bg: "rgba(148,163,184,.08)", color: "#cbd5e1", border: "rgba(148,163,184,.16)" },
  };

  return (
    <section id="journey" style={{ padding: "96px 0" }}>
      <div className="wrap" style={{ maxWidth: 860 }}>
        <SectionTitle
          eyebrow="Learning Path"
          title="A timeline of how I’ve"
          accent="been growing"
          copy="This is the kind of momentum I want to keep: foundations first, then deeper work in security, AI, and software systems."
        />

        <div style={{ position: "relative", paddingLeft: 42 }}>
          <div className="timeline-line" />
          {JOURNEY.map((item) => {
            const meta = status[item.state];
            return (
              <div key={`${item.year}-${item.title}`} className="reveal" style={{ display: "flex", gap: 18, marginBottom: 18 }}>
                <div className="timeline-dot" style={{ background: "linear-gradient(135deg,#38bdf8,#f59e0b)", marginTop: 6 }} />
                <div className="surface" style={{ flex: 1, borderRadius: 22, padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                      <h4 style={{ fontWeight: 800 }}>{item.title}</h4>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: "#94a3b8", fontFamily: "IBM Plex Mono, monospace", fontSize: ".75rem" }}>{item.year}</span>
                      <span style={{ padding: "4px 10px", borderRadius: 999, background: meta.bg, color: meta.color, border: `1px solid ${meta.border}`, fontSize: ".7rem", fontFamily: "IBM Plex Mono, monospace" }}>{meta.label}</span>
                    </div>
                  </div>
                  <p style={{ color: "#cbd5e1", lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" style={{ padding: "96px 0" }}>
      <div className="wrap">
        <SectionTitle
          eyebrow="What I Do"
          title="Services shaped around"
          accent="practical work"
          copy="If you need a focused build, a learning-friendly prototype, or a clean UI for a technical idea, this is the kind of work I like to help with."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {SERVICES.map((service) => (
            <div key={service.title} className="reveal surface-soft" style={{ borderRadius: 24, padding: 24 }}>
              <div style={{ fontSize: "2rem", marginBottom: 14 }}>{service.icon}</div>
              <h3 style={{ fontWeight: 800, marginBottom: 10 }}>{service.title}</h3>
              <p style={{ color: "#cbd5e1", lineHeight: 1.75 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GitHubSection() {
  const repoLinks = [
    { label: "Profile", href: "https://github.com/MajidAli2", detail: "GitHub presence and public code" },
    { label: "NLP Chatbot", href: "https://github.com/MajidAli2/Natural-Language-Processing-NLP-Chatbot-with-Sentiment-Analysis", detail: "Sentiment-aware chatbot project" },
    { label: "Web Scraper", href: "https://github.com/MajidAli2/Java_Web_Scrappper", detail: "Java-based scraping utility" },
  ];

  return (
    <section id="github" style={{ padding: "96px 0" }}>
      <div className="wrap">
        <SectionTitle
          eyebrow="Open Source"
          title="GitHub activity that"
          accent="matters to me"
          copy="I keep this section simple and useful: the profile itself, the projects I care about, and a quick view of where I’m active."
        />

        <div className="split-2" style={{ display: "grid", gridTemplateColumns: "1fr .9fr", gap: 18, alignItems: "start" }}>
          <div className="reveal surface" style={{ borderRadius: 26, padding: 26 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>GitHub Snapshot</div>
            <div style={{ display: "grid", gap: 14 }}>
              <div className="surface-soft" style={{ borderRadius: 20, padding: 18, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontWeight: 800, marginBottom: 4 }}>MajidAli2</div>
                  <div style={{ color: "#94a3b8" }}>Public projects, learning experiments, and technical practice.</div>
                </div>
                <a className="btn btn-secondary" href="https://github.com/MajidAli2" target="_blank" rel="noreferrer">Open Profile</a>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 }}>
                {[
                  ["Focus", "Security + AI"],
                  ["Style", "Learning in public"],
                  ["Repos", "Selective and practical"],
                ].map(([label, value]) => (
                  <div key={label} className="surface-soft" style={{ borderRadius: 18, padding: 16 }}>
                    <div style={{ color: "#94a3b8", fontSize: ".75rem", marginBottom: 8, textTransform: "uppercase", letterSpacing: ".14em", fontFamily: "IBM Plex Mono, monospace" }}>{label}</div>
                    <div style={{ fontWeight: 700, lineHeight: 1.5 }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {repoLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="reveal surface-soft" style={{ borderRadius: 20, padding: 18, textDecoration: "none", color: "inherit" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: 800, marginBottom: 6 }}>{link.label}</div>
                    <div style={{ color: "#94a3b8" }}>{link.detail}</div>
                  </div>
                  <span style={{ color: "#38bdf8", fontFamily: "IBM Plex Mono, monospace" }}>Open</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CertsSection() {
  return (
    <section style={{ padding: "96px 0" }}>
      <div className="wrap">
        <SectionTitle
          eyebrow="Growth"
          title="Certifications and"
          accent="ongoing learning"
          copy="I’m always building something new, and this is the current learning surface I’m keeping active."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 16 }}>
          {CERTS.map((cert) => (
            <div key={cert.title} className="reveal surface-soft" style={{ borderRadius: 24, padding: 24, textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", marginBottom: 16 }}>{cert.icon}</div>
              <h3 style={{ fontWeight: 800, marginBottom: 12, lineHeight: 1.4 }}>{cert.title}</h3>
              <span className="chip" style={{ background: `${cert.color}18`, borderColor: `${cert.color}33`, color: cert.color }}>{cert.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));

  const submit = async () => {
    if (!form.name || !form.email || !form.msg) {
      setErr("Please fill all fields.");
      return;
    }

    setSending(true);
    setErr("");

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_q3v3thg",
          template_id: "template_dicz17v",
          user_id: "a-qzzBA8t8-FmPsJW",
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.msg,
            to_email: "channamjid2006@gmail.com",
          },
        }),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", msg: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        setErr("Send failed. Please try again.");
      }
    } catch {
      setErr("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const contactLinks = [
    { label: "GitHub", value: "MajidAli2", href: "https://github.com/MajidAli2" },
    { label: "LinkedIn", value: "majid-ali", href: "https://www.linkedin.com/in/majid-ali-28755738a" },
    { label: "Email", value: "majidabdulbaqi09@gmail.com", href: "mailto:majidabdulbaqi09@gmail.com" },
    { label: "Instagram", value: "majid09ali", href: "https://instagram.com/majid09ali" },
    { label: "WhatsApp", value: "+92 325 137 0694", href: "https://wa.me/923251370694" },
  ];

  return (
    <section id="contact" style={{ padding: "96px 0 110px" }}>
      <div className="wrap">
        <SectionTitle
          eyebrow="Contact"
          title="If you want to build,"
          accent="let’s talk"
          copy="I’m open to projects, collaborations, and conversations about cybersecurity, AI, and software development."
        />

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 18, alignItems: "start" }}>
          <div className="reveal surface" style={{ borderRadius: 28, padding: 24 }}>
            <div style={{ display: "grid", gap: 14 }}>
              <input className="input" placeholder="Your Name" value={form.name} onChange={update("name")} />
              <input className="input" type="email" placeholder="Your Email" value={form.email} onChange={update("email")} />
              <textarea className="input" placeholder="Your Message" rows={6} value={form.msg} onChange={update("msg")} style={{ resize: "vertical" }} />
              {err ? <div style={{ color: "#fda4af", fontSize: ".9rem" }}>{err}</div> : null}
              <button className="btn btn-primary" onClick={submit} disabled={sending} style={{ width: "100%" }}>
                {sending ? "Sending..." : sent ? "Message sent" : "Send Message"}
              </button>
            </div>
          </div>

          <div style={{ display: "grid", gap: 14 }}>
            <div className="reveal surface" style={{ borderRadius: 28, padding: 24 }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Connect</div>
              <div style={{ display: "grid", gap: 12 }}>
                {contactLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="surface-soft" style={{ borderRadius: 18, padding: 16, textDecoration: "none", color: "inherit" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                      <div>
                        <div style={{ color: "#94a3b8", fontSize: ".75rem", letterSpacing: ".14em", textTransform: "uppercase", fontFamily: "IBM Plex Mono, monospace", marginBottom: 4 }}>{link.label}</div>
                        <div style={{ fontWeight: 700 }}>{link.value}</div>
                      </div>
                      <span style={{ color: "#38bdf8", fontFamily: "IBM Plex Mono, monospace" }}>Open</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="reveal surface-soft" style={{ borderRadius: 24, padding: 22 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Availability</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 14px rgba(52,211,153,.55)" }} />
                <span style={{ color: "#cbd5e1" }}>Open to opportunities and collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer style={{ padding: "26px 0 40px" }}>
      <div className="wrap surface-soft" style={{ borderRadius: 24, padding: "18px 20px", display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
        <button onClick={() => onNavigate("hero")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", textAlign: "left" }}>
          <div style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: "1.05rem" }}>Majid Ali</div>
          <div style={{ color: "#94a3b8", fontSize: ".76rem" }}>Designed and developed with React + Vite</div>
        </button>
        <div style={{ color: "#94a3b8", fontFamily: "IBM Plex Mono, monospace", fontSize: ".76rem" }}>© 2025</div>
      </div>
    </footer>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [cursor, setCursor] = useState({ x: -500, y: -500 });

  useReveal(loading);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMove = (event) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  if (loading) {
    return (
      <>
        <style>{CSS}</style>
        <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#08090d" }}>
          <div className="surface" style={{ width: 260, borderRadius: 24, padding: 24, textAlign: "center" }}>
            <div style={{ fontFamily: "Fraunces, serif", fontSize: "2rem", fontWeight: 800, marginBottom: 8 }}>Majid Ali</div>
            <div style={{ color: "#94a3b8", fontFamily: "IBM Plex Mono, monospace", letterSpacing: ".22em", textTransform: "uppercase", fontSize: ".7rem", marginBottom: 18 }}>Loading portfolio</div>
            <div className="progress"><span style={{ width: "100%" }} /></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{CSS}</style>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, background: "radial-gradient(circle at center, rgba(56,189,248,.05), transparent 36%)" }} />
      <div style={{ position: "fixed", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,.08), transparent 68%)", left: cursor.x, top: cursor.y, transform: "translate(-50%, -50%)", pointerEvents: "none", zIndex: 1, transition: "left .18s ease, top .18s ease" }} />
      <div style={{ position: "fixed", top: 0, left: 0, height: 3, width: `${scrollPct}%`, background: "linear-gradient(90deg,#38bdf8,#f59e0b)", zIndex: 1200 }} />

      <Navbar onNavigate={navigate} open={open} setOpen={setOpen} />
      <main style={{ position: "relative", zIndex: 2 }}>
        <Hero onNavigate={navigate} />
        <About />
        <Skills />
        <Projects />
        <JourneySection />
        <ServicesSection />
        <GitHubSection />
        <CertsSection />
        <ContactSection />
      </main>
      <Footer onNavigate={navigate} />
    </>
  );
}