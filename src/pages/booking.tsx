import Testimonials from '@/components/home_components/testimonials'
import React from 'react'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdPhoneAndroid } from "react-icons/md";
import Calendar from "../components/calendar";


const Booking = () => {
  return (
    <>
      <div className="d-flex flex-column p-0 m-0 ">
        <div className={`d-flex w-100  align-items-center flex-column p-5 ${styles.sec_abut}`}>
          <h2 className='my-4'>Booking</h2>
        </div>
        {/* section 2 */}
        <div className={`${styles.sec_plan_2} d-flex py-5 w-100`}>
          <div className="d-flex flex-column py-5 my-5 justify-content-center text-center align-items-center w-100">
          <div
          className={`d-flex pb-5 bg-white w-100 justify-content-center align-items-center ${styles.availability_plan}`}
        >
          <div
            className={`${styles.checkCard} col-12 col-lg-11 p-3 d-flex flex-column flex-lg-row py-5 py-lg-3`}
            style={{ backgroundColor: "#B9983B" }}
          >
            <div className="col-12 col-lg-2 d-flex flex-column text-center justify-content-center align-items-center">
              <h3 className="mb-0 font-weight-700" style={{ fontSize: "22px" }}>
                When you start <br></br>your JOURNEY
              </h3>
            </div>
            <div className="col-12 col-lg-7 d-flex flex-column flex-lg-row text-center justify-content-center align-items-center">
              <div className="col-12 col-lg-8 d-flex flex-column flex-md-row justify-content-center py-3 py-lg-0">
                <div className="col-12 col-md-4 col-lg-6 p-2">
                  <p className="mb-0 font-weight-700">CHECK-IN</p>
                  <div className="bg-white p-3 text-center justify-content-center align-items-center">
                    <h1 className="text-black mb-0 font-weight-700">04</h1>
                    <p className="text-black mb-0 font-weight-700">
                      January 2023
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-6 p-2">
                  <p className="mb-0 font-weight-700">CHECK-OUT</p>
                  <div className="bg-white p-3 text-center justify-content-center align-items-center">
                    <h1 className="text-black mb-0 font-weight-700">04</h1>
                    <p className="text-black mb-0 font-weight-700">
                      January 2023
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`col-12 col-lg-4 pb-3 pb-lg-0 ${styles.promoText}`}
              >
                <p className="mb-0">HAVE A PROMOTIONAL CODE</p>
                <Link href={"#"} className={` mb-0 ${styles.promoLink} `}>
                  APPLY HERE
                </Link>
                <p className="mb-0">
                  <MdPhoneAndroid />
                  +9411352145
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex flex-column text-center justify-content-center align-items-center">
              <div
                className={`d-flex flex-column text-center px-4 py-4 ${styles.darkBox}`}
              >
                <p className="mb-0">CHECK AVAILABILITY</p>
                <span className="mb-0">BEST PRICE GUARANTEED</span>
              </div>
            </div>
            
          </div>
          {/* calander */}
          
          
        </div>
        <Calendar />
          </div>
          
        </div>
        {/* section 3 */}
        <div className="d-flex flex-column justify-content-center align-items-center px-2 px-lg-5 py-5 m-0 w-100">
          <div className="d-flex flex-column justify-content-center align-items-center p-0 p-lg-5 m-0 w-100">
            <h3 className={`${styles.section_title} mb-4`}>Our Facilities</h3>
            <div className={`d-flex flex-column flex-lg-row p-0 m-0 px-lg-2 w-100 text-center`}>
              <div className={`col-12 col-md-6 col-lg-3 pe-1 ${styles.gallery_sec_height} ${styles.column_small}`}>
              <Image
                  src={"/assests/images/gallery/1.jpg"}
                  alt=""
                  width={200}
                  height={180}
                  className={`img-fluid ${styles.team_image} mb-2`}
                />
                <Image
                  src={"/assests/images/gallery/2.jpg"}
                  alt=""
                  width={200}
                  height={180}
                  className={`img-fluid ${styles.team_image}`}
                />
              </div>
              <div className={`col-12 col-md-6 col-lg-6 p-1 ${styles.gallery_sec_height} ${styles.column_lg}`}>
              <Image
                  src={"/assests/images/gallery/cropped.png"}
                  alt=""
                  width={350}
                  height={300}
                  className={`img-fluid ${styles.team_image} mb-2`}
                />
              </div>
              <div className={`col-12 col-md-6 col-lg-3 ps-1 ${styles.gallery_sec_height} ${styles.column_small}`}>
              <Image
                  src={"/assests/images/gallery/4.jpg"}
                  alt=""
                  width={200}
                  height={180}
                  className={`img-fluid ${styles.team_image} mb-2`}
                />
                <Image
                  src={"/assests/images/gallery/5.jpg"}
                  alt=""
                  width={200}
                  height={180}
                  className={`img-fluid ${styles.team_image}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking