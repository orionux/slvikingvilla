import React from 'react'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdPhoneAndroid } from "react-icons/md";


const ContactUs = () => {
    return (
        <>
        <div>
        <div className="d-flex flex-column p-0 m-0 ">
        <div className={`d-flex w-100  align-items-center flex-column p-5 ${styles.sec_abut}`}>
          <h2 className='my-4'>Contact Us</h2>
        </div>


        </div>
    
        </>

    );

};

export default ContactUs
