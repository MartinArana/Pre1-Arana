import React from 'react'
import "./Loader.css"
import { JellyTriangle } from '@uiball/loaders'


const Loader = () => {
    return (
        <div className='ui-ball-loader-container'>
            <JellyTriangle size={60} speed={1.75} color="#26ff00"/>
        </div>
    )
}

export default Loader