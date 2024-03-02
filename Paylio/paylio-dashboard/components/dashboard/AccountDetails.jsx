import Image from "next/image";
import Link from "next/link";
import Select from "../select/Select";
import option from "/public/images/icon/option.png";

const currency = [
  { id: 1, name: "US Dollar" },
  { id: 2, name: "US Dollar" },
  { id: 3, name: "US Dollar" },
];

const AccountDetails = () => {
  return (
    <>
      <div className="top-area">
        <div className="left-side">
          <h5>Hi, Kevin Martin!</h5>
          <h2>$30,700.00</h2>
          <h5 className="receive">
            Last Received <span>$25,700.00</span>
          </h5>
        </div>
        <div className="right-side">
          <div className="right-top">
            {/* Select */}
            <Select
              data={currency}
              btn="bg-transparent"
              btnText="fw-semibold text-white"
            />
            <div className="dropdown-area">
              <button
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image src={option} alt="icon" />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" href="#">
                    Fiat Currency
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    crypto Currency
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-bottom">
            <h4>$30,700.00</h4>
            <h5>Payouts</h5>
          </div>
        </div>
      </div>
      <div className="bottom-area">
        <div className="left-side">
          <Link href="/pay" className="cmn-btn">
            Transfer Money
          </Link>
          <Link href="/deposit-money/step-1" className="cmn-btn">
            Add Money
          </Link>
          <Link href="/withdraw-money/step-1" className="cmn-btn">
            Withdraw
          </Link>
        </div>
        <div className="right-side">
          <div className="dropdown-area">
            <button
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Image src={option} alt="icon" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
              <li>
                <Link className="dropdown-item" href="/recipients">
                  Recipients
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/receive/step-1">
                  Request Money
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/pay/step-1">
                  Send Money
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/pay/step-1">
                  Bill Pay
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
