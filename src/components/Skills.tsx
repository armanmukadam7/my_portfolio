import { portfolio } from '../data/portfolio.ts';
import Section from './Section.tsx';

function Skills() {
  return (
    <Section
      number="03"
      title="Technical scope"
      description="The tools and disciplines I work across."
      className="skills-section"
    >
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
    </Section>
  );
}

export default Skills;