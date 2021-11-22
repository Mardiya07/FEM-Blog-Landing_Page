import React from 'react'
import './featureTextContainer.css'


const FeatureTextContainer = (props) => {
    return (
        <div className='featureTextContainer'>
            
            <h2>{props.paragraphHeadTxt}</h2>
            <p>{props.paragraphBodyTxt}</p>
            
            
        </div>
    )
}

export default FeatureTextContainer
