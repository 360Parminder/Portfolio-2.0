import { useEffect, useState } from 'react';

import { Analytics } from "@vercel/analytics/react"
import { Route, Routes, useLocation } from 'react-router';
import Landing from './layout/Landing';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import MobileScreen from './pages/MobileScreen';
import WorkExperience from './pages/WorkExperience';



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

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
         window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return null;
}

function App() {
    const isMobile = useIsMobile();
    // const darkMode = document.documentElement.classList.contains('dark');
    // const handleThemeToggle = () => {
    //   const currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    //   document.documentElement.classList.toggle('dark');
    //   localStorage.setItem('theme', currentTheme);
    // };

    if (isMobile) {
      return (
        <MobileScreen />
      );
    }

    return (
         <>
             <ScrollToTop />
             <Routes>
                  <Route path="/" element={<Landing />} >
                      <Route index element={<LandingPage />} />

                      <Route path="projects" element={<Projects />} />
                      <Route path="blogs" element={<Blogs />} />
                      <Route path="work" element={<WorkExperience />} />
                  </Route>
             </Routes>

         </>
    );
}

export default App;
