import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/pagination'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/Home.module.css";



const New = () => {
  return (
    <div>
      
      <div className='containernew py-4 ps-0 pe-0 justify-content-center bg-dark '>
        <Swiper 
            autoHeight={true}
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode, Pagination]} 
          pagination={{ clickable: true }}
            
             
            className='mySwiper'
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768:  {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                1024:  {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                1280:  {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
            }}
            >
                <SwiperSlide className=''>
                <div className="col-12 d-flex text-white">
      <div className="col-3">
        <h3 className={`${styles.planTopics}`}>
        <Image src={'/assests/images/PlanTrip/plantopic.png'} alt="" height={20} width={20} className="" />
          Plan 01
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


      <div className="col-5 d-flex justify-content-center align-items-center px-0">

        
        <div className="">
          <div className="col-12 step d-flex">
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

      <div className="col-3">
        <div className="position-relative">
        <Image src={'/assests/images/PlanTrip/mapback.png'} className="position-absolute  top-0 end-0 " alt="" width={250} height={250} />
        <Image src={'/assests/images/PlanTrip/sirilankawa.png'} className="position-absolute end-0 " alt="" width={250} height={500} />
        <div className="position-absolute top-0 end-0 d-flex flex-row">
          <Image src={'/assests/images/PlanTrip/plantopicwhite.png'} alt="" height={20} width={20} className="" />
          <div className="">Total Trip : <span className={`${styles.spangold}`}>184 KM</span><br/>Day Count : <span className={`${styles.spangold}`}>07</span></div>
        </div>
        </div>
      
      
      </div>
     
                </div>
                </SwiperSlide>

                <SwiperSlide className=''>
                <div className="col-12 d-flex text-white">
      <div className="col-3">
        <h3 className={`${styles.planTopics}`}>
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


      <div className="col-5 d-flex justify-content-center align-items-center px-0">

        
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

      <div className="col-3">
        <div className="position-relative">
        <Image src={'/assests/images/PlanTrip/mapback.png'} className="position-absolute  top-0 end-0 " alt="" width={250} height={250} />
        <Image src={'/assests/images/PlanTrip/sirilankawa.png'} className="position-absolute end-0 " alt="" width={250} height={500} />
        <div className="position-absolute top-0 end-0 d-flex flex-row">
          <Image src={'/assests/images/PlanTrip/plantopicwhite.png'} alt="" height={20} width={20} className="" />
          <div className="">Total Trip : <span className={`${styles.spangold}`}>184 KM</span><br/>Day Count : <span className={`${styles.spangold}`}>07</span></div>
        </div>
        </div>
      
      
      </div>




                </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                <div className="col-12 d-flex text-white">
      <div className="col-3">
        <h3 className={`${styles.planTopics}`}>
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


      <div className="col-5 d-flex justify-content-center align-items-center px-0">

        
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

      <div className="col-3">
        <div className="position-relative">
        <Image src={'/assests/images/PlanTrip/mapback.png'} className="position-absolute  top-0 end-0 " alt="" width={250} height={250} />
        <Image src={'/assests/images/PlanTrip/sirilankawa.png'} className="position-absolute end-0 " alt="" width={250} height={500} />
        <div className="position-absolute top-0 end-0 d-flex flex-row">
          <Image src={'/assests/images/PlanTrip/plantopicwhite.png'} alt="" height={20} width={20} className="" />
          <div className="">Total Trip : <span className={`${styles.spangold}`}>184 KM</span><br/>Day Count : <span className={`${styles.spangold}`}>07</span></div>
        </div>
        </div>
           
      </div>

                </div>
                </SwiperSlide>
                
                

        </Swiper>
      </div>
    </div>
  )
}

export default New
