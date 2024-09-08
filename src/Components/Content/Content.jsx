import React from 'react'
import './Content.css'
import Page1 from './ContentPages/Page1'
const Content = () => {
    return (

        <div className='flex flex-col'>
            <Page1 />
            <Page1 />
        </div>

    )
}

export default Content