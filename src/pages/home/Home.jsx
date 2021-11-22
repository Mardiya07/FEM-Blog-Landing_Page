import React from 'react'
import IntroContent from '../../components/introContent/IntroContent'
import Navigation from '../../components/navigation/Navigation'
import './home.css'
import { data,firstSectionText,secondSectionText } from '../../resources'
import FeatureTextContainer from '../../components/featureContainer/FeatureTextContainer'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div>
            <header className='header'>
           <Navigation/> 
           <IntroContent/>
            </header>
            <section>
            <h2 className='sloganText' >{data.textContent.featureSloganTxt}</h2>

        <div>
            <img src={data.images.editorIllusMb} alt='editor illustration '/>
            <div>
                {firstSectionText.map((item)=>{
                    return(
                        <FeatureTextContainer key={item.id} paragraphHeadTxt={item.paragraphHeadTxt} paragraphBodyTxt={item.paragraphBodyTxt}/> 
                    )
                })}
            </div>
        </div>

           <FeatureTextContainer paragraphHeadTxt={data.textContent.paragraph3HeadTxt} paragraphBodyTxt={data.textContent.paragraph3BodyTxt}/>
           <div>
            <img src={data.images.editorIllusMb} alt='editor illustration '/>
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
