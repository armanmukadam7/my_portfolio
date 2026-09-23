import type { ReactNode } from 'react';

type SectionProps = {
  number: string;
  title: string;
  description: string;
  id?: string;
  className?: string;
  children: ReactNode;
};

function Section({ number, title, description, id, className = '', children }: SectionProps) {
  return (
    <section className={`section ${className}`.trim()} id={id}>
      <div className="section-heading">
        <span>{number}</span>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export default Section;