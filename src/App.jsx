import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SideElements from './components/SideElements';
import MobileScreen from './components/MobileScreen';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react"

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
  const darkMode = document.documentElement.classList.contains('dark');
  const handleThemeToggle = () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', currentTheme);
  };

  if (isMobile) {
    return (
      <MobileScreen />
    );
  }

  return (
    <>
      <Analytics />
    <div className="bg-background text-foreground font-sans relative">
     {/* <button className='fixed bottom-5 right-[5rem] z-100' onClick={handleThemeToggle}>
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button> */}
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
        </>
  );
}

export default App;
