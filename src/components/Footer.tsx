import React from "react";
import styles from '../styles/Footer.module.css'
import Link from "next/link";
import SocialMedia from "./nav_components/SocialMedia";
import Image from "next/image";



const Footer = () => {


  return (
    <div className={`d-flex flex-column pt-5 m-0 ${styles.footerBg}`}>
      <div className="d-flex flex-column flex-lg-row justidy-content-center px-0 px-lg-5 py-2 py-lg-5">
        <div className="col-12 col-lg-3 ps-0 ps-lg-5 d-flex align-items-center justify-content-center justify-content-lg-start pb-4 pb-lg-0">
          <Link href={'#'} className={` ${styles.footerInstaLink}`}>Instagram Feed</Link>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
          <Link className="navbar-brand font-lg mb-0" href="#">
            <Image
              src={"/assests/images/icons/logo.png"}
              alt=""
              width={280}
              height={150}
            />
          </Link>
        </div>
        <div className="col-12 col-lg-3 pe-0 pe-lg-5 d-flex align-items-center justify-content-center justify-content-lg-end pb-4 pb-lg-0">
          <SocialMedia />
        </div>
      </div>
      <div className={`d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start text-center text-lg-start px-0 px-lg-5 py-2 py-lg-5 ${styles.footerContent}`}>
        <div className="col-12 col-lg-3 ps-0 ps-lg-5 d-flex flex-column text-center text-lg-start align-items-center align-items-lg-start py-4 py-lg-0">
          <h4 className="mb-3">Contact</h4>
          <p className="mb-0">No. 53/2, Keenagahalanda watta, Kalagedihena.</p>
          <p className="mb-0"><Link href={'tel:+94771874534'} style={{ color: "#E1B168" }}>Call</Link> - +94 332295547</p>
          <p className="mb-0"><Link href={'mailto:benoit@mail.com'} style={{ color: "#E1B168" }}>vikingvillalk@gmail.com</Link></p>

        </div>
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center text-center">
          <p className="mb-0"> Join our mailing list for updates, <br></br>Get news & offers events.</p>
          <div className="d-flex flex-row justify-content-center py-3">
            <form action="">
              <input type="text" placeholder="Email" className="px-3 py-2" />
              <button className="px-3 py-2" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="col-12 col-lg-3 pe-0 pe-lg-5 d-flex flex-column text-center text-lg-end align-items-center align-items-lg-end py-4 py-lg-0">
          <h4 className="mb-3">Working Hours</h4>
          <p className="mb-0" style={{ color: "#E1B168" }}>Contact Us 24/7.</p>
        </div>
      </div>
      <hr className="hrLine" />
      <div className="d-flex flex-column text-center text-white font-josefin">
        <p>© Copyright SLViking Villa</p>
      </div>

    </div>
  );
};

export default Footer;
