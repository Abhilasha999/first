import Link from "next/link";
import Subscribe from "../common/Subscribe";
import CopyRight from "../copyRight/CopyRight";
import Social from "../social/Social";
import facebook from "/public/images/icon/facebook.png";
import instagram from "/public/images/icon/instagram.png";
import linkedin from "/public/images/icon/linkedin.png";
import twitter from "/public/images/icon/twitter.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* TODO: Subscribe */}
        <Subscribe />

        <div className="footer-area pt-120">
          <div className="footer-top">
            <div className="row align-items-center">
              <div className="col-sm-6 d-flex justify-content-center justify-content-sm-start">
                <div className="menu-item">
                  <ul className="footer-link d-flex align-items-center">
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/help-center">Support</Link>
                    </li>
                    <li>
                      <Link href="/fees">Fees</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <ul className="social-link d-flex justify-content-sm-end justify-content-center align-items-center">
                  {/* TODO: social  */}
                  <Social
                    items={[
                      [facebook, "/"],
                      [linkedin, "/"],
                      [instagram, "/"],
                      [twitter, "/"],
                    ]}
                  />
                </ul>
              </div>
            </div>
          </div>

          {/* TODO: copy Right */}
          <CopyRight />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
