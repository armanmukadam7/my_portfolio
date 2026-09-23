import { portfolio } from '../data/portfolio.ts';
import Arrow from './Arrow.tsx';

const navItems = [
  ['Architecture', 'architecture'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
] as const;

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

export default Header;