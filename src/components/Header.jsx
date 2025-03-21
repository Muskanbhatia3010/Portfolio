import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'


const Header = () => {
    const restPath = restBase + 'media/49' 
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
        <img src={restData.source_url} alt="Logo" className="logo" />
        </>            
    )
}

export default Header
