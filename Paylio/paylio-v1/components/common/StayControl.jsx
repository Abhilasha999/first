import Image from "next/image";
import stay_control_icon_1 from "/public/images/icon/stay-control-icon-1.png";
import stay_control_icon_2 from "/public/images/icon/stay-control-icon-2.png";
import stay_control_icon_3 from "/public/images/icon/stay-control-icon-3.png";
import stay_control_icon_4 from "/public/images/icon/stay-control-icon-4.png";
import stay_control_icon from "/public/images/stay-control-image.png";

const StayControl = () => {
  return (
    <section className="stay-control">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5">
              <div className="section-text">
                <h5 className="sub-title">Stay in Control, in Real Time</h5>
                <h2 className="title">
                  Stay in control over your cards and transactions
                </h2>
                <p>
                  Set card budgets to control spend, update spend limits
                  anytime. Get real-time spend notifications and save time with
                  auto categorisation.
                </p>
              </div>
              <ul>
                <li>
                  <Image src={stay_control_icon_1} alt="image" />
                  <p>Freeze Card</p>
                </li>
                <li>
                  <Image src={stay_control_icon_2} alt="image" />
                  <p>Set Spend Limit</p>
                </li>
                <li>
                  <Image src={stay_control_icon_3} alt="image" />
                  <p>Replace Card</p>
                </li>
                <li>
                  <Image src={stay_control_icon_4} alt="image" />
                  <p>Cancel Card</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="sec-image">
                <Image src={stay_control_icon} alt="image" className="max-un" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayControl;
