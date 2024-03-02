import Image from "next/image";
import arrow_right_2 from "/public/images/icon/arrow-right-2.png";

const Subscribe = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="newsletter">
          <div className="section-area mb-30 dark-sec text-center">
            <h3 className="title">Subscribe to Our Newsletter</h3>
          </div>
          <form action="#">
            <div className="form-group d-flex align-items-center">
              <input type="text" placeholder="Your Email Address" />
              <button>
                <Image src={arrow_right_2} alt="icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
