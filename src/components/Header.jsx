import React from 'react'
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <h3 className={styles.brand}>
                <a href='/'>sports-booking.com</a>
            </h3>
            <div className={styles.nav}>
                <a href='/'>Obiekty</a>
                <a href='/'>Moje rezerwacje</a>
                <a href='/'>Zaloguj</a>
            </div>
        </div>
    )
}

export default Header