// src/App.js
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SideElements from './components/SideElements';

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <SideElements />
      
      <div className="max-w-6xl mx-auto relative overflow-hidden">
        {/* Page 1 - Header */}
        <Header />
        
        {/* Page 2 - About */}
        <About />
        
        {/* Page 3 - Projects */}
        <Projects />
        
        {/* Page 4 - Contact */}
        <Contact />
      </div>
    </div>
  );
}

export default App;