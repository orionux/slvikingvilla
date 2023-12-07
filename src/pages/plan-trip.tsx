import Testimonials from "@/components/home_components/testimonials";
import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import CheckAvailability from "@/components/home_components/check_availability/CheckAvailability";
import Link from "next/link";
import { MdPhoneAndroid } from "react-icons/md";

const PlanTrip = () => {
  return (
    <>
      <div className="d-flex flex-column p-0 m-0 ">
        <div
          className={`d-flex w-100  align-items-center flex-column p-5 ${styles.sec_abut}`}
        >
          <h2 className="my-4">Plan a Trip</h2>
        </div>
        <div className="d-flex p-2 p-lg-5">
          <div className="d-flex flex-column flex-lg-row px-0 py-5 p-lg-5">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <Image
                        src={"/assests/images/bg/Group 237876.png"}
                        alt=""
                        width={300}
                        height={300}
                        className={`${styles.img_plan} img-fluid`}
                    />
            </div>
            <div className="col-12 col-lg-6">
              <h2 className={`${styles.section_title}`}>Make your own journey with us.....</h2>
              <p className={`${styles.section_para}`}>Embark on a Remarkable Journey of Cultural Fusion and Unmatched Hospitality at the Finest Hotel in Sri Lanka, Owned by a Danish Entrepreneur. Experience the Perfect Blend of Sri Lankan Charm and European Elegance</p>
              <button className={`${styles.filledBtn_plan} ${styles.btnAll_plan} px-3 py-2`}>Start Plan your Trip</button>
            </div>
          </div>
        </div>
        <div className={`${styles.sec_plan_2} d-flex py-5 w-100`}>
          <div className="d-flex flex-column py-5 my-5 justify-content-center text-center align-items-center w-100">
          <h2 className={` ${styles.section_title}`}>Discover Your Perfect Adventure</h2>
          <p>We mention most popular routes there, Also you can make your own journey with us.</p>
          </div>
        </div>
      <div className={`${styles.planTrip} w-100`}>
        <div className="w-100 text-center px-2 pb-5">
        <a href="#" className={`${styles.planLink} text-white px-2`}>Plane 01</a>
        <a href="#" className={`${styles.planLink} text-white px-2`}>Plane 02</a>
        <a href="#" className={`${styles.planLink} text-white px-2`}>Plane 03</a>
        </div>

      <div className="col-12 d-flex text-white">
        <div className="col-3">
          <h3 className="">Plane 01</h3>
          <p className="">
            Embark on a Remarkable Journey of Cultural Fusion and Unmatched Hospitality at
             the Finest Hotel in Sri Lanka, Owned by a Danish Entrepreneur. Experience the
              Perfect Blend of Sri Lankan Charm and European Elegance, Where Our Expertise 
              in Hospitality Creates a Sanctuary of Comfort and Freedom. Welcome to the Epitome
               of Tranquility, the Most Exquisite and Comfortable Destination in Sri Lanka
          </p>
          <Image src={''} alt="logo" width={50} height={50} />
        </div>
        <div className="col-5">
          <div className="d-flex flex-row justify-content-between w-100">
            <div><p>1st -2nd Days</p></div>
            <div><p>icon</p></div>
            <p className="border-2">Airport to Seegiriya</p>
          </div>
          <div className="d-flex flex-row justify-content-between w-100">
            <div><p>3rd Day</p></div>
            <div><p>icon</p></div>
            <p className="border-2">Seegiriya To Kandy</p>
          </div>
          <div className="d-flex flex-row justify-content-between w-100">
            <div><p>4th Day</p></div>
            <div><p>icon</p></div>
            <p className="border-2">Kandy To Nuwara Eliya</p>
          </div>
          <div className="d-flex flex-row justify-content-between w-100">
            <div><p>5th Day</p></div>
            <div><p>icon</p></div>
            <p className="border-2">Nuwara Eliya To Ella</p>
          </div>
          <div className="d-flex flex-row justify-content-between w-100">
            <div><p>6th Day</p></div>
            <div><p>icon</p></div>
            <p className="border-2">Ella to Mathara or Galle</p>
          </div>
          <div className="d-flex flex-row justify-content-between w-100">
            <div><p>7th Day</p></div>
            <div><p>icon</p></div>
            <p className="border-2">Galle or Mathara to Airport</p>
          </div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          
          
        </div>
        <div className="col-3">
          <div className="position-relative">
          <Image src={'/assests/images/PlanTrip/mapback.png'} alt="" width={250} height={250} />
          <Image src={'/assests/images/PlanTrip/sirilankawa.png'} className="position-absolute top-0 end-0" alt="" width={250} height={500} />
          </div>
        
        
        </div>




      </div>



      </div>
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
        </div>
      </div>
    </>
  );
};

export default PlanTrip;
