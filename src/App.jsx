import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SideElements from './components/SideElements';
import MobileScreen from './components/MobileScreen';

function useIsMobile() {
  const getIsMobile = () =>
    typeof window !== 'undefined'
      ? window.matchMedia('(max-width: 767px)').matches
      : false;

  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const handler = (e) => setIsMobile(e.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, []);

  return isMobile;
}

function App() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <MobileScreen />
    );
  }

  return (
    <div className="bg-background text-foreground font-sans">
      <SideElements />
      <div className="max-w-7xl mx-auto relative overflow-hidden px-4">
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