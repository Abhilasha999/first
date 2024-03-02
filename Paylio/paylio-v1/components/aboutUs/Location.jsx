import OfficeCard from "../cards/OfficeCard";
import email from "/public/images/icon/email-icon-1.png";
import email_2 from "/public/images/icon/email-icon-2.png";
import email_3 from "/public/images/icon/email-icon-3.png";
import location_icon_1 from "/public/images/icon/location-icon-1.png";
import location_icon_2 from "/public/images/icon/location-icon-2.png";
import location_icon_3 from "/public/images/icon/location-icon-3.png";
import phone from "/public/images/icon/phone-icon-1.png";
import phone_2 from "/public/images/icon/phone-icon-2.png";
import phone_3 from "/public/images/icon/phone-icon-3.png";

const locationData = [
  {
    id: 1,
    location: "San Francisco",
    email: "sanfrancisco@paylio.com",
    phone: "415) 931 - 1616",
    icon: location_icon_1,
    email_icon: email,
    phon_icon: phone,
  },
  {
    id: 2,
    location: "New York",
    email: "newyork@paylio.com",
    phone: "415) 931 - 1616",
    icon: location_icon_2,
    email_icon: email_2,
    phon_icon: phone_2,
  },
  {
    id: 3,
    location: "San Francisco",
    email: "london@paylio.com",
    phone: "415) 931 - 1616",
    icon: location_icon_3,
    email_icon: email_3,
    phon_icon: phone_3,
  },
];

const Location = () => {
  return (
    <section className="location">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="section-header text-center">
                <h5 className="sub-title">Our offices</h5>
                <h2 className="title">
                  Come and visit our offices around the world
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit diam
                  malesuada nisl enim phasellus condimentum.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center cus-mar">
            {locationData.map((itm) => (
              <div key={itm.id} className="col-xl-4 col-md-6">
                <OfficeCard itm={itm} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
