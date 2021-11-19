import React from 'react'
import Logo from '../logo/Logo';
import { data } from '../../resources';
import './navigation.css'

const Navigation = () => {
    return (
        <div className='nav'>
            <Logo/>
            <img src={data.icons.hamburgerMenuIcon} alt="menuIcon" className='nav__menuIcon' />
        </div>
    )
}

export default Navigation
