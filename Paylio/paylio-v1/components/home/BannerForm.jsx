import Image from "next/image";
import { FaEquals, FaMinus, FaTimes } from "react-icons/fa";
import Select from "../select/Select";
import conversion from "/public/images/icon/conversion.png";
import aus from "/public/images/icon/flag-aus.png";
import usa from "/public/images/icon/flag-usa.png";

const langs = [
  { id: 1, name: "USD", icon: usa },
  { id: 2, name: "GBP", icon: usa },
  { id: 3, name: "AUS", icon: aus },
];

const BannerForm = () => {
  return (
    <form action="#">
      <div className="currency-area">
        <div className="left-side">
          <span className="mdr">You send</span>
          <h5>1,000</h5>
        </div>
        <div className="right-side">
          {/* TODO: select */}
          <Select data={langs} />
        </div>
      </div>
      <div className="calculation">
        <div className="head-area">
          <Image src={conversion} alt="image" />
          <span className="mdr highlight">Show calculation</span>
        </div>
        <div className="calculation-details">
          <div className="single-area d-flex align-items-center">
            <div className="left-area">
              <i>
                <FaMinus />
              </i>
              <span className="mdr">10.04 USD</span>
            </div>
            <div className="right-area">
              <span className="mdr">Our fee</span>
            </div>
          </div>
          <div className="single-area d-flex align-items-center">
            <div className="left-area">
              <i>
                <FaEquals />
              </i>
              <span className="mdr">989.96 USD</span>
            </div>
            <div className="right-area">
              <span className="mdr">We’ll Convert</span>
            </div>
          </div>
          <div className="single-area d-flex align-items-center">
            <div className="left-area">
              <i>
                <FaTimes />
              </i>
              <span className="mdr">1.3947</span>
            </div>
            <div className="right-area">
              <span className="mdr highlight">Paylio Rate</span>
            </div>
          </div>
        </div>
      </div>
      <div className="currency-area">
        <div className="left-side">
          <span className="mdr">Recipient gets</span>
          <h5>1,380.69</h5>
        </div>
        <div className="right-side recipient">
          {/* TODO: select */}
          <Select data={langs} />
        </div>
      </div>
      <div className="btn-area mt-40">
        <button type={"submit"} className="cmn-btn w-100">
          Get Started
        </button>
      </div>
    </form>
  );
};

export default BannerForm;
