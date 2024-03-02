import Image from "next/image";
import search_icon from "/public/images/icon/search-icon.png";

const Banner = () => {
  return (
    <section className="banner-section help-center">
      <div className="overlay">
        <div className="banner-content">
          <div className="container wow fadeInUp">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-8 col-md-7">
                <div className="main-content text-center">
                  <div className="top-area section-text dark-sec">
                    <h3 className="title">How can we help you today?</h3>
                  </div>
                  <form action="#">
                    <div className="form-group mb-40 d-flex align-items-center">
                      <Image src={search_icon} alt="icon" />
                      <input type="text" placeholder="Search Knowledge base" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
