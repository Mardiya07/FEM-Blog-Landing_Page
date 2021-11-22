import React from 'react'
import Logo from '../logo/Logo'
import ContentSectioner from './ContentSectioner'
import './footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <Logo/>
            <ContentSectioner/>
        </div>
    )
}

export default Footer
