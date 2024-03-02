"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import business_dashboard_1 from "/public/images/business-dashboard-1.png";
import business_dashboard_2 from "/public/images/business-dashboard-2.png";
import check_2 from "/public/images/icon/check-2.png";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="muczNvx9fgg"
        onClose={() => setOpen(false)}
      />

      <section className="banner-section business-account">
        <div className="overlay">
          <div className="banner-content">
            <div className="container wow fadeInUp">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-11 col-md-10">
                  <div className="main-content text-center">
                    <div className="top-area section-text">
                      <h5 className="sub-title">Easy, fast, and transparent</h5>
                      <h1 className="title">
                        Digital Business Accounts Made for the Modern Business
                      </h1>
                      <ul>
                        <li>
                          <Image src={check_2} alt="icon" />
                          Save time
                        </li>
                        <li>
                          <Image src={check_2} alt="icon" />
                          Save money
                        </li>
                        <li>
                          <Image src={check_2} alt="icon" />
                          Helps you grow
                        </li>
                      </ul>
                    </div>
                    <div className="bottom-area d-xxl-flex justify-content-center">
                      <Link href="/sign-up" className="cmn-btn">
                        Open a Free Account
                      </Link>

                      <button
                        className="cmn-btn active mfp-iframe popupvideo"
                        onClick={() => setOpen(true)}
                      >
                        See How it Works
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-img-bottom pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="img-area">
                  <Image src={business_dashboard_1} alt="image" />
                  <Image
                    className="right-img"
                    src={business_dashboard_2}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
