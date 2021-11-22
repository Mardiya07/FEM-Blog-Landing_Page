import logo from './images/logo.svg'
import iconHamburger from './images/icon-hamburger.svg'
import headerbackground from './images/bg-pattern-intro.svg'
import editorIllustrationMb from './images/illustration-editor-mobile.svg'
import mobileIllustration from './images/illustration-phones.svg'
import laptopIllustrationMb from './images/illustration-laptop-mobile.svg'

export const data={
   
    images:{
        backgroundImage:headerbackground,
        editorIllusMb:editorIllustrationMb,
        mobileIllus:mobileIllustration,
        laptopIllusMb:laptopIllustrationMb,

    },
    icons:{
        logoIcon:logo,
        hamburgerMenuIcon:iconHamburger
    },
        textContent:{
            introTexth1:'A modern publishing platform',
            introPhrase:'Grow your audience and build your online brand',
            ctaBtnStart:'Start for Free',
            featureSloganTxt: 'Design for the futures',
            paragraph3HeadTxt:'State of the Art Infrastructure',
            paragraph3BodyTxt:'With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.',
            },
        linksUrls:{
            ctaBtnStartUrl:'start',
            ctaBtnLearnUrl:'learn some more'
        }
        
    
    
}
export const firstSectionText=[
    {
        id:1,
        paragraphHeadTxt:'Introducing an extensible editor',
        paragraphBodyTxt:' Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.',
                
    },
    {
        id:2,
        paragraphHeadTxt:'Robust content management',
        paragraphBodyTxt:'Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.',
       
    },
]
export const secondSectionText=[
    {
        id:1,
        paragraphHeadTxt:'Free, open, simple',
        paragraphBodyTxt:'Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.',
            
    },
    {
        id:2,
        paragraphHeadTxt:'Powerful tooling',
        paragraphBodyTxt:'Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, butcapable of producing even the most complicated sites.',
    }
]
export const footerText=[
    {
        sectionName:'Product',
        
    },
    {
        sectionName:'Company',
    },
    {sectionName:'Connect',
}
]