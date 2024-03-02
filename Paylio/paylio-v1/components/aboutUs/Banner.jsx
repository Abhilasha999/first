"use client";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import about_popup from "/public/images/about-popup.png";
import popup_icon from "/public/images/icon/popup-icon.png";

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

      <section className="banner-section about-us">
        <div className="overlay">
          <div className="banner-content">
            <div className="container wow fadeInUp">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-10">
                  <div className="main-content text-center">
                    <div className="top-area section-text dark-sec">
                      <h5 className="sub-title">
                        Built for entrepreneurs, by entrepreneurs
                      </h5>
                      <h1 className="title">
                        The platform built to help businesses achieve their
                        ambitions faster
                      </h1>
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
              <div className="col-lg-12">
                <div className="magnific-area d-flex align-items-center justify-content-around">
                  <div className="bg-area">
                    <Image className="bg-item" src={about_popup} alt="image" />
                  </div>

                  {/* TODO: Video Modal Button */}
                  <button
                    className="mfp-iframe popupvideo"
                    onClick={() => setOpen(true)}>
                    <Image src={popup_icon} alt="image" />
                  </button>
                </div>
              </div>
            </div>
            <div className="stars-info pt-120">
              <div className="row justify-content-center justify-content-around">
                <div className="col-sm-4">
                  <div className="single-box">
                    <div className="icon-box">
                      <Image
                        width={60}
                        height={60}
                        src="/images/icon/stats-info-icon-1.png"
                        alt="icon"
                      />
                    </div>
                    <h5>2000+ employees & 100+ nationalities</h5>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-box">
                    <div className="icon-box">
                      <Image
                        width={60}
                        height={60}
                        src="/images/icon/stats-info-icon-2.png"
                        alt="icon"
                      />
                    </div>
                    <h5>27+ offices around the world</h5>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-box">
                    <div className="icon-box">
                      <Image
                        width={60}
                        height={60}
                        src="/images/icon/stats-info-icon-3.png"
                        alt="icon"
                      />
                    </div>
                    <h5>€303.6 BN billion in processed volume in 2020</h5>
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
