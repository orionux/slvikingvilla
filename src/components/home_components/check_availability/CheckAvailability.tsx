import React from "react";
import styles from '../../../styles/Home.module.css'
import Link from "next/link";
import BookingSec from "./Booking";

const CheckAvailability = () => {
    return (
        <div className="check_container d-flex justify-content-center px-0 px-lg-5 " id="Booking">
            <BookingSec />
        </div>
    )

}
export default CheckAvailability;