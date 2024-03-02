import Image from "next/image";
import Link from "next/link";

const HelpCenterCard = ({ data }) => {
  return (
    <Link href="/help-center-category" className="single-box d-block">
      <div className="img-area">
        <Image height={106} width={106} src={data.icon} alt="icon" />
      </div>
      <h5>{data.title}</h5>
    </Link>
  );
};

export default HelpCenterCard;
