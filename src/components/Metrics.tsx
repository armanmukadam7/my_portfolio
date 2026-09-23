import { portfolio } from '../data/portfolio.ts';

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

export default Metrics;