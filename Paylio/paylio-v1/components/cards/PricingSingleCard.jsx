import Link from "next/link";

const PricingSingleCard = ({ itm }) => {
  const { title, price, plans } = itm;

  return (
    <div className="pricing-single">
      <div className="pricing-head">
        <h5>{title}</h5>
        <h3>€{price}/m</h3>
        <div className="btn-area">
          <Link href="#" className="cmn-btn">
            Get Started
          </Link>
        </div>
      </div>
      <div className="pricing-body">
        <ul>
          {plans?.map(([plan, des], i) => (
            <li key={i}>
              <span>{plan}</span>
              <span>{des}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingSingleCard;
