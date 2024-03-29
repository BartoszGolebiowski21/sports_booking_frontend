import React, { useState, useEffect } from 'react'
import Reservation from '../components/Reservation.jsx'

function ReservationList({ facility, reservations, setReservations }) {

    // const [reservations, setReservations] = useState([])

    useEffect(() => {

        async function fetchReservations() {

            try{
                const response = await fetch('/api/reservation/')

                if(!response.ok) {
                    throw new Error('Failed to fetch')
                }
                const data = await response.json()
                setReservations(data)
            }

            catch(err) {
                console.error(err)
            }
        }

        fetchReservations()
    }, [])

    const filteredReservations = reservations.filter(
        (reservation) => reservation.facility === facility.id
    )

    return (
        <div>
            <h3>Aktualne rezerwacje dla tego obiektu:</h3>
            <ul>
                {filteredReservations.map(reservation => (
                    <li key={reservation.id}>
                        <Reservation reservation={reservation} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReservationList