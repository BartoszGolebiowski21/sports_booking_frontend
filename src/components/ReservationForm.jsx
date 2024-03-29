import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './ReservationForm.module.css'

function ReservationForm({ facility, onAddReservation }) {

    const [name, setName] = useState('')
    const [selectedDate, setSelectedDate] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const response = await fetch('/api/reservation/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    made_by: name,
                    facility: facility.id,
                    date: selectedDate.toISOString().split('T')[0],
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save data')
            }

            const reservation = {
                made_by: name,
                facility: facility.id,
                date: selectedDate
            }

            onAddReservation(reservation)

            setName('')
            setSelectedDate(null)
        }

        catch(err) {
            console.error(err)
        }
    }


    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.inputBox}>
                <label>Termin rezerwacji: </label>
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                />
            </div>

            {/* <div className={styles.inputBox}>
                <label htmlFor="checkbox" className={styles.checkboxLabel}>Oświetlenie </label>
                <input type="checkbox" id="checkbox"/>
            </div> */}

            <div className={styles.inputBox}>
                <label>Podaj swoje imię: </label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>

            <button className={`${styles.inputBox} ${styles.button}`} type="submit">Zarezerwuj obiekt</button>
        </form>
    )
}

export default ReservationForm