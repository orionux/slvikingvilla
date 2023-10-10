import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from "next/image";
import Link from "next/link";
import { MdPhoneAndroid } from "react-icons/md";
import SocialMedia from '@/components/nav_components/SocialMedia';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';



const Contact = () => {
    return (
        <>
        <div>
              <div className="d-flex flex-column p-0 m-0 ">
                            <div className={`d-flex w-100  align-items-center flex-column p-5 ${styles.sec_abut}`}>
                            <h2 className='my-4'>Contact Us</h2>
                            </div>
              </div>
          <div className="row  ">
                <div className="col-12 col-lg-6 justify-content-center " >
                        
                        <h2>Contact Information</h2>
                        <p>Bring the table winwin survival strategies ensure<br/> 
                          proactive domination the end of the day<br/>  
                          going real times multiple touchpoints.</p>
                
                          

                        <Link href="#" className={`${styles.svgLink} `}>
                        

                        <svg
                                width="24" height="23"
                                viewBox="0 0 92.26 122.88"
                                
                                xmlns="http://www.w3.org/2000/svg"
                              >                          
                  <g>
                            <path d="M47.49,116.85c6.31-4.01,11.98-8.87,16.92-14.29c10.73-11.75,17.97-26.11,20.87-40.2c2.88-13.91,1.52-27.54-4.85-38.06 c-1.81-3.02-4.08-5.78-6.78-8.26c-7.74-7.05-16.6-10.41-25.52-10.5c-9.37-0.07-18.87,3.45-27.27,10.14 c-3.58,2.86-6.53,6.15-8.82,9.78c-5.9,9.28-7.69,20.8-5.74,32.85c1.97,12.23,7.78,25.02,17.04,36.61 c6.44,8.08,14.54,15.58,24.18,21.91L47.49,116.85L47.49,116.85z M46.13,21.16c7.05,0,13.45,2.86,18.06,7.49 c4.63,4.63,7.49,11,7.49,18.06c0,7.05-2.86,13.45-7.49,18.06c-4.63,4.63-11,7.49-18.06,7.49c-7.05,0-13.45-2.86-18.06-7.49 c-4.63-4.63-7.49-11-7.49-18.06c0-7.05,2.86-13.45,7.49-18.06C32.7,24.02,39.07,21.16,46.13,21.16L46.13,21.16z M60.51,32.33 c-3.67-3.67-8.78-5.97-14.38-5.97c-5.63,0-10.71,2.27-14.38,5.97c-3.67,3.67-5.97,8.78-5.97,14.38c0,5.63,2.27,10.71,5.97,14.38 c3.67,3.67,8.78,5.97,14.38,5.97c5.63,0,10.71-2.27,14.38-5.97c3.67-3.67,5.97-8.78,5.97-14.38C66.47,41.08,64.21,36,60.51,32.33 L60.51,32.33z M68.52,106.27c-5.6,6.12-12.09,11.61-19.42,16.06c-0.88,0.66-2.13,0.75-3.13,0.11 c-10.8-6.87-19.85-15.13-26.99-24.09C9.15,86.02,2.94,72.34,0.83,59.16c-2.15-13.36-0.14-26.2,6.51-36.68 c2.63-4.13,5.97-7.89,10.07-11.14C26.78,3.88,37.51-0.07,48.17,0c10.28,0.09,20.42,3.9,29.22,11.93c3.09,2.81,5.67,5.99,7.78,9.48 c7.15,11.77,8.69,26.81,5.56,42.01c-3.11,15.04-10.8,30.33-22.18,42.8L68.52,106.27L68.52,106.27z"/>
                          </g>
                        </svg>
                        </Link>     
                              <p>Riverside 25, San Francisco, California</p>
                             

                          
                            <p>evamattew@mail.com</p>
                        
                            <p>800-234-567</p>
                  
                </div>
          
          
                <div className="col-12 col-lg-6" >
                <div className="contact-form">
              <hr/><p>MAIL US</p><hr/>
              
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


        </div>
    
        </>

    );

};

export default Contact
