import Image from "next/image";
import Link from "next/link";
import app_download_img from "/public/images/app-download-img.png";
import apple_btn from "/public/images/apple-btn.png";
import google_play_btn from "/public/images/google-play-btn.png";
import check from "/public/images/icon/check.png";

const AppDownload = () => {
  return (
    <section className="app-download">
      <div className="overlay pb-120">
        <div className="container ">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 order-lg-0 order-1">
              <div className="image-area d-rtl left-side">
                <Image src={app_download_img} alt="images" className="max-un" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-area">
                <h5 className="sub-title">App Download</h5>
                <h2 className="title">Fast, Secure Money Transfers</h2>
                <p>
                  Access your account via your mobile phone. View balance,
                  transfer funds, view transactions wherever you are.
                </p>
              </div>
              <ul className="features">
                <li>
                  <Image src={check} alt="icon" />
                  Login with fingerprint or Face ID.
                </li>
                <li>
                  <Image src={check} alt="icon" />
                  Simple few Taps to send money
                </li>
                <li>
                  <Image src={check} alt="icon" />
                  View transaction history.
                </li>
                <li>
                  <Image src={check} alt="icon" />
                  Get instant App notifications.
                </li>
              </ul>
              <div className="brand-area mt-40">
                <Link href="#">
                  <Image src={google_play_btn} alt="icon" />
                </Link>
                <Link href="#">
                  <Image src={apple_btn} alt="icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
