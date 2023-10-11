import React from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import Link from "next/link";
import { MdPhoneAndroid } from "react-icons/md";
import SocialMedia from '@/components/nav_components/SocialMedia';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import 'font-awesome/css/font-awesome.min.css';



const Contact = () => {
    return (
        <>
        
              <div className="d-flex flex-column p-0 m-0 ">
                            <div className={`d-flex w-100  align-items-center flex-column p-5 ${styles.sec_abut}`}>
                            <h2 className='my-4'>Contact Us</h2>
                            </div>
              </div>
              <div className="row  ">
                      <div className={` ${styles.customBackground} col-12 col-lg-5 `} >
                        
                      <div className={` ${styles.contactInfo} `}>
                <h1>Contact Information</h1>
                <p>Bring the table winwin survival strategies ensure<br/> 
                   proactive domination the end of the day<br/>  
                   going real times multiple touchpoints.</p>
                <div className={` ${styles.contactIcons}   `}>
                  <div className={` ${styles.contactIcon}  `}>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <p>Riverside 25, San Francisco, California</p>
                  </div>
                  <div className={` ${styles.contactIcon} `}>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                    <p>evamattew@mail.com</p>
                  </div>
                  <div className={` ${styles.contactIcon}  `}>
                  <i className="fa fa-phone" aria-hidden="true"></i>
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
          
          
                <div className={` ${styles.customBackground2} col-12 col-lg-7`} >
                    <div className="contact-form">
                      <p className="my-4">MAIL US</p>
                      
                        <h1>Have a Question?</h1>
                        <Form>
                          <Row>
                            <Col>
                              <Form.Group controlId="formName">
                                <Form.Control type="text" placeholder="Name" />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group controlId="formEmail">
                                <Form.Control type="email" placeholder="Email" />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Form.Group controlId="formSubject">
                                <Form.Control type="text" placeholder="Subject" />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group controlId="formPhone">
                                <Form.Control type="text" placeholder="Phone" />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Form.Group controlId="formMessage">
                            <Form.Control as="textarea" rows={3} placeholder="Message" />
                          </Form.Group>
                          <Button variant="warning" type="submit">Send</Button>
                        </Form>
                        </div>
                   
                  </div>
                  </div>
              
            
          
        </>

    );

};

export default Contact
