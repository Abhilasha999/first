import Image from "next/image";
import flagData from "./flagData";

const SupportedCountry = () => {
  return (
    <section className="supported-country">
      <div className="overlay pb-120">
        <div className="container">
          <div className="main-content">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-text text-center">
                  <h2 className="title">
                    Join Over 500,000 Customers Worldwide
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="all-flag">
                  <ul>
                    {flagData.map((singleItm) => (
                      <li key={singleItm.id}>
                        <Image src={singleItm.flag} alt="image" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedCountry;
