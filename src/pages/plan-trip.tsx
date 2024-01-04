import Testimonials from "@/components/home_components/testimonials";
import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import CheckAvailability from "@/components/home_components/check_availability/CheckAvailability";
import Link from "next/link";
import { MdPhoneAndroid } from "react-icons/md";

import { useState } from 'react';
import { GoDotFill } from "react-icons/go";
import { FaCircle } from "react-icons/fa";


const PlanTrip = () => {
 
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: React.SetStateAction<number>) => {
      setToggleState(index);
  }


  return (
    <>
      <div className="d-flex flex-column p-0 m-0 ">
        <div className={`d-flex w-100  align-items-center flex-column p-5 ${styles.sec_abut}`}>
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
        <div className={`${styles.sec_plan_2} d-flex py-5 w-100 px-2`}>
          <div className="d-flex flex-column py-5 my-5 justify-content-center text-center align-items-center w-100">
          <h2 className={` ${styles.section_title}`}>Discover Your Perfect Adventure</h2>
          <p>We mention most popular routes there, Also you can make your own journey with us.</p>
          </div>
        </div>
  <div className={`${styles.planTrip} w-100 pt-4`}>
        
    <div className ={`${styles.blocTabs} d-flex justify-content-center gap-5`}>
      <div className= {toggleState === 1 ?`${styles.Tabs} ${styles.activeTabs} `: `${styles.Tabs}` } onClick = {() => toggleTab(1)}> Plan 01 </div>
      <div className= {toggleState === 2 ?`${styles.Tabs} ${styles.activeTabs} `: `${styles.Tabs}` } onClick = {() => toggleTab(2)}>Plan 02 </div>
      <div className= {toggleState === 3 ?`${styles.Tabs} ${styles.activeTabs} `: `${styles.Tabs}` } onClick = {() => toggleTab(3)}>Plan 03 </div>
    </div>

    <div className={`${styles.contentTabs}`}>
      <div className={toggleState === 1 ?`${styles.activeContent} `: `${styles.content}`}>
        <div className="col-12 d-flex flex-column flex-lg-row text-white">

          <div className='col-11 d-block d-lg-none pb-5'>
            <div className='position-relative d-flex justify-content-center align-items-center'>
              <Image src={'/assests/images/PlanTrip/mapback.png'} className={`${styles.positionMobile} img-fluid`} alt="" width={250} height={250} />
              <Image src={'/assests/images/PlanTrip/sirilankawa.png'} className='img-fluid' alt="" width={250} height={500} />
              <div className="d-flex flex-row position-absolute top-0 start-50">
                <Image src={'/assests/images/PlanTrip/plantopicwhite.png'} alt="" height={20} width={20} className={`${styles.locatIconMobile}`} />
                <div className={`${styles.cornerText}`}>Total Trip : 
                  <span className={`${styles.spangold}`}>184 KM</span>
                  <br/>Day Count : <span className={`${styles.spangold}`}>07</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-11 col-lg-3 ">
            <h3 className={`${styles.planTopics} pb-5`}>
              <Image src={'/assests/images/PlanTrip/plantopic.png'} alt="" height={20} width={20} className="" />
              Plan 01
            </h3>
            <p className="text-wrap">
              Embark on a Remarkable Journey of Cultural Fusion and Unmatched Hospitality at
              the Finest Hotel in Sri Lanka, Owned by a Danish Entrepreneur. Experience the
              Perfect Blend of Sri Lankan Charm and European Elegance, Where Our Expertise 
              in Hospitality Creates a Sanctuary of Comfort and Freedom. Welcome to the Epitome
              of Tranquility, the Most Exquisite and Comfortable Destination in Sri Lanka
            </p>
            <Image src={'/assests/images/PlanTrip/vehicle.png'} alt="logo" width={100} height={20} />
          </div>

          <div className="col-11 col-lg-5 d-flex justify-content-center align-items-center px-0 pt-5">
            <div className={`${styles.dayPlan} `}>
              <div className="step d-flex">
                <div>
                  <div className=" day ">1st-2nd Day</div>
                </div>
                <div>
                  <div className=" circle"><Image src={'/assests/images/PlanTrip/dot.png'} alt="" height={30} width={30}className="img-fluid d-flex" /></div>
                </div>
                <div>
                <div className="title">Airport to Seegiriya </div>
                </div>
              </div>
              <div className="step step-active d-flex">
                <div>
                  <div className="day ">3rd Day</div>
                </div>
                <div className="">
                  <div className="circle">A</div>
                </div>
                <div>
                  <div className="title">Seegiriya To Kandy</div>
                </div>
              </div>
              <div className="step d-flex">
                <div>
                <div className="day ">4th Day</div>
                </div>
                <div className="">
                  <div className="circle">B</div>
                </div>
                <div>
                  <div className="title">Kandy To Nuwara Eliya</div>
                </div>
              </div>
              <div className="step d-flex">
                <div>
                <div className="day ">5th Day</div>
                </div>
                <div>
                <div className="circle">C</div>
                </div>
                <div>
                <div className="title">Nuwara Eliya To Ella</div>
                </div>
              </div>
              <div className="step d-flex">
                <div>
                <div className="day ">6th Day</div>
                </div>
                <div>
                <div className="circle">D</div>
                </div>
                <div>
                <div className="title">Ella to Mathara or Galle</div>
                </div>
              </div>
              <div className="step d-flex">
                <div>
                <div className="day ">7th Day</div>
                </div>
                <div>
                <div className="circle ">E</div>
                </div>
                <div>
                <div className="title ">Galle or Mathara to Airport</div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-11 col-lg-3 pt-5 d-none d-lg-block'>
            <div className='position-relative'>
              <Image src={'/assests/images/PlanTrip/mapback.png'} className= {`${styles.positionBack} img-fluid`} alt="" width={250} height={250} />
              <Image src={'/assests/images/PlanTrip/sirilankawa.png'} className='img-fluid mx-auto d-block' alt="" width={300} height={600} />
              <Image src={'/assests/images/PlanTrip/plantopicwhite.png'} alt="" height={20} width={20} className={`${styles.locatWhiteIcon}`} />
            <div className={`${styles.positionText} d-flex flex-row`}>
              <div className=''>Total Trip : 
                <span className={`${styles.spangold}`}>184 KM</span>
                <br/>Day Count : <span className={`${styles.spangold}`}>07</span>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
      
      <div className={toggleState === 2 ?`${styles.activeContent} `: `${styles.content}`}>

            <div className="col-12 d-flex flex-column flex-lg-row text-white">

              <div className='col-11 d-block d-lg-none pb-5'>
                <div className='position-relative d-flex justify-content-center align-items-center'>
                  <Image src={'/assests/images/PlanTrip/mapback.png'} className={`${styles.positionMobile} img-fluid `} alt="" width={250} height={250} />
                  <Image src={'/assests/images/PlanTrip/sirilankawa.png'} className='img-fluid ' alt="" width={250} height={500} />
                  <div className="d-flex flex-row position-absolute top-0 start-50">
                    <Image src={'/assests/images/PlanTrip/plantopicwhite.png'} alt="" height={20} width={20} className={`${styles.locatIconMobile}`} />
                    <div className={`${styles.cornerText}`}>Total Trip : 
                      <span className={`${styles.spangold}`}>184 KM</span>
                      <br/>Day Count : <span className={`${styles.spangold}`}>07</span>
                    </div>
                  </div>
                </div>
              </div>

            <div className="col-11 col-lg-3 ">
              <h3 className={`${styles.planTopics} pb-5`}>
                <Image src={'/assests/images/PlanTrip/plantopic.png'} alt="" height={20} width={20} className="" />
                Plan 02
              </h3>
              <p className="">
                Embark on a Remarkable Journey of Cultural Fusion and Unmatched Hospitality at
                the Finest Hotel in Sri Lanka, Owned by a Danish Entrepreneur. Experience the
                Perfect Blend of Sri Lankan Charm and European Elegance, Where Our Expertise 
                in Hospitality Creates a Sanctuary of Comfort and Freedom. Welcome to the Epitome
                of Tranquility, the Most Exquisite and Comfortable Destination in Sri Lanka
              </p>
              <Image src={'/assests/images/PlanTrip/vehicle.png'} alt="logo" width={100} height={20} />
            </div>


            <div className="col-11 col-lg-5 d-flex justify-content-center align-items-center px-0 pt-5">
              <div className="">
                <div className="col-12 step d-flex">
                  <div>
                    <div className=" day ">1st-2nd Day</div>
                  </div>
                  <div>
                    <div className=" circle"><Image src={'/assests/images/PlanTrip/dot.png'} alt="" height={80} width={80}className="img-fluid d-flex" /></div>
                  </div>
                  <div>
                    <div className="title">Airport to Seegiriya </div>
                  </div>
                </div>
                <div className="step step-active d-flex">
                  <div>
                    <div className="day ">3rd Day</div>
                  </div>
                  <div className="">
                    <div className="circle">A</div>
                  </div>
                  <div>
                    <div className="title">Seegiriya To Kandy</div>
                  </div>
                </div>
                <div className="step d-flex">
                  <div>
                    <div className="day ">4th Day</div>
                  </div>
                  <div className="">
                    <div className="circle">B</div>
                  </div>
                  <div>
                    <div className="title">Kandy To Nuwara Eliya</div>            
                  </div>
                </div>
                <div className="step d-flex">
                  <div>
                    <div className="day ">5th Day</div>
                  </div>
                  <div>
                    <div className="circle">C</div>
                  </div>
                  <div>
                    <div className="title">Nuwara Eliya To Ella</div>
                  </div>
                </div>
                <div className="step d-flex">
                  <div>
                    <div className="day ">6th Day</div>
                  </div>
                  <div>
                    <div className="circle">D</div>
                  </div>
                  <div>
                    <div className="title">Ella to Yala or Udawalawa</div>
                  </div>
                </div>
                <div className="step d-flex">
                  <div>
                    <div className="day ">7th Day</div>
                  </div>
                  <div>
                    <div className="circle ">E</div>
                  </div>
                  <div>
                    <div className="title ">Yala or Udawalawa to Mirissa</div>
                  </div>
                </div>
                <div className="step d-flex">
                  <div>
                    <div className="day ">8th - 9th Day</div>
                  </div>
                  <div>
                    <div className="circle ">F</div>
                  </div>
                  <div>
                    <div className="title ">Mirissa to Galle (Unawatuna)</div>
                  </div>
                </div>
                <div className="step d-flex">
                  <div>
                    <div className="day ">10th Day</div>
                  </div>
                  <div>
                    <div className="circle ">G</div>
                  </div>
                  <div>
                    <div className="title ">Galle to Air port</div>
                  </div>
                </div> 
              </div>
            </div>

            <div className="col-11 col-lg-3 pt-5 d-none d-lg-block">
              <div className="position-relative">
                <Image src={'/assests/images/PlanTrip/mapback.png'} className={`${styles.positionBack} img-fluid`} alt="" width={250} height={250} />
                <Image src={'/assests/images/PlanTrip/sirilankawa.png'} className='img-fluid mx-auto d-block' alt="" width={300} height={600} />
                <Image src={'/assests/images/PlanTrip/plantopicwhite.png'} alt="" height={20} width={20} className={`${styles.locatWhiteIcon}`} />
                <div className={`${styles.positionText} d-flex flex-row`}>

                <div className="">Total Trip : 
                  <span className={`${styles.spangold}`}>184 KM</span>
                  <br/>Day Count : <span className={`${styles.spangold}`}>07</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className={toggleState === 3 ?`${styles.activeContent}`: `${styles.content}`}>
          <div className="col-12 d-flex flex-column flex-lg-row text-white">
            <div className='col-11 d-block d-lg-none pb-5'>
              <div className='position-relative d-flex justify-content-center align-items-center'>
                <Image src={'/assests/images/PlanTrip/mapback.png'} className={`${styles.positionMobile} img-fluid`} alt="" width={250} height={250} />
                <Image src={'/assests/images/PlanTrip/sirilankawa.png'} className='img-fluid' alt="" width={250} height={500} />
                  <div className="d-flex flex-row position-absolute top-0 start-50">
                    <Image src={'/assests/images/PlanTrip/plantopicwhite.png'} alt="" height={20} width={20} className={`${styles.locatIconMobile}`} />
                    <div className={`${styles.cornerText}`}>Total Trip : 
                    <span className={`${styles.spangold}`}>184 KM</span>
                    <br/>Day Count : <span className={`${styles.spangold}`}>07</span>
                    </div>
                  </div>
              </div>
            </div>

          <div className="col-11 col-lg-3 ">
            <h3 className={`${styles.planTopics} pb-5`}>
              <Image src={'/assests/images/PlanTrip/plantopic.png'} alt="" height={20} width={20} className="" />
                Plan 03
              </h3>
              <p className="">
              Embark on a Remarkable Journey of Cultural Fusion and Unmatched Hospitality at
              the Finest Hotel in Sri Lanka, Owned by a Danish Entrepreneur. Experience the
              Perfect Blend of Sri Lankan Charm and European Elegance, Where Our Expertise 
              in Hospitality Creates a Sanctuary of Comfort and Freedom. Welcome to the Epitome
              of Tranquility, the Most Exquisite and Comfortable Destination in Sri Lanka
              </p>
              <Image src={'/assests/images/PlanTrip/vehicle.png'} alt="logo" width={100} height={20} />
          </div>


        <div className="col-11 col-lg-5 d-flex justify-content-center align-items-center px-0 pt-5">
          <div className="">
            <div className="col-12 step d-flex">
              <div>
                <div className=" day ">1st-2nd Day</div>
              </div>
              <div>
                <div className=" circle"><Image src={'/assests/images/PlanTrip/dot.png'} alt="" height={80} width={80}className="img-fluid d-flex" /></div>
              </div>
              <div>
                <div className="title">Airport to Seegiriya </div>
              </div>
            </div>
            <div className="step step-active d-flex">
              <div>
                <div className="day ">3rd Day</div>
              </div>
              <div className="">
                <div className="circle">A</div>
              </div>
              <div>
                <div className="title">Seegiriya To Polonnaruwa</div>  
              </div>
              </div>
              <div className="step d-flex">
                <div>
                  <div className="day ">4th Day</div>
                </div>
                <div className="">
                  <div className="circle">B</div>
                </div>
                <div>
                  <div className="title">Polonnaruwa to Anuradhapura</div>
                  
                </div>
              </div>
              <div className="step d-flex">
                <div>
                  <div className="day ">5th Day</div>
                </div>
                <div>
                  <div className="circle">C</div>
                </div>
                <div>
                  <div className="title">Anuradhapura to Kandy</div>
                </div>
              </div>
              <div className="step d-flex">
                <div>
                  <div className="day ">6th Day</div>
                </div>
                <div>
                  <div className="circle">D</div>
                </div>
                <div>
                  <div className="title">Kandy to Nuwara Eliya</div>
                </div>
              </div>
              <div className="step d-flex">
                <div>
                  <div className="day ">7th Day</div>
                </div>
                <div>
                  <div className="circle ">E</div>
                </div>
                <div>
                  <div className="title ">Nuwara Eliya to Ella</div>
                </div>
                </div>
              <div className="step d-flex">
                <div>
                  <div className="day ">8th Day</div>
                </div>
                <div>
                  <div className="circle ">F</div>
                </div>
                <div>
                  <div className="title ">Ella to Udawalawa</div>
                </div>
              </div>
              <div className="step d-flex">
                <div>
                  <div className="day ">9th Day</div>
                </div>
                <div>
                  <div className="circle ">G</div>
                </div>
                <div>
                  <div className="title ">Udawalawa to Yala</div>
                </div>
              </div>
              <div className="step d-flex">
                <div>
                  <div className="day ">10th Day</div>
                </div>
                <div>
                  <div className="circle ">H</div>
                </div>
                <div>
                  <div className="title ">Yala to Mirissa</div>
                </div>
              </div>
              <div className="step d-flex">
                <div>
                  <div className="day ">11th Day</div>
                </div>
                <div>
                  <div className="circle ">I</div>
                </div>
                <div>
                  <div className="title ">Mirissa to Galle</div>
                </div>
              </div>
              <div className="step d-flex">
                <div>
                  <div className="day ">12th Day</div>
                </div>
                <div>
                  <div className="circle ">J</div>
                </div>
                <div>
                  <div className="title ">Galle to Bentota</div>
                </div>
              </div>
              <div className="step d-flex">
                <div>
                  <div className="day ">13th Day</div>
                </div>
                <div>
                  <div className="circle ">K</div>
                </div>
                <div>
                  <div className="title ">Bentota to Colombo</div>
                </div>
              </div>
              <div className="step d-flex">
                <div>
                  <div className="day ">14th Day</div>
                </div>
                <div>
                  <div className="circle ">L</div>
                </div>
                <div>
                  <div className="title ">Colombo To Airport</div>
                </div>
              </div>
          </div>
        </div>

        <div className="col-11 col-lg-3 pt-5 d-none d-lg-block">
          <div className="position-relative">
            <Image src={'/assests/images/PlanTrip/mapback.png'} className={`${styles.positionBack} img-fluid`}alt="" width={250} height={250} />
            <Image src={'/assests/images/PlanTrip/sirilankawa.png'} className='img-fluid mx-auto d-block' alt="" width={300} height={600} />
            <Image src={'/assests/images/PlanTrip/plantopicwhite.png'} alt="" height={20} width={20} className={`${styles.locatWhiteIcon}`} />
            <div className={`${styles.positionText} d-flex flex-row`}>
              <div className="">Total Trip : <span className={`${styles.spangold}`}>184 KM</span><br/>Day Count : <span className={`${styles.spangold}`}>07</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

      <div className='d-flex justify-content-center gap-2 pt-4'>
        <div className= {toggleState === 1 ?`text-warning `: `text-white` } onClick = {() => toggleTab(1)}> <GoDotFill /></div>
        <div className= {toggleState === 2 ?`text-warning `: `text-white`} onClick = {() => toggleTab(2)}> <GoDotFill /></div>
        <div className= {toggleState === 3 ?`text-warning `: `text-white`} onClick = {() => toggleTab(3)}> <GoDotFill /></div>
      </div>
      
      <div className='text-center pt-5 mb-0 mb-lg-0 d-flex text-nowrap flex-column flex-md-row align-items-center justify-content-center'>
        <button className={`text-center text-white ${styles.planButtons}`}>Start With This Plan</button>
        <button className={`text-center text-white ${styles.planButtons}`}>Make Custom Plan</button>
      </div>
  </div>

    
{/*
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
  */}
</div>
</>
  );
};

export default PlanTrip;
