import Image from "next/image";
import AcademyTab from "./AcademyTab";
import AllPostTab from "./AllPostTab";
import BusinessTab from "./BusinessTab";
import HowToTab from "./HowToTab";
import NewsTab from "./NewsTab";
import PaylioTab from "./PaylioTab";
import PeopleTab from "./PeopleTab";
import search_icon_2 from "/public/images/icon/search-icon-2.png";

const AllBlog = () => {
  return (
    <section className="blog-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-header text-center">
                <h2 className="title">Paylio Blog</h2>
                <p>
                  Follow the Revolut blog for product announcements, feature
                  updates, user stories, and technical posts about banking.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="top-area d-flex justify-content-between">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="cmn-btn active"
                      id="all-post-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#all-post"
                      type="button"
                      role="tab"
                      aria-controls="all-post"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="cmn-btn"
                      id="paylio-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#paylio"
                      type="button"
                      role="tab"
                      aria-controls="paylio"
                      aria-selected="false"
                    >
                      Paylio
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="cmn-btn"
                      id="business-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#business"
                      type="button"
                      role="tab"
                      aria-controls="business"
                      aria-selected="false"
                    >
                      Business
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="cmn-btn"
                      id="academy-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#academy"
                      type="button"
                      role="tab"
                      aria-controls="academy"
                      aria-selected="false"
                    >
                      Academy
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="cmn-btn"
                      id="how-to-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#how-to"
                      type="button"
                      role="tab"
                      aria-controls="how-to"
                      aria-selected="false"
                    >
                      How to
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="cmn-btn"
                      id="people-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#people"
                      type="button"
                      role="tab"
                      aria-controls="people"
                      aria-selected="false"
                    >
                      People
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="cmn-btn"
                      id="news-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#news"
                      type="button"
                      role="tab"
                      aria-controls="news"
                      aria-selected="false"
                    >
                      News
                    </button>
                  </li>
                </ul>
                <form action="#">
                  <div className="form-group mb-40 d-flex align-items-center">
                    <Image src={search_icon_2} alt="icon" />
                    <input type="text" placeholder="Search" />
                  </div>
                </form>
              </div>
              <div className="tab-content">
                {/* TODO: All Post Tab */}
                <AllPostTab />

                {/* TODO: Paylio Tab */}
                <PaylioTab />

                {/* TODO: Business Tab */}
                <BusinessTab />

                {/* TODO: Academy Tab */}
                <AcademyTab />

                {/* TODO: How To Tab */}
                <HowToTab />

                {/* TODO: People Tab */}
                <PeopleTab />

                {/* TODO: News Tab */}
                <NewsTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBlog;
