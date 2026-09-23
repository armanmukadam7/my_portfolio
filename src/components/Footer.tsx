import { portfolio } from '../data/portfolio.ts';
import Arrow from './Arrow.tsx';

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

export default Footer;