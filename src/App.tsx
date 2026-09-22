import { portfolio } from './data/portfolio';
import './App.css';

const navItems = [
  ['Architecture', 'architecture'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
] as const;

const Arrow = () => <span aria-hidden="true">↗</span>;

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#">
        AM<span>.</span>
      </a>

      <nav aria-label="Main navigation">
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>

      <a className="header-contact" href={`mailto:${portfolio.email}`}>
        Contact <Arrow />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className="hero-content">
        <p className="eyebrow">
          <span className="status-dot" />
          {portfolio.location} · Available for opportunities
        </p>

        <h1>
          Engineering systems
          <br />
          <em>built to last.</em>
        </h1>

        <p className="hero-description">{portfolio.intro}</p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View selected work <Arrow />
          </a>

          <a className="button button-secondary" href={`mailto:${portfolio.email}`}>
            Let's talk
          </a>
        </div>
      </div>

      <div className="hero-diagram" aria-hidden="true">
        <div className="diagram-node node-a">CLIENT</div>
        <div className="diagram-node node-b">API</div>
        <div className="diagram-node node-c">SERVICES</div>
        <div className="diagram-node node-d">DATA</div>

        <span className="connection connection-a" />
        <span className="connection connection-b" />
        <span className="connection connection-c" />

        <div className="diagram-core">
          <span>ARCH</span>
          <strong>01</strong>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metrics" aria-label="Professional metrics">
      {portfolio.metrics.map(([value, label]) => (
        <div className="metric" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

function Architecture() {
  return (
    <section className="section" id="architecture">
      <SectionHeading
        number="01"
        title="Architecture"
        description="The principles behind the systems I design."
      />

      <div className="principles">
        {portfolio.principles.map((item, index) => (
          <article className="principle" key={item.title}>
            <div className="principle-top">
              <span className="principle-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="principle-icon" aria-hidden="true">
                {icons[item.icon]}
              </span>
            </div>

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionHeading
        number="02"
        title="Selected work"
        description="Architecture problems, systems and platforms."
      />

      <div className="projects">
        {portfolio.projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project-number">{project.accent}</div>

            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <Arrow />
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section">
      <SectionHeading
        number="03"
        title="Technical scope"
        description="The tools and disciplines I work across."
      />

      <div className="skills">
        {Object.entries(portfolio.skills).map(([category, skills]) => (
          <div className="skill-group" key={category}>
            <h3>{category}</h3>

            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <SectionHeading
        number="04"
        title="Experience"
        description="A progression from building systems to designing them."
      />

      <div className="timeline">
        {portfolio.experience.map((item, index) => (
          <article className="experience" key={item.role}>
            <span className="experience-index">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div>
              <p className="experience-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="footer-label">Let's build something resilient.</span>
        <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
      </div>

      <div className="footer-links">
        <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <Arrow />
        </a>
        <a href={portfolio.github} target="_blank" rel="noreferrer">
          GitHub <Arrow />
        </a>
      </div>
    </footer>
  );
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <span>{number}</span>

      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

const icons = {
  cloud: '☁',
  layers: '◈',
  shield: '◇',
  database: '▦',
  activity: '⌁',
  terminal: '⌘',
};

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Metrics />
        <Architecture />
        <Projects />
        <Skills />
        <Experience />
      </main>

      <Footer />
    </>
  );
}

export default App;