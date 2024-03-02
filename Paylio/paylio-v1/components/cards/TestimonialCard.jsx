import Image from "next/image";
import Rating from "../rating/Rating";

const TestimonialCard = ({ data }) => {
  const { rating, title, desc, avt, name, designation } = data;
  return (
    <div className="single-slide">
      <div className="single-content">
        <div className="start-area">
          {/* TODO: Rating  */}
          <Rating numberOfReview={rating} />
        </div>
        <h5 className="title-area">{title}</h5>
        <p className="xlr">{desc}</p>
        <div className="profile-area d-flex align-items-center">
          <div className="icon-area">
            <Image src={avt} alt="icon" />
          </div>
          <div className="text-area">
            <h5>{name}</h5>
            <p>{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
