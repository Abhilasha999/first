import Image from "next/image";
import Link from "next/link";

import arrow from "/public/images/icon/arrow-right-4.png";

const OfficeCard = ({ itm }) => {
  const { location, email, phone, icon, email_icon, phon_icon } = itm;
  return (
    <div className="single-box">
      <div className="head-area d-flex align-items-center">
        <div className="img-box">
          <Image src={icon} alt="image" />
        </div>
        <h4>{location}</h4>
      </div>
      <div className="email-phone">
        <div className="img-box">
          <Image src={email_icon} alt="icon" />
        </div>
        <p>{email}</p>
      </div>
      <div className="email-phone">
        <div className="img-box">
          <Image src={phon_icon} alt="icon" />
        </div>
        <p>{phone}</p>
      </div>
      <div className="bottom-area">
        <Link href="#">
          View Location
          <Image src={arrow} alt="icon" className="ps-1" />
        </Link>
      </div>
    </div>
  );
};

export default OfficeCard;
