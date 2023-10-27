import React from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import Link from "next/link";
import { MdPhoneAndroid } from "react-icons/md";
import SocialMedia from '@/components/nav_components/SocialMedia';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import 'font-awesome/css/font-awesome.min.css';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCall } from "react-icons/pi";



const Contact = () => {
    return (
        <>
        
              <div className="d-flex flex-column p-0 m-0 ">
                            <div className={`d-flex w-100  align-items-center flex-column p-5 ${styles.sec_abut}`}>
                            <h2 className='my-4'>Contact Us</h2>
                            </div>
              </div>
            <Container>
              <div className="d-flex flex-column flex-md-row my-5 "> 
                      <div className={` ${styles.customBackground} col-12 col-md-6 col-lg-5 px-1 py-1  d-flex  justify-content-center `} >
                        
                      <div className={` ${styles.contactInfo} px-3 py-3 px-md-4 py-md-5 `}>
                <h1>Contact Information</h1>
                <p>Bring the table winwin survival strategies ensure 
                   proactive domination the end of the day 
                   going real times multiple touchpoints.</p>
                <div className={` ${styles.contactIcons}  `}>
                  <div className={` ${styles.contactIcon} d-flex align-items-auto`}>
                   
                  <div className={`${styles.iconWrappercontact} d-flex justify-content-center align-items-center`}>

                  <HiOutlineLocationMarker className={` ${styles.reicons}`} />
                  </div>
                    <p>Riverside 25, San Francisco, California</p>
                  </div>
                  <div className={` ${styles.contactIcon} `}>
                 
                  <div className={`${styles.iconWrappercontact} d-flex justify-content-center align-items-center`}>

                  <AiOutlineMail className={` ${styles.reicons}`} />
                  </div>
                    <p>evamattew@mail.com</p>
                  </div>
                  <div className={` ${styles.contactIcon}  `}>
                  <div className={`${styles.iconWrappercontact} d-flex justify-content-center align-items-center`}>

                  <PiPhoneCall className={` ${styles.reicons}`} />
                  </div>
                    <p>800-234-567</p>
                  </div>
                </div>
                <div className={` ${styles.socialIcons} `}>
                <Button className={` ${styles.socialButton}  `}>
                  <FaInstagram />
                </Button>
                <Button className={` ${styles.socialButton} `}>
                  <FaFacebook />
                </Button>
                <Button className={` ${styles.socialButton}  `}>
                  <FaTwitter />
                </Button>
                <Button className={` ${styles.socialButton} `}>
                  <FaPinterest />
                </Button>

                </div>
              </div>
                                 
                    </div>
          
          
                <div className={` ${styles.customBackground2} col-12 col-md-6 col-lg-7 px-1 py-5 px-md-3 py-md-4 d-flex justify-content-center `} >
                    <div className="contact-form col-12  ">
                    <p className='mb-2'>MAIL US</p>
                      
                        <h1 className=''>Have a Question?</h1>
                        <Form>
                        
                        <div>  
                          
                          <div className="form-group d-flex flex-column flex-md-row w-100 ">
                              <Form.Control type="text" placeholder="Name" className='' />
                              <Form.Control type="email" placeholder="Email" className='' />
                          </div>
                          
                          <div className="form-group d-flex flex-column flex-md-row w-100">
                              <Form.Control type="text" placeholder="Subject" className='' />
                              <Form.Control type="text" placeholder="Phone" className='' />
                          </div>
                          
                          <div className="form-group d-flex flex-column flex-md-row w-100">
                              <Form.Control as="textarea" rows={4} placeholder="Message" className='' />
                          </div>
                          <div className="d-flex justify-content-start ">
                          <Button variant="warning" type="submit" className="px-5 py-2 ">Send</Button>
                          </div>

                        </div> 
                        </Form>
                        </div>
                   
                  </div>
              </div>
              </Container>  
            
          
        </>

    );

};

export default Contact
