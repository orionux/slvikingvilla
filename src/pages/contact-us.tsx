import React from 'react'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdPhoneAndroid } from "react-icons/md";



const Contact = () => {
    return (
        <>
        <div>
          <div className="d-flex flex-column p-0 m-0 ">
            <div className={`d-flex w-100  align-items-center flex-column p-5 ${styles.sec_abut}`}>
            <h2 className='my-4'>Contact Us</h2>
            </div>
          </div>
          <div className="row">
          <div className="col-12 col-lg-6" >
          <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Bring the table winwin survival strategies ensure<br/> 
                   proactive domination the end of the day<br/>  
                   going real times multiple touchpoints.</p>
                <div className="contact-icons">
                  <div className="contact-icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <p>Riverside 25, San Francisco, California</p>
                  </div>
                  <div className="contact-icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                    <p>evamattew@mail.com</p>
                  </div>
                  <div className="contact-icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                    <p>800-234-567</p>
                  </div>
                </div>
          </div>
          </div>
          <div className="col-12 col-lg-6">
hi
          </div>
          
          </div>  


        </div>
    
        </>

    );

};

export default Contact
