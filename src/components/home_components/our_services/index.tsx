import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import React from 'react'

const OurServices = () => {
    return (
        <>
            <div className={`d-flex flex-column px-2 px-lg-5 ${styles.servicesSec} py-5`}>
                <div className="d-flex flex-column flex-lg-row px-0 px-lg-5 py-0 py-lg-5">
                    <div className="col-12 col-lg-4 text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start justify-content-lg-center">
                        <h4>What we offer</h4>
                        <h3>Our Great Services</h3>
                        <p>Lorem Ipsum is that it has a more-or-less normal distribution content making it look like readable English. </p>
                    </div>
                    <div className={`col-12 col-lg-8 d-flex flex-column flex-md-row justify-content-center align-items-center`}>
                        <div className={`col-8 col-md-4 p-2 d-flex justify-content-center`}>
                            <div className={`p-4 ${styles.outer_box} `}>
                                <div className={`d-flex flex-column justify-content-center align-items-center text-center p-4 ${styles.inner_box}`}>
                                    <Image
                                        src={"/assests/images/icons/canander.png"}
                                        alt=""
                                        width={50}
                                        height={50}
                                        className='img-fluid'
                                    />
                                    <span className='mt-2'>Opened 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className={`col-8 col-md-4 p-2 d-flex justify-content-center`}>
                            <div className={`p-4 ${styles.outer_box} `}>
                                <div className={`d-flex flex-column justify-content-center align-items-center text-center p-4 ${styles.inner_box}`}>
                                    <Image
                                        src={"/assests/images/icons/menu.png"}
                                        alt=""
                                        width={50}
                                        height={50}
                                        className='img-fluid'
                                    />
                                    <span className='mt-2'>Special Menus</span>
                                </div>
                            </div>
                        </div>
                        <div className={`col-8 col-md-4 p-2 d-flex justify-content-center`}>
                            <div className={`p-4 ${styles.outer_box} `}>
                                <div className={`d-flex flex-column justify-content-center align-items-center text-center p-4 ${styles.inner_box}`}>
                                    <Image
                                        src={"/assests/images/icons/car.png"}
                                        alt=""
                                        width={50}
                                        height={50}
                                        className='img-fluid'
                                    />
                                    <span className='mt-2'>Trip Planning</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices