import React from 'react'
import './Content.css'
import Page from '../../Pages/Page'
import Projects from '../../Pages/Projects'
import About from '../../Pages/About'
const Content = () => {
    return (

        <div className='flex flex-col w-[90vw]'>
            <Page />
            <Projects />
            <About />
        </div>

    )
}

export default Content