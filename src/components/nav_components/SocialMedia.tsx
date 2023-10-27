import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Navbar.module.css'

const SocialMedia = () => {
    return (
        <div className="d-flex flex-row w-100 justify-content-center justify-content-lg-end">
            <Link href="#" className={`${styles.svgLink}  px-2 pe-lg-0 ps-lg-2 `}>
                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Insta">
                        <path id="Vector" d="M15.6728 1.75327C16.8731 1.7567 18.0232 2.21453 18.8719 3.02677C19.7207 3.83901 20.1991 4.93965 20.2027 6.08833V14.7575C20.1991 15.9062 19.7207 17.0068 18.8719 17.8191C18.0232 18.6313 16.8731 19.0891 15.6728 19.0926H6.614C5.4137 19.0891 4.26359 18.6313 3.41485 17.8191C2.56611 17.0068 2.08771 15.9062 2.08412 14.7575V6.08833C2.08771 4.93965 2.56611 3.83901 3.41485 3.02677C4.26359 2.21453 5.4137 1.7567 6.614 1.75327H15.6728V1.75327ZM15.6728 0.0195312H6.614C3.12608 0.0195313 0.272461 2.75042 0.272461 6.08833V14.7575C0.272461 18.0954 3.12608 20.8263 6.614 20.8263H15.6728C19.1607 20.8263 22.0143 18.0954 22.0143 14.7575V6.08833C22.0143 2.75042 19.1607 0.0195312 15.6728 0.0195312V0.0195312Z" fill="white" />
                        <path id="Vector_2" d="M17.0317 6.08815C16.763 6.08815 16.5003 6.01188 16.2768 5.86899C16.0533 5.7261 15.8792 5.523 15.7763 5.28538C15.6735 5.04776 15.6465 4.78629 15.699 4.53403C15.7514 4.28177 15.8808 4.05006 16.0709 3.86819C16.2609 3.68632 16.503 3.56247 16.7666 3.51229C17.0302 3.46212 17.3034 3.48787 17.5517 3.58629C17.8 3.68472 18.0123 3.8514 18.1616 4.06525C18.3109 4.27911 18.3906 4.53053 18.3906 4.78773C18.391 4.95861 18.3561 5.12787 18.2879 5.28581C18.2198 5.44375 18.1197 5.58726 17.9935 5.70809C17.8672 5.82891 17.7172 5.92469 17.5522 5.98991C17.3872 6.05513 17.2103 6.08852 17.0317 6.08815V6.08815ZM11.1435 6.95479C11.8602 6.95479 12.5608 7.15818 13.1568 7.53925C13.7527 7.92031 14.2172 8.46193 14.4914 9.09561C14.7657 9.7293 14.8375 10.4266 14.6976 11.0993C14.5578 11.772 14.2127 12.39 13.7059 12.875C13.1991 13.36 12.5534 13.6902 11.8504 13.8241C11.1475 13.9579 10.4189 13.8892 9.7567 13.6267C9.09454 13.3642 8.52858 12.9197 8.13039 12.3494C7.7322 11.7791 7.51967 11.1086 7.51967 10.4227C7.5207 9.50329 7.90282 8.62177 8.58219 7.97162C9.26157 7.32146 10.1827 6.95577 11.1435 6.95479V6.95479ZM11.1435 5.22105C10.0684 5.22105 9.01755 5.52612 8.12369 6.09769C7.22983 6.66926 6.53316 7.48165 6.12176 8.43214C5.71036 9.38262 5.60272 10.4285 5.81245 11.4375C6.02218 12.4466 6.53986 13.3734 7.30002 14.1009C8.06018 14.8284 9.02869 15.3238 10.0831 15.5245C11.1374 15.7252 12.2303 15.6222 13.2235 15.2285C14.2167 14.8348 15.0656 14.1681 15.6629 13.3126C16.2602 12.4572 16.5789 11.4515 16.5789 10.4227C16.5789 9.04317 16.0063 7.7201 14.9869 6.74459C13.9676 5.76908 12.585 5.22105 11.1435 5.22105V5.22105Z" fill="white" />
                    </g>
                </svg>
            </Link>
            <Link href="#" className={`${styles.svgLink}  px-2 pe-lg-0 ps-lg-2 `}>
                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Fb">
                        <path id="Vector" clipRule="evenodd" d="M22.0475 10.4854C22.0475 4.74033 17.1799 0.0820312 11.1766 0.0820312C5.17332 0.0820312 0.305664 4.74033 0.305664 10.4854C0.305664 15.6778 4.28035 19.9818 9.47801 20.7629V13.4936H6.71709V10.4854H9.47801V8.19342C9.47801 5.58654 11.1014 4.14539 13.5842 4.14539C14.7737 4.14539 16.018 4.34881 16.018 4.34881V6.90925H14.6466C13.2969 6.90925 12.8747 7.71087 12.8747 8.53478V10.4854H15.8894L15.408 13.4936H12.8752V20.7639C18.0728 19.9832 22.0475 15.6792 22.0475 10.4854V10.4854Z" fill="white" />
                    </g>
                </svg>
            </Link>
            <Link href="#" className={`${styles.svgLink}  px-2 pe-lg-0 ps-lg-2 `}>
                <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Twiter">
                        <path id="Vector" d="M23.6347 2.35756C22.7609 2.73489 21.8363 2.98348 20.8903 3.09548C21.8845 2.5169 22.6322 1.59773 22.9931 0.51035C22.0531 1.0566 21.0264 1.43987 19.957 1.64375C19.5067 1.17473 18.9651 0.801613 18.3652 0.547075C17.7652 0.292536 17.1195 0.161896 16.4672 0.163094C13.8261 0.163094 11.6888 2.25627 11.6888 4.83658C11.6869 5.19549 11.7283 5.55333 11.8121 5.90246C9.91824 5.81423 8.0638 5.33411 6.36738 4.49282C4.67096 3.65153 3.16992 2.4676 1.96029 1.01676C1.53593 1.72773 1.3115 2.53892 1.31046 3.36556C1.31046 4.98609 2.16121 6.41852 3.44582 7.25772C2.68473 7.23977 1.93923 7.03958 1.27261 6.67414V6.73202C1.27261 8.99882 2.92266 10.8846 5.10655 11.3139C4.69588 11.4227 4.27268 11.4778 3.84766 11.4778C3.54608 11.4784 3.24518 11.4493 2.94935 11.391C3.55647 13.2479 5.32349 14.5983 7.41663 14.6369C5.7158 15.9396 3.62763 16.6436 1.48032 16.6385C1.09917 16.6379 0.718368 16.6153 0.339844 16.5709C2.52431 17.9572 5.06358 18.6904 7.6554 18.6834C16.457 18.6834 21.2654 11.5598 21.2654 5.38158C21.2654 5.17901 21.2601 4.97644 21.2504 4.7787C22.1837 4.11894 22.9911 3.29906 23.6347 2.35756V2.35756Z" fill="white" />
                    </g>
                </svg>
            </Link>
            <Link href="#" className={`${styles.svgLink}  px-2 pe-lg-0 ps-lg-2 `}>
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Pintrest">
                        <path id="Vector" d="M11.9717 0.448242C5.8718 0.448242 0.925781 5.3614 0.925781 11.4208C0.925781 15.9127 3.64782 19.7727 7.53856 21.4724C7.50897 20.7083 7.53363 19.7874 7.73088 18.9546C7.94292 18.0631 9.15107 12.9736 9.15107 12.9736C9.15107 12.9736 8.79602 12.2731 8.79602 11.2396C8.79602 9.61326 9.74282 8.39844 10.9263 8.39844C11.9323 8.39844 12.4155 9.14791 12.4155 10.0443C12.4155 11.0485 11.7696 12.5474 11.4392 13.9386C11.163 15.1044 12.026 16.0498 13.1848 16.0498C15.2757 16.0498 16.686 13.3802 16.686 10.2158C16.686 7.81063 15.0538 6.01289 12.0901 6.01289C8.74178 6.01289 6.65094 8.49641 6.65094 11.2689C6.65094 12.2241 6.93695 12.9001 7.38076 13.4194C7.58294 13.6594 7.61253 13.7574 7.53856 14.0317C7.48431 14.2325 7.36597 14.7175 7.31172 14.9134C7.23775 15.1926 7.01092 15.2906 6.75942 15.1877C5.21595 14.5607 4.49599 12.8854 4.49599 10.9946C4.49599 7.87921 7.14406 4.14168 12.3909 4.14168C16.6071 4.14168 19.3834 7.17383 19.3834 10.4264C19.3834 14.7322 16.972 17.9455 13.4215 17.9455C12.2282 17.9455 11.1088 17.3038 10.7241 16.5789C10.7241 16.5789 10.0831 19.1065 9.945 19.5963C9.71323 20.4438 9.25463 21.2863 8.83547 21.9476C9.85223 22.2455 10.9067 22.3973 11.9668 22.3982C18.0667 22.3982 23.0128 17.4851 23.0128 11.4257C23.0128 5.3663 18.0717 0.448242 11.9717 0.448242Z" fill="white" />
                    </g>
                </svg>
            </Link>
        </div>
    )
}

export default SocialMedia