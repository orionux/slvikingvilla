import React from "react";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      image: "/assests/images/testimonials/voorden.png",
      name: "M. M. Van voorden",
      address: "Netherlands",
      desc: `"Amazing hospitality! The friendly team at this Sri Lankan hostel made our stay truly memorable. From helping us plan our Sri Lanka trip to embracing a cozy Denmark theme, it's a perfect blend of warmth and style."`
    },
    {
      id: 2,
      image: "/assests/images/testimonials/yayomi.png",
      name: "Yayomi Pramdige",
      address: "Denmark",
      desc: `"Thumbs up! A big shoutout to the team for their warm hospitality and assistance in organizing our Sri Lanka adventure. The Danish theme adds a unique charm, making this hostel a standout choice near the capital."`
    },
    {
      id: 3,
      image: "/assests/images/testimonials/sabiq.png",
      name: "Sabiq Jawufer",
      address: "Sri Lanka",
      desc: `"Outstanding service! Kudos to the team for their exceptional friendliness and support in planning our Sri Lanka journey. The cozy Danish theme creates a charming and comfortable atmosphere."`
    },
    {
      id: 4,
      image: "/assests/images/testimonials/voorden.png",
      name: "M. M. Van voorden",
      address: "Netherlands",
      desc: `"Amazing hospitality! The friendly team at this Sri Lankan hostel made our stay truly memorable. From helping us plan our Sri Lanka trip to embracing a cozy Denmark theme, it's a perfect blend of warmth and style."`
    },
    {
      id: 5,
      image: "/assests/images/testimonials/yayomi.png",
      name: "Yayomi Pramdige",
      address: "Denmark",
      desc: `"Thumbs up! A big shoutout to the team for their warm hospitality and assistance in organizing our Sri Lanka adventure. The Danish theme adds a unique charm, making this hostel a standout choice near the capital."`
    },
    {
      id: 6,
      image: "/assests/images/testimonials/sabiq.png",
      name: "Sabiq Jawufer",
      address: "Sri Lanka",
      desc: `"Outstanding service! Kudos to the team for their exceptional friendliness and support in planning our Sri Lanka journey. The cozy Danish theme creates a charming and comfortable atmosphere."`
    },
  ]
  return (
    <>
      <div
        className={`d-flex flex-column px-2 px-lg-5 ${styles.servicesSec} py-5`}
      >
        <div className="d-flex flex-column px-0 px-lg-5 py-0 py-lg-5">
          <div className="text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start justify-content-lg-center">
            <h4>Testimonial</h4>
            <h3>What our clients say</h3>
            <p>
              We love to hear from customers, so please leave a comment or say
              hello in an email.
            </p>
          </div>
          <div
            className={`d-flex justify-content-center align-items-center py-5`}
          >
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={10}
              slidesPerView={3}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={5000}
              loop={true}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1920: {
                  slidesPerView: 4,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {
                testimonials.map((item) => (
                  <>
                    <SwiperSlide key={item.id}>
                      <div className="d-flex justify-content-center align-items-center mb-5">
                        <div className={`d-flex flex-column p-3 p-lg-4 ${styles.slideWrap}`}>
                          <div className="d-flex flex-row align-items-center">
                            <div
                              className={`d-flex ${styles.testimonialsImgWrapper} position-relative`}
                            >
                              <Image
                                src={item.image}
                                alt=""
                                width={100}
                                height={100}
                                className={` ${styles.testimonial}`}
                              />
                              <div className={`${styles.iconQuote}`}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="33"
                                  viewBox="0 0 32 33"
                                  fill="none"
                                >
                                  <circle
                                    cx="15.598"
                                    cy="16.5013"
                                    r="15.5043"
                                    fill="#292E36"
                                  />
                                  <circle
                                    cx="15.598"
                                    cy="16.5013"
                                    r="13.8431"
                                    fill="#E1B168"
                                  />
                                  <path
                                    d="M11.5459 20.8736C12.1873 20.5983 12.7471 20.1799 13.2255 19.6185C13.7038 19.057 13.9919 18.4845 14.0897 17.9009C14.1441 17.5927 14.1713 17.3284 14.1713 17.1082C14.1713 16.855 14.1441 16.6458 14.0897 16.4807C13.5788 17.0202 12.9319 17.2899 12.1492 17.2899C11.3665 17.2899 10.7305 17.0587 10.2413 16.5963C9.75211 16.1339 9.50751 15.4953 9.50751 14.6806C9.50751 13.9099 9.76842 13.2824 10.2902 12.7979C10.8012 12.3135 11.4535 12.0713 12.2471 12.0713C13.3342 12.0713 14.1278 12.4676 14.6279 13.2603C14.8562 13.6016 15.0355 14.02 15.166 14.5154C15.2964 15.0219 15.3617 15.5394 15.3617 16.0678C15.3617 17.2238 15.0681 18.2808 14.4811 19.2386C13.8941 20.1965 13.0189 20.9451 11.8557 21.4846L11.5459 20.8736ZM18.4274 20.8736C19.0688 20.5983 19.6286 20.1799 20.107 19.6185C20.5853 19.057 20.8734 18.4844 20.9712 17.9009C21.0256 17.5927 21.0528 17.3284 21.0528 17.1082C21.0528 16.855 21.0256 16.6458 20.9712 16.4807C20.4603 17.0202 19.8134 17.2899 19.0307 17.2899C18.248 17.2899 17.612 17.0587 17.1228 16.5963C16.6336 16.1339 16.389 15.4953 16.389 14.6806C16.389 13.9099 16.6499 13.2824 17.1717 12.7979C17.6827 12.3135 18.335 12.0713 19.1286 12.0713C20.2157 12.0713 21.0093 12.4676 21.5094 13.2603C21.7377 13.6016 21.917 14.02 22.0475 14.5154C22.1779 15.0219 22.2432 15.5394 22.2432 16.0678C22.2432 17.2238 21.9496 18.2808 21.3626 19.2386C20.7755 20.1965 19.9004 20.9451 18.7372 21.4846L18.4274 20.8736Z"
                                    fill="#292E36"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="d-flex flex-column ms-3">
                              <h3 className="mb-0" style={{ fontSize: "22px" }}>{item.name}</h3>
                              <p className="mb-0" style={{ color: "#B59841" }}>{item.address}</p>
                            </div>
                          </div>
                          <hr />
                          <span style={{ fontWeight: "300", fontSize: "18px" }}><i>{item.desc}</i></span>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
