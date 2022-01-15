import React from 'react'
import IntroContent from '../../components/introContent/IntroContent'
import Navigation from '../../components/navigation/Navigation'
import './home.css'
import { data,firstSectionText,secondSectionText } from '../../resources'
import FeatureTextContainer from '../../components/featureContainer/FeatureTextContainer'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div className='homepage'>
            <header className='headerContainer'>
           <Navigation/> 
           <IntroContent/>
            </header>
            <section className='features-section'>
            <h2 className='sloganText' >{data.textContent.featureSloganTxt}</h2>

        <div className='imageAndTextContainer'>
            <img className='editorIllustration' src={data.images.editorIllusMb} alt='editor illustration '/>
            <div>
                {firstSectionText.map((item)=>{
                    return(
                        <FeatureTextContainer key={item.id} paragraphHeadTxt={item.paragraphHeadTxt} paragraphBodyTxt={item.paragraphBodyTxt}/> 
                    )
                })}
            </div>
        </div>

           <FeatureTextContainer className='middleContainer' paragraphHeadTxt={data.textContent.paragraph3HeadTxt} paragraphBodyTxt={data.textContent.paragraph3BodyTxt}/>
           <div className='imageAndTextContainer'>
            <img className='laptopIllustration' src={data.images.laptopIllusMb} alt='laptop illustration '/>
            <div>
                {secondSectionText.map((item)=>{
                    return(
                        <FeatureTextContainer key={item.id} paragraphHeadTxt={item.paragraphHeadTxt} paragraphBodyTxt={item.paragraphBodyTxt}/> 
                    )
                })}
            </div>
        </div>
 </section>
 <Footer/>

        </div>
    )
}

export default Home
