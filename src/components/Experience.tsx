import { portfolio } from '../data/portfolio.ts';
import Section from './Section.tsx';

function Experience() {
  return (
    <Section
      number="04"
      title="Experience"
      description="A progression from building systems to designing them."
      className="experience-section"
      id="experience"
    >
      <div className="timeline">
        {portfolio.experience.map((item, i) => (
          <article className="experience" key={item.role}>
            <span className="experience-index">{String(i + 1).padStart(2, '0')}</span>

            <div>
              <p className="experience-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Experience;