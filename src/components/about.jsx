import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'
import '../assets/styles/component/_about.scss';
import Footer from './Footer';

const About = () => {
    const restPath = restBase + 'pages/14' 
    const [restData, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
            }
        }
        fetchData()
    }, [restPath])
    return (
        <>
           <section className='about' id='about'>
               <h2>About</h2>
               <div className='text' dangerouslySetInnerHTML={{ __html: restData.acf?.about }}></div>
                <div className='contact' id='contact'>
                <div className='message' dangerouslySetInnerHTML={{ __html: restData.acf?.contactmsg }}></div>
                    <div className='contact-icons'>
                         <a href={restData.acf?.contact_github.url} ><FaGithub /></a>
                         <a href={restData.acf?.contact_linkedin.url} ><FaLinkedin /></a>
                         <a href={restData.acf?.contact_mail.url} ><FaEnvelope /></a>
                    </div>
                </div>
                
                <Footer/> 
           </section>      
        </>
    )
}

export default About