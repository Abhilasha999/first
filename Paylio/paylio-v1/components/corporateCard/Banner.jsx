"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

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

      <section className="banner-section corporate-card">
        <div className="overlay">
          <div className="banner-content">
            <div className="container wow fadeInUp">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 col-md-7">
                  <div className="main-content">
                    <div className="top-area section-text">
                      <h5 className="sub-title">
                        Global payment solution for businesses
                      </h5>
                      <h1 className="title">The Corporate Card for Startups</h1>
                      <p className="xlr">
                        The card that saves you time and your business money.
                        Track spend in real-time and earn cashback on digital
                        spend.
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
