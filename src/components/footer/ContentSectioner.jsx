import React from 'react'
import './footer.css'
const ContentSectioner = () => {
    return (
        <>
           <div className='contentContainer'>

            <h3>Product</h3>
            <ul>
                <li><a href='#s'>Overview</a></li>
                <li><a href='#s'>Pricing</a></li>
                <li><a href='#s'>Marketplace</a></li>
                <li><a href='#s'>Features</a></li>
                <li><a href='#s'>Integrations</a></li>
            </ul>
           </div>
           <div className='contentContainer'>

            <h3>Company</h3>
            <ul>
                <li><a href='#s'>About</a></li>
                <li><a href='#s'>Team</a></li>
                <li><a href='#s'>Blog</a></li>
                <li><a href='#s'>Careers</a></li>
    
            </ul>
           </div>
           <div className='contentContainer'>

            <h3>Connect</h3>
            <ul>
                <li><a href='#s'>Contact</a></li>
                <li><a href='#s'>NewsLetter</a></li>
                <li><a href='#s'>LinkedIn</a></li>
               
            </ul>
           </div>
        </>
    )
}

export default ContentSectioner
