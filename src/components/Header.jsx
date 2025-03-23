import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import ACFImage from './ACFImage'
import '../assets/styles/component/_header.scss'
const Header = () => {
    const restPath = restBase + 'pages/14?_embed&_fields=acf&acf_format=standard' 
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
            {restData.acf?.logo && <ACFImage image={restData.acf.logo} />}
        </>            
    )
}

export default Header
