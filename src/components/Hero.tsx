import { portfolio } from '../data/portfolio.ts';
import Arrow from './Arrow.tsx';

const heroNodes = ['CLIENT', 'API', 'SERVICES', 'DATA'];

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
        {heroNodes.map((label, i) => (
          <div className={`diagram-node node-${'abcd'[i]}`} key={label}>
            {label}
          </div>
        ))}

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

export default Hero;