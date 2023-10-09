import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import React from 'react'
import BookingSec from '../check_availability/Booking'

const Booking = () => {
  return (
    <>
    <div className={`d-flex flex-column px-2 px-lg-5 justify-content-center align-items-center ${styles.BookingBg} py-5`}>
        <BookingSec />
    </div>
    </>
  )
}

export default Booking