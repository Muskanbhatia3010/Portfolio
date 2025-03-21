import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'


const Hero = () => {
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
            <h1>{restData.acf?.Name}</h1>
            <h2>{restData.acf?.tagline}</h2>
        </>            
    )
}

export default Hero
