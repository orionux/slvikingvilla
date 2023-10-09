import React, { useState } from "react";
// import ActiveNav from "./ActiveNav";
import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Navbar.module.css'
import SocialMedia from "./SocialMedia";

interface NavLayoutProps {
  children?: React.ReactNode;
}

const NavLayout: React.FC<NavLayoutProps> = ({ children }) => {
  const [showMoibleNav, setShowMobileNav] = useState(false);

  const mobileNavbarHandler = () => {
    setShowMobileNav((current) => !current);
  };

  const navLinks = [
    {
      id: 1,
      title: 'Home',
      link: '/'
    },
    {
      id: 2,
      title: 'Plan a Trip',
      link: '/plan-trip'
    },
    {
      id: 3,
      title: 'About',
      link: '/about-us'
    },
    {
      id: 4,
      title: 'Booking',
      link: '/booking'
    },
    {
      id: 5,
      title: 'Contact',
      link: '/contact-us'
    }
  ]

  return (
    <>
      <div className={`p-0 m-0 px-lg-0 py-lg-3 position-relative ${styles.navbarDesign}`}>
        <nav className="navbar navbar-expand-xl px-2 px-lg-5">
          <div className="container-fluid flex-column flex-xl-row align-items-start align-items-xl-center px-0 px-lg-5">

            {/* mobile toggle button */}
            <button
              className="navbar-toggler"
              onClick={mobileNavbarHandler}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="bi bi-list nav-toggle-icon"></span>
            </button>
            {showMoibleNav ? (
              <>
                <div className="d-flex flex-column text-center justify-content-start">
                  {/* <div className="d-flex justify-content-end py-1 ">
                    <i
                      className="bi bi-x-lg close-icon-mobile-nav"
                      onClick={mobileNavbarHandler}
                    ></i>
                  </div> */}
                  <div className="d-flex flex-column text-start justify-content-center pt-0 mb-5">
                    {
                      navLinks.map((item) => (
                        <Link
                          key={item.id}
                          className={`nav-link ${styles.navLink} px-3 py-2`}
                          aria-current="page"
                          onClick={mobileNavbarHandler}
                          href={item.link}
                        >
                          {item.title}
                        </Link>
                      ))
                    }
                    <SocialMedia />
                  </div>
                </div>
                {/* <ActiveNav /> */}
                {children}
              </>
            ) : null}

            {/* nav links area */}
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav d-flex justify-content-between w-100">
                {
                  navLinks.map((item) => (
                    <Link key={item.id} className={`nav-link ${styles.navLink} px-3 ps-lg-0 pe-lg-5 py-0`} href={item.link}>
                      {item.title}
                    </Link>
                  ))
                }
                <SocialMedia />
              </div>
            </div>
          </div>
        </nav>
        {/* <ActiveNav /> */}

        {children}
      </div>
    </>
  );
};

export default NavLayout;
