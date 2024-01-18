
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileMenu from './sub-components/MobileMenu';

// List of links -> text: url
const listOfLinks = [
  { text : 'Inicio', url: '#' },
  { text : 'Proyectos', url: '#projects' },
  { text : 'About', url: '#about' },
  { text : 'Contacto', url: '#contact' },
];


function App() {

  return (
    <div className='App'>
      <MobileMenu listOfLinks={listOfLinks} />
      <Navbar />
      {/* Content */}
      <main className='main-content'>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
      
    </div>
  );
}

export default App;
