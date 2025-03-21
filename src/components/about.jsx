import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import AllSkills from './AllSkill'


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
            <p>{restData.acf?.about}</p>
            <AllSkills />            
        </>
    )
}

export default About
