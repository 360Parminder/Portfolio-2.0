import { useState } from 'react'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import RightNav from './components/RightNav'
import Page from './components/Page'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <LeftNav />
      <RightNav />
      <main>
        <Page />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App