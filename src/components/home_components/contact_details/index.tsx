import React from 'react'
import styles from '../../../styles/Home.module.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosTimer } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";


const ContactDetails = () => {
  return (
    <>
    <div className="d-flex flex-column flex-lg-row px-2 px-lg-5 py-2 py-lg-5 justify-content-center">
        <div className="d-flex px-0 px-lg-5 py-5 flex-column flex-lg-row w-100">
            <div className="col-12 col-lg-4 d-flex flex-column justify-content-start justify-content-lg-center align-items-start align-items-lg-center py-3 ">
                <div className={`d-flex flex-row ${styles.iconBox} align-items-center px-0 px-md-5 px-lg-0`}>
                    <div className={`${styles.iconWrapper} col-4 d-flex justify-content-center align-items-center`}>
                        <HiOutlineLocationMarker />
                    </div>
                    <div className="d-flex flex-column justify-content-center px-3">
                        <p className='mb-0'>Locate Us</p>
                        <span className='mb-0'>Riverside 25, San Francisco, California</span>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-column justify-content-start justify-content-lg-center align-items-start align-items-lg-center py-3 ">
                <div className={`d-flex flex-row ${styles.iconBox} align-items-center px-0 px-md-5 px-lg-0`}>
                    <div className={`${styles.iconWrapper} col-4 d-flex justify-content-center align-items-center`}>
                        <IoIosTimer />
                    </div>
                    <div className="d-flex flex-column justify-content-center px-3">
                        <p className='mb-0'>Open Hours</p>
                        <span className='mb-0'>24/7 Open</span>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-column justify-content-start justify-content-lg-center align-items-start align-items-lg-center py-3 ">
                <div className={`d-flex flex-row ${styles.iconBox} align-items-center px-0 px-md-5 px-lg-0`}>
                    <div className={`${styles.iconWrapper} col-4 d-flex justify-content-center align-items-center`}>
                        <FaClipboardList />
                    </div>
                    <div className="d-flex flex-column justify-content-center px-3">
                        <p className='mb-0'>Booking</p>
                        <span className='mb-0'>+94 771 874 534 - on WhatsApp</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactDetails