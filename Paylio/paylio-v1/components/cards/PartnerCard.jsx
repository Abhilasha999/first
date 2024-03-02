import Image from "next/image";
import Link from "next/link";

const PartnerCard = ({ itm }) => {
  return (
    <div className="single-box">
      <div className="head-area d-flex align-items-center">
        <div className="logo-area">
          <Image src={itm.icon} alt="image" />
        </div>
        <div className="text-area">
          <h5>{itm.title}</h5>
          <p>{itm.offer}</p>
        </div>
      </div>
      <div className="body-area">
        <p>{itm.desc}</p>
        <div className="btn-area">
          <Link href="#" className="cmn-btn">
            Claim Reward
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
