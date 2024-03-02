"use client";

import Link from "next/link";

const JobDetails = () => {
  const goTo = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  return (
    <section className="job-details">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center justify-content-between">
            <div className="col-sm-3">
              <div className="position-sticky">
                <div className="left-area">
                  <button onClick={() => goTo("who-we-are")}>Who We Are</button>
                  <button onClick={() => goTo("the-role")}>The Role</button>
                  <button onClick={() => goTo("responsibilities")}>
                    Responsibilities
                  </button>
                  <button onClick={() => goTo("qualifications")}>
                    Qualifications
                  </button>
                  <button onClick={() => goTo("why-us")}>Why Us</button>
                </div>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="single-area mb-60" id="who-we-are">
                <h3 className="title">Who We Are</h3>
                <p>
                  We have found that allowing our staff to work in a fully
                  flexible way is key to successful remote working. We trust our
                  team to maximize their time and use techniques that are
                  idiosyncratic to them. Here are the programmes, rituals, and
                  routines they recommend
                </p>
              </div>
              <div className="single-area mb-60" id="the-role">
                <h3 className="title">Who Role</h3>
                <p>
                  We trust our team to maximize their time and use techniques
                  that are idiosyncratic to them. Here are the programmes,
                  rituals, and routines they recommend.
                </p>
              </div>
              <div className="single-area mb-60" id="responsibilities">
                <h3 className="title">Responsibilities</h3>
                <ul>
                  <li>
                    You’ll collaborate daily with a multidisciplinary team of
                    Product Designers, UX designers, Researchers, Strategists,
                    and Project Managers.
                  </li>
                  <li>
                    You’ll prototype to communicate the “look” and “feel” of a
                    project.
                  </li>
                  <li>
                    You’ll ensure content strategy and design are perfectly
                    in-sync.
                  </li>
                  <li>Design and implementation of data storage solutions.</li>
                  <li>You’ll have daily communication on Slack.</li>
                  <li>
                    You’ll continuously iterate your designs to stay current
                    with trends, or break through them to define future ones.
                  </li>
                </ul>
              </div>
              <div className="single-area mb-60" id="qualifications">
                <h3 className="title">Qualifications</h3>
                <ul>
                  <li>You’ve been UI Designer for 2+ years.</li>
                  <li>
                    You have a portfolio that exemplifies strong visual design ,
                    with a clean aesthetic, and a focus on defining the user
                    experience.
                  </li>
                  <li>
                    You’ll ensure content strategy and design are perfectly
                    in-sync.
                  </li>
                  <li>Design and implementation of data storage solutions.</li>
                </ul>
              </div>
              <div className="single-area" id="why-us">
                <h3 className="title">Why Us</h3>
                <p>
                  We have found that allowing our staff to work in a fully
                  flexible way is key to successful remote working. We trust our
                  team to maximize their time and use techniques that are
                  idiosyncratic to them. Here are the programmes, rituals, and
                  routines they recommend.
                </p>
              </div>
              <div className="btn-area mt-30">
                <Link href="{id}" className="cmn-btn">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
