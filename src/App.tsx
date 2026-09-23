import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Metrics from './components/Metrics.tsx';
import Architecture from './components/Architecture.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Experience from './components/Experience.tsx';
import Footer from './components/Footer.tsx';
import './App.css';

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