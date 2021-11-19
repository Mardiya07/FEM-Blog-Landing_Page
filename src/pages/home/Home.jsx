import React from 'react'
import IntroContent from '../../components/introContent/IntroContent'
import Navigation from '../../components/navigation/Navigation'
import './home.css'

const Home = () => {
    return (
        <div>
            <header className='header'>
           <Navigation/> 
           <IntroContent/>
            </header>

        </div>
    )
}

export default Home
