import React from 'react'
import { data } from '../../resources'
import './introContent.css'

const IntroContent = () => {
    return (
        <div className='introContent'>
            <h1 className='introContent__Text_h1'>{data.textContent.introTexth1}</h1>
            <p className='introContent__Phrase'>{data.textContent.introPhrase}</p>
            <div className='ctaSection'>
                <a className='ctaBtn ctaBtn__Start' href={data.linksUrls.ctaBtnStartUrl}>{data.textContent.ctaBtnStart}</a>
                <a className=' ctaBtn ctaBtn__Learn' href={data.linksUrls.ctaBtnLearnUrl}>Learn More</a>
            </div>
        </div>
    )
}

export default IntroContent
