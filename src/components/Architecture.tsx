import { portfolio } from '../data/portfolio.ts';
import type { IconName } from '../data/portfolio.ts';
import Section from './Section.tsx';

const icons: Record<IconName, string> = {
  cloud: '☁',
  layers: '◈',
  shield: '◇',
  database: '▦',
  activity: '⌁',
  terminal: '⌘',
};

function Architecture() {
  return (
    <Section
      number="01"
      title="Architecture"
      description="The principles behind the systems I design."
      id="architecture"
    >
      <div className="principles">
        {portfolio.principles.map((item, i) => (
          <article className="principle" key={item.title}>
            <div className="principle-top">
              <span className="principle-number">{String(i + 1).padStart(2, '0')}</span>
              <span className="principle-icon" aria-hidden="true">
                {icons[item.icon]}
              </span>
            </div>

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Architecture;