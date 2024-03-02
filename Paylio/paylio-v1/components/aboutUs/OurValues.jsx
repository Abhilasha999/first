import Image from "next/image";

const values = [
  {
    id: 1,
    title: "Innovation",
    icon: "/images/icon/values-icon-1.png",
    desc: " Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo aliquet elit sed convallisolo neque aliquam elementum dolr.",
  },
  {
    id: 2,
    title: "Accountability",
    icon: "/images/icon/values-icon-2.png",
    desc: " Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo aliquet elit sed convallisolo neque aliquam elementum dolr.",
  },
  {
    id: 3,
    title: "Commitment",
    icon: "/images/icon/values-icon-3.png",
    desc: " Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo aliquet elit sed convallisolo neque aliquam elementum dolr.",
  },
  {
    id: 4,
    title: "Team Work",
    icon: "/images/icon/values-icon-4.png",
    desc: " Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo aliquet elit sed convallisolo neque aliquam elementum dolr.",
  },
];

const OurValues = () => {
  return (
    <section className="our-values">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6">
              <div className="section-header text-center">
                <h5 className="sub-title">Our values</h5>
                <h2 className="title">
                  The values that drive everything we do
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo aliquet elit sed
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar align-items-center">
            {values.map(({ id, desc, icon, title }) => (
              <div key={id} className="col-lg-6">
                <div className="single-box d-flex">
                  <div className="img-box">
                    <Image width={80} height={80} src={icon} alt="icon" />
                  </div>
                  <div className="text-box">
                    <h4>{title}</h4>
                    <p> {desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
