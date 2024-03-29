import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import ReservationForm from '../components/ReservationForm.jsx'
import ReservationList from '../components/ReservationList.jsx'


function FacilityScreen() {
    
    const facilityId = useParams()
    const [facility, setFacility] = useState([])
    const [reservations, setReservations] = useState([])

    useEffect(() => {

        async function fetchFacility() {
            
            try{
                const response = await fetch(`/api/sports-facility/${facilityId.id}`)

                if(!response.ok) {
                    throw new Error('Failed to fetch')
                }
                const data = await response.json()
                setFacility(data)
            }

            catch(err) {
                console.error(err)
            }
        }
        fetchFacility()
    }, [])


    function handleAddReservation(reservation) {
        setReservations([...reservations, reservation])
    }

    return (
        <div>
            <h2>{facility.name}</h2>
            <p>Adres: {facility.address}</p>
            <p>Typ obiektu: {facility.facility_type}</p>
            <p>Cena: {facility.price} zł</p>
            <ReservationForm facility={facility} onAddReservation={handleAddReservation} />
            <ReservationList facility={facility} reservations={reservations}  setReservations={setReservations} />
        </div>
    )
}

export default FacilityScreen