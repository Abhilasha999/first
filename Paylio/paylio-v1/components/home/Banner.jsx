"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import BannerCounter from "./BannerCounter";
import BannerForm from "./BannerForm";
import box from "/public/images/banner-box.png";
import clock from "/public/images/banner-clock.png";
import human from "/public/images/banner-human.png";
import rocket from "/public/images/banner-rocket.png";
import wallet from "/public/images/banner-wallet.png";

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

      <section className="banner-section index">
        <div className="overlay">
          <div className="shape-area">
            <Image src={box} className="obj-1" alt="image" />
            <Image src={human} className="obj-2" alt="image" />
            <Image src={rocket} className="obj-3" alt="image" />
            <Image src={clock} className="obj-4" alt="image" />
          </div>
          <div className="banner-content">
            <div className="container ">
              <div className="content-shape">
                <Image src={wallet} className="obj-1" alt="image" />
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-5 col-md-6">
                  <div className="main-content">
                    <div className="top-area section-text">
                      <h5 className="sub-title">
                        Trusted by over 3M customers
                      </h5>
                      <h1 className="title">Pay Anyone, Anywhere</h1>
                      <p className="xlr">
                        Quickly and easily send, receive and request money
                        online with Paylio. Get a customised solution to fit
                        your business needs.
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
                <div className="col-xxl-4 col-xl-5 col-md-6">
                  <div className="send-money">
                    {/* TODO: Banner Form */}
                    <BannerForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="counter-section">
          <div className="container ">
            <div className="row cus-mar">
              {/* TODO: Banner Counter */}
              <BannerCounter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
