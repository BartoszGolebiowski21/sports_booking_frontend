import React, { useState, useEffect } from 'react'
import Facility from '../components/Facility.jsx'

function HomeScreen() {

    const [facilities, setFacilities] = useState([])

    useEffect(() => {

        async function fetchFacilities() {

            try{
                const response = await fetch('/api/sports-facility/')

                if(!response.ok) {
                    throw new Error('Failed to fetch')
                }
                const data = await response.json()
                setFacilities(data)
            }

            catch(err) {
                console.error(err)
            }
        }

        fetchFacilities()
    }, [])


    return (
        <div>
            <h1>Dostępne obiekty sportowe</h1>
            <ul>
                {facilities.map(facility => (
                    <li key={facility.id}>
                        <Facility facility={facility} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeScreen