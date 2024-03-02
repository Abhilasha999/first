"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import payment_illus_2 from "/public/images/payment-illus-2.png";
import payment_illus from "/public/images/payment-illus.png";

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

      <section className="banner-section payment">
        <div className="overlay">
          <div className="shape-area">
            <Image src={payment_illus_2} className="obj-1" alt="image" />
            <Image src={payment_illus} className="obj-2" alt="image" />
          </div>
          <div className="banner-content">
            <div className="container wow fadeInUp">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 col-md-7">
                  <div className="main-content">
                    <div className="top-area section-text">
                      <h5 className="sub-title">International Payments</h5>
                      <h1 className="title">Making Global Payments Simple</h1>
                      <p className="xlr">
                        Start growing your business with our innovative payment
                        solutions.
                      </p>
                    </div>
                    <div className="bottom-area d-xxl-flex">
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
      </section>
    </>
  );
};

export default Banner;
