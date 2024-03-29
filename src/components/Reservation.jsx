import React from 'react'
import styles from './Reservation.module.css'

function Reservation( {reservation} ) {

    let reservationDate = new Date(reservation.date)
    let formattedDate = reservationDate.toISOString().split('T')[0]

    return (
        <form className={styles.reservationTile}>
            <label>Obiekt zarezerwowany na dzień: <b>{formattedDate}</b></label>
            <label>Użytkownik: <b>{reservation.made_by}</b></label>
            {/* <button className={styles.button}>Usuń</button> */}
        </form>
    )
}

export default Reservation