import { portfolio } from '../data/portfolio.ts';
import Section from './Section.tsx';
import Arrow from './Arrow.tsx';

function Projects() {
  return (
    <Section
      number="02"
      title="Selected work"
      description="Architecture problems, systems and platforms."
      className="projects-section"
      id="projects"
    >
      <div className="projects">
        {portfolio.projects.map((project, i) => (
          <article className="project" key={project.title}>
            <div className="project-number">{String(i + 1).padStart(2, '0')}</div>

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
    </Section>
  );
}

export default Projects;