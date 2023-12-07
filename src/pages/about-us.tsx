import Testimonials from "@/components/home_components/testimonials";
import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import BookingSec from "@/components/home_components/check_availability/Booking";

const AboutUs = () => {
  return (
    <>
      <div className="d-flex flex-column p-0 m-0 ">
        <div
          className={`d-flex w-100  align-items-center flex-column p-5 ${styles.sec_abut}`}
        >
          <h2 className="my-4">About Us</h2>
        </div>
        {/* section 2 */}
        <div className="d-flex px-2 px-lg-5 py-5 pb-lg-5 pt-lg-5">
          <div className="d-flex flex-column-reverse flex-lg-row px-2 px-lg-5 py-0 py-lg-5">
            <div
              className={`col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center px-0 px-md-5 px-lg-0 ${styles.storySec} px-0 px-lg-5`}
            >
              <div className="d-flex flex-column mb-4 mt-4 mt-lg-0">
                <h4 className="mb-2">About us</h4>
                <h3 className="mb-2">Quality and Tradition</h3>
                <p className="mb-2">
                  Embark on a Remarkable Journey of Cultural Fusion and
                  Unmatched Hospitality at the Finest Hotel in Sri Lanka, Owned
                  by a Danish Entrepreneur. Experience the Perfect Blend of Sri
                  Lankan Charm and European Elegance, Where Our Expertise in
                  Hospitality Creates a Sanctuary of Comfort and Freedom.
                  Welcome to the Epitome of Tranquility, the Most Exquisite and
                  Comfortable Destination in Sri Lanka
                </p>
              </div>
              <div className="d-flex flex-column flex-md-row mb-4 w-100">
                <div className="col-12 d-flex flex-column me-0 me-md-2 align-items-start justify-content-start">
                  <span className="mb-0">Asoka Premadige</span>
                  <Image
                    src={"/assests/images/bg/signature.png"}
                    alt=""
                    width={100}
                    height={100}
                    className={`img-fluid`}
                  />
                  <button
                    className={`${styles.borderBtn} ${styles.btnAll} px-3 py-2 mt-3`}
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center  px-0 px-md-5 position-relative`}
            >
              <Image
                src={"/assests/images/bg/aboutquality.png"}
                alt=""
                width={350}
                height={300}
                className={`${styles.imgStory}`}
              />
              <div
                className="d-flex bg-white flex-column position-absolute pe-4 pt-4 bg-transparent"
                style={{ left: 0, bottom: 0 }}
              >

                    <Image
                      src={"/assests/images/icons/villablack.png"}
                      alt=""
                      width={220}
                      height={100}
                      className={`img-fluid ${styles.ceo_img}`}
                    />

                {/*
                <div className="d-flex flex-row">
                  <div className="col-3 me-2 d-flex flex-column justify-content-center">
                    <Image
                      src={"/assests/images/bg/ceo.jpg"}
                      alt=""
                      width={60}
                      height={60}
                      className={`img-fluid ${styles.ceo_img}`}
                    />
                  </div>
                  <div className="col-9 d-flex flex-column justify-content-center">
                    <p className={`${styles.ceo_name}`}>Josefine</p>
                    <h4 className={`${styles.ceo_position}`}>CEO & Founder</h4>
                  </div>
                </div>
                <p className={`${styles.ceo_desc} pe-3 pt-2`}>
                  Capitalize on low hanging fruit
                  <br></br> to identify a ballpark
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="114"
                  height="17"
                  viewBox="0 0 114 17"
                  fill="none"
                >
                  <path
                    d="M13.8948 16.3238C13.7724 16.3243 13.6531 16.2868 13.5537 16.2166L8.88283 12.8849L4.21194 16.2166C4.11215 16.2878 3.99192 16.326 3.86865 16.3255C3.74537 16.3251 3.62544 16.2861 3.52617 16.2142C3.42691 16.1423 3.35347 16.0411 3.31647 15.9254C3.27946 15.8097 3.28081 15.6855 3.32032 15.5706L5.14205 10.2617L0.42067 7.07615C0.318402 7.00723 0.241215 6.90793 0.200389 6.79277C0.159562 6.67761 0.157235 6.55263 0.193748 6.43608C0.23026 6.31952 0.303698 6.21751 0.403332 6.14495C0.502966 6.07239 0.623574 6.03307 0.747535 6.03275H6.57226L8.33007 0.710335C8.36794 0.595426 8.44182 0.495271 8.54113 0.424237C8.64044 0.353203 8.76006 0.314941 8.88283 0.314941C9.00561 0.314941 9.12523 0.353203 9.22454 0.424237C9.32385 0.495271 9.39773 0.595426 9.4356 0.710335L11.1934 6.03454H17.0181C17.1423 6.03448 17.2631 6.07352 17.3631 6.14594C17.463 6.21837 17.5367 6.32037 17.5735 6.43701C17.6102 6.55365 17.608 6.6788 17.5672 6.79414C17.5265 6.90947 17.4492 7.00893 17.3468 7.07794L12.6236 10.2617L14.4443 15.5691C14.4738 15.6551 14.4821 15.7467 14.4685 15.8364C14.4549 15.9261 14.4198 16.0113 14.3661 16.0851C14.3124 16.1588 14.2417 16.2189 14.1597 16.2604C14.0778 16.3019 13.9869 16.3237 13.8948 16.3238Z"
                    fill="#E1B168"
                  />
                  <path
                    d="M38.1057 16.3238C37.9834 16.3243 37.864 16.2868 37.7647 16.2166L33.0938 12.8849L28.4229 16.2166C28.3231 16.2878 28.2029 16.326 28.0796 16.3255C27.9563 16.3251 27.8364 16.2861 27.7371 16.2142C27.6379 16.1423 27.5644 16.0411 27.5274 15.9254C27.4904 15.8097 27.4918 15.6855 27.5313 15.5706L29.353 10.2617L24.6316 7.07615C24.5293 7.00723 24.4522 6.90793 24.4113 6.79277C24.3705 6.67761 24.3682 6.55263 24.4047 6.43608C24.4412 6.31952 24.5146 6.21751 24.6143 6.14495C24.7139 6.07239 24.8345 6.03307 24.9585 6.03275H30.7832L32.541 0.710335C32.5789 0.595426 32.6528 0.495271 32.7521 0.424237C32.8514 0.353203 32.971 0.314941 33.0938 0.314941C33.2165 0.314941 33.3362 0.353203 33.4355 0.424237C33.5348 0.495271 33.6087 0.595426 33.6465 0.710335L35.4043 6.03454H41.2291C41.3532 6.03448 41.4741 6.07352 41.574 6.14594C41.6739 6.21837 41.7477 6.32037 41.7844 6.43701C41.8211 6.55365 41.819 6.6788 41.7782 6.79414C41.7374 6.90947 41.6601 7.00893 41.5578 7.07794L36.8346 10.2617L38.6552 15.5691C38.6847 15.6551 38.693 15.7467 38.6794 15.8364C38.6658 15.9261 38.6307 16.0113 38.577 16.0851C38.5234 16.1588 38.4526 16.2189 38.3707 16.2604C38.2887 16.3019 38.1979 16.3237 38.1057 16.3238Z"
                    fill="#E1B168"
                  />
                  <path
                    d="M61.3469 16.3238C61.2246 16.3243 61.1053 16.2868 61.0059 16.2166L56.335 12.8849L51.6641 16.2166C51.5643 16.2878 51.4441 16.326 51.3208 16.3255C51.1975 16.3251 51.0776 16.2861 50.9783 16.2142C50.8791 16.1423 50.8056 16.0411 50.7686 15.9254C50.7316 15.8097 50.733 15.6855 50.7725 15.5706L52.5942 10.2617L47.8728 7.07615C47.7706 7.00723 47.6934 6.90793 47.6525 6.79277C47.6117 6.67761 47.6094 6.55263 47.6459 6.43608C47.6824 6.31952 47.7558 6.21751 47.8555 6.14495C47.9551 6.07239 48.0757 6.03307 48.1997 6.03275H54.0244L55.7822 0.710335C55.8201 0.595426 55.894 0.495271 55.9933 0.424237C56.0926 0.353203 56.2122 0.314941 56.335 0.314941C56.4578 0.314941 56.5774 0.353203 56.6767 0.424237C56.776 0.495271 56.8499 0.595426 56.8877 0.710335L58.6456 6.03454H64.4703C64.5944 6.03448 64.7153 6.07352 64.8152 6.14594C64.9151 6.21837 64.9889 6.32037 65.0256 6.43701C65.0624 6.55365 65.0602 6.6788 65.0194 6.79414C64.9786 6.90947 64.9014 7.00893 64.799 7.07794L60.0758 10.2617L61.8964 15.5691C61.9259 15.6551 61.9342 15.7467 61.9206 15.8364C61.907 15.9261 61.8719 16.0113 61.8183 16.0851C61.7646 16.1588 61.6938 16.2189 61.6119 16.2604C61.5299 16.3019 61.4391 16.3237 61.3469 16.3238Z"
                    fill="#E1B168"
                  />
                  <path
                    d="M85.5578 16.3238C85.4355 16.3243 85.3162 16.2868 85.2168 16.2166L80.5459 12.8849L75.875 16.2166C75.7752 16.2878 75.655 16.326 75.5317 16.3255C75.4085 16.3251 75.2885 16.2861 75.1893 16.2142C75.09 16.1423 75.0166 16.0411 74.9796 15.9254C74.9425 15.8097 74.9439 15.6855 74.9834 15.5706L76.8051 10.2617L72.0838 7.07615C71.9815 7.00723 71.9043 6.90793 71.8635 6.79277C71.8226 6.67761 71.8203 6.55263 71.8568 6.43608C71.8933 6.31952 71.9668 6.21751 72.0664 6.14495C72.1661 6.07239 72.2867 6.03307 72.4106 6.03275H78.2354L79.9932 0.710335C80.031 0.595426 80.1049 0.495271 80.2042 0.424237C80.3035 0.353203 80.4231 0.314941 80.5459 0.314941C80.6687 0.314941 80.7883 0.353203 80.8876 0.424237C80.9869 0.495271 81.0608 0.595426 81.0987 0.710335L82.8565 6.03454H88.6812C88.8053 6.03448 88.9262 6.07352 89.0261 6.14594C89.1261 6.21837 89.1998 6.32037 89.2366 6.43701C89.2733 6.55365 89.2711 6.6788 89.2303 6.79414C89.1895 6.90947 89.1123 7.00893 89.0099 7.07794L84.2867 10.2617L86.1073 15.5691C86.1368 15.6551 86.1451 15.7467 86.1315 15.8364C86.118 15.9261 86.0829 16.0113 86.0292 16.0851C85.9755 16.1588 85.9048 16.2189 85.8228 16.2604C85.7408 16.3019 85.65 16.3237 85.5578 16.3238Z"
                    fill="#E1B168"
                  />
                  <path
                    d="M109.768 16.3238C109.645 16.3243 109.526 16.2868 109.427 16.2166L104.756 12.8849L100.085 16.2166C99.9852 16.2878 99.865 16.326 99.7417 16.3255C99.6184 16.3251 99.4985 16.2861 99.3992 16.2142C99.3 16.1423 99.2265 16.0411 99.1895 15.9254C99.1525 15.8097 99.1539 15.6855 99.1934 15.5706L101.015 10.2617L96.2937 7.07615C96.1914 7.00723 96.1143 6.90793 96.0734 6.79277C96.0326 6.67761 96.0303 6.55263 96.0668 6.43608C96.1033 6.31952 96.1767 6.21751 96.2764 6.14495C96.376 6.07239 96.4966 6.03307 96.6206 6.03275H102.445L104.203 0.710335C104.241 0.595426 104.315 0.495271 104.414 0.424237C104.513 0.353203 104.633 0.314941 104.756 0.314941C104.879 0.314941 104.998 0.353203 105.098 0.424237C105.197 0.495271 105.271 0.595426 105.309 0.710335L107.066 6.03454H112.891C113.015 6.03448 113.136 6.07352 113.236 6.14594C113.336 6.21837 113.41 6.32037 113.447 6.43701C113.483 6.55365 113.481 6.6788 113.44 6.79414C113.4 6.90947 113.322 7.00893 113.22 7.07794L108.497 10.2617L110.317 15.5691C110.347 15.6551 110.355 15.7467 110.342 15.8364C110.328 15.9261 110.293 16.0113 110.239 16.0851C110.185 16.1588 110.115 16.2189 110.033 16.2604C109.951 16.3019 109.86 16.3237 109.768 16.3238Z"
                    fill="#E1B168"
                  />
                </svg> 
                */}
              </div>
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div
          className={`d-flex flex-column px-2 px-lg-5 justify-content-center align-items-center ${styles.Abut_sec_3_Bg} py-5`}
        >
          <div className="d-flex flex-column flex-lg-row p-0 p-lg-5 w-100">
            <div
              className={`col-12 col-lg-3 py-3 d-flex flex-column text-center justify-content-center align-items-center  ${styles.services_column} ${styles.side_border}`}
            >
              <Image
                src={"/assests/images/icons/fresh_products.png"}
                alt=""
                width={72}
                height={72}
              />
              <h3 className="mt-2">Fresh Product</h3>
              <p className="">
                Professional consider everyone <br /> probls small niche
                friendly.
              </p>
            </div>
            <div
              className={`col-12 col-lg-3 py-3 d-flex flex-column text-center justify-content-center align-items-center  ${styles.services_column} ${styles.side_border}`}
            >
              <Image
                src={"/assests/images/icons/skilled_chefs.png"}
                alt=""
                width={72}
                height={72}
              />
              <h3 className="mt-2">Skilled Chefs</h3>
              <p className="">
                Professional consider everyone <br /> probls small niche
                friendly.
              </p>
            </div>
            <div
              className={`col-12 col-lg-3 py-3 d-flex flex-column text-center justify-content-center align-items-center  ${styles.services_column} ${styles.side_border}`}
            >
              <Image
                src={"/assests/images/icons/drinks_juices.png"}
                alt=""
                width={72}
                height={72}
              />
              <h3 className="mt-2">Drinks & Juices</h3>
              <p className="">
                Professional consider everyone <br /> probls small niche
                friendly.
              </p>
            </div>
            <div
              className={`col-12 col-lg-3 py-3 d-flex flex-column text-center justify-content-center align-items-center  ${styles.services_column}`}
            >
              <Image
                src={"/assests/images/icons/vegan_cuisine.png"}
                alt=""
                width={72}
                height={72}
              />
              <h3 className="mt-2">Vegan Cuisine</h3>
              <p className="">
                Professional consider everyone <br /> probls small niche
                friendly.
              </p>
            </div>
          </div>
        </div>
        {/* section 4 */}
        <div className="d-flex d-none flex-column justify-content-center align-items-center px-2 px-lg-5 py-5  m-0 w-100">
          <div className="d-flex flex-column justify-content-center align-items-center p-0 p-lg-5 m-0 w-100">
            <p className={`${styles.section_subtitle}`}>TEAM</p>
            <h3 className={`${styles.section_title} mb-4`}>Meet Our Team</h3>
            <div className="d-flex flex-column flex-lg-row p-0 m-0 px-lg-5 w-100 text-center justify-content-center align-items-center">
              <div className="col-12 col-md-6 col-lg-3 p-2">
                <Image
                  src={"/assests/images/team/member (4).png"}
                  alt=""
                  width={150}
                  height={150}
                  className={`img-fluid ${styles.team_image}`}
                />
                <h4 className={`${styles.teamname} mb-0 mt-2`}>Avroko</h4>
                <p className={`${styles.teamposition} mb-0`}>Master Chef</p>
              </div>
              <div className="col-12 col-md-6 col-lg-3 p-2">
                <Image
                  src={"/assests/images/team/member (1).png"}
                  alt=""
                  width={150}
                  height={150}
                  className={`img-fluid ${styles.team_image}`}
                />
                <h4 className={`${styles.teamname} mb-0 mt-2`}>Evan Mattew</h4>
                <p className={`${styles.teamposition} mb-0`}>Master Chef</p>
              </div>
              <div className="col-12 col-md-6 col-lg-3 p-2">
                <Image
                  src={"/assests/images/team/member (2).png"}
                  alt=""
                  width={150}
                  height={150}
                  className={`img-fluid ${styles.team_image}`}
                />
                <h4 className={`${styles.teamname} mb-0 mt-2`}>
                  Diane Clarkson
                </h4>
                <p className={`${styles.teamposition} mb-0`}>Master Chef</p>
              </div>
              <div className="col-12 col-md-6 col-lg-3 p-2">
                <Image
                  src={"/assests/images/team/member (3).png"}
                  alt=""
                  width={150}
                  height={150}
                  className={`img-fluid ${styles.team_image}`}
                />
                <h4 className={`${styles.teamname} mb-0 mt-2`}>Dan Rafalin</h4>
                <p className={`${styles.teamposition} mb-0`}>Assistant Chef</p>
              </div>
            </div>
          </div>
        </div>
        {/* section 5 */}
        <div className="d-flex flex-column justify-content-center align-items-center px-2 px-lg-5 py-5 m-0 w-100">
          <div className="d-flex flex-column justify-content-center align-items-center p-0 p-lg-5 m-0 w-100">
            <p className={`${styles.section_subtitle}`}>Galary</p>
            <h3 className={`${styles.section_title} mb-4`}>What We Make</h3>
            <div
              className={`d-flex flex-column flex-lg-row p-0 m-0 px-lg-2 w-100 text-center`}
            >
              <div
                className={`col-12 col-md-6 col-lg-3 pe-1 ${styles.gallery_sec_height} ${styles.column_small}`}
              >
                <Image
                  src={"/assests/images/gallery/whatwemake1.png"}
                  alt=""
                  width={200}
                  height={180}
                  className={`img-fluid ${styles.team_image} mb-2`}
                />
                <Image
                  src={"/assests/images/gallery/whatwemake2.png"}
                  alt=""
                  width={200}
                  height={180}
                  className={`img-fluid ${styles.team_image}`}
                />
              </div>
              <div
                className={`col-12 col-md-6 col-lg-6 p-1 position-relative ${styles.gallery_sec_height} ${styles.column_lg}`}
              >
                <Image
                  src={"/assests/images/gallery/whatwemake3.png"}
                  alt=""
                  width={350}
                  height={300}
                  className={`img-fluid ${styles.team_image} mb-2`}
                />
                <div className='position-absolute top-50 start-50' >
                <Image
                      src={"/assests/images/icons/villawhite.png"}
                      alt=""
                      width={220}
                      height={60}
                      className={`img-fluid`}
                    />

                </div>
              </div>
              <div
                className={`col-12 col-md-6 col-lg-3 ps-1 ${styles.gallery_sec_height} ${styles.column_small}`}
              >
                <Image
                  src={"/assests/images/gallery/whatwemake4.png"}
                  alt=""
                  width={200}
                  height={180}
                  className={`img-fluid ${styles.team_image} mb-2`}
                />
                <Image
                  src={"/assests/images/gallery/whatwemake5.png"}
                  alt=""
                  width={200}
                  height={180}
                  className={`img-fluid ${styles.team_image}`}
                />
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        {/* section 7 */}
        <div
          className={`d-flex flex-column px-2 px-lg-5 justify-content-center align-items-center ${styles.Abut_form_sec_Bg} py-5`}
        >
          <div className="col-12 col-lg-9 d-flex px-0 px-lg-5">
            <div
              className={`d-flex flex-column justify-content-center align-items-center p-0 p-lg-5 w-100 ${styles.booking_form}`}
            >
              <h4 className="mt-5">Reservation</h4>
              <h3>Book your table now</h3>
              <form
                action=""
                className={`d-flex flex-column justify-content-center align-items-center w-100 mb-5`}
              >
                <div className="d-flex flex-column flex-lg-row w-100">
                  <div className="col-12 col-lg-6 p-2 px-lg-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className={` ${styles.large_input}`}
                    />
                  </div>
                  <div className="col-12 col-lg-6 p-2 px-lg-2">
                    <input
                      type="text"
                      placeholder="Email"
                      className={`${styles.large_input}`}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-lg-row py-2 w-100">
                  <div className="col-12 col-lg-4 p-2">
                    <input type="text" placeholder="Person" className="" />
                  </div>
                  <div className="col-12 col-lg-4 p-2">
                    <input type="time" placeholder="Timing" className="" />
                  </div>
                  <div className="col-12 col-lg-4 p-2">
                    <input type="date" placeholder="Date" className="" />
                  </div>
                </div>
                <button>Book a Table</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
