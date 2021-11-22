import React from 'react'
import './featureTextContainer.css'


const FeatureTextContainer = (props) => {
    return (
        <div>
            <div>
            <h2>{props.paragraphHeadTxt}</h2>
            <p>{props.paragraphBodyTxt}</p>
            </div>
            {/* <div>
            <h2>{props.paragraph2HeadTxt}</h2>
            <p>{props.paragraph2BodyTxt}</p>
            </div> */}
        </div>
    )
}

export default FeatureTextContainer
