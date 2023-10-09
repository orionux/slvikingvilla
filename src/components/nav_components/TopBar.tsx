import React from 'react'
import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const TopBar = () => {
    return (
        <div className={` ${styles.topbar} w-100 d-flex flex-column flex-lg-row pt-5 pb-2 px-2 px-lg-5`}>
            {/* button 1 */}
            <div className="col-12 col-lg-4 d-none d-lg-flex justify-content-lg-start align-items-center px-0 px-lg-5">
                <button className={`${styles.borderBtn} ${styles.btnAll} px-3 py-2`}>Contact Us Now</button>
            </div>
            {/* logo */}
            <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                <Link className="navbar-brand font-lg mb-0" href="#">
                    <Image
                        src={"/assests/images/icons/logo.png"}
                        alt=""
                        width={200}
                        height={110}
                    />
                </Link>
            </div>
            {/* button 2 */}
            <div className="col-12 col-lg-4 d-none d-lg-flex justify-content-lg-end align-items-center px-0 px-lg-5">
                <button className={`${styles.filledBtn} ${styles.btnAll} px-3 py-2`}>Booking Now</button>
            </div>
        </div>
    )
}

export default TopBar