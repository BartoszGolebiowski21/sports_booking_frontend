import React from 'react'
// import styles from './Facility.module.css'

function Facility( {facility} ) {
    return (
        <h2>
            <a href={`/facility/${facility.id}`}>
                {facility.name}
            </a>
        </h2>
    )
}

export default Facility