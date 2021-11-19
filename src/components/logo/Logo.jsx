import React from 'react'
import './logo.css';
import { data } from '../../resources';


const Logo = () => {
    return (
        <div className='logoContainer'>
            <img src={data.icons.logoIcon} alt="logo" className='logo' />
        
        </div>
    )
}

export default Logo
