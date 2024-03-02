import Image from "next/image";
import Social from "../social/Social";
import facebook from "/public/images/icon/facebook.png";
import instagram from "/public/images/icon/instagram.png";
import linkedin from "/public/images/icon/linkedin.png";
import twitter from "/public/images/icon/twitter.png";
import profile_img from "/public/images/profile-img.png";

const AuthorCard = () => {
  return (
    <div className="authors-area d-flex align-items-start">
      <div className="profile-item d-flex align-items-center">
        <div className="profile-img">
          <Image src={profile_img} alt="image" />
        </div>
      </div>
      <div className="right-item">
        <div className="top-area d-flex align-items-start justify-content-between">
          <div className="left-area">
            <h3 className="title">Darren Ellis</h3>
            <h6>VP of Product</h6>
          </div>
          <div className="right-area">
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
        <div className="bottom-area">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl mi
            proin nunc cras nunc tellus ultrices est sagittis. Habitasse augue
            pulvinar id quam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
