import React from 'react'
import './Content.css'
import Page from '../../Pages/Page'
import Projects from '../../Pages/Projects'
const Content = () => {
    return (

        <div className='flex flex-col h-full'>
            <Page />
            <Projects />
        </div>

    )
}

export default Content