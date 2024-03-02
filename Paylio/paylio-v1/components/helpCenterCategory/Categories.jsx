import Image from "next/image";
import search from "/public/images/icon/search-icon-2.png";

const Categories = () => {
  return (
    <div className="position-sticky">
      <div className="left-area">
        <form action="#">
          <div className="form-group mb-40 d-flex align-items-center">
            <Image src={search} alt="icon" />
            <input type="text" placeholder="Search" />
          </div>
        </form>
        <h5 className="title">Categories</h5>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="about-paylio-tab"
              data-bs-toggle="tab"
              data-bs-target="#about-paylio"
              type="button"
              role="tab"
              aria-controls="about-paylio"
              aria-selected="true"
            >
              About Paylio
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="wallet-creation-tab"
              data-bs-toggle="tab"
              data-bs-target="#wallet-creation"
              type="button"
              role="tab"
              aria-controls="wallet-creation"
              aria-selected="false"
            >
              Wallet Creation
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="adding-money-tab"
              data-bs-toggle="tab"
              data-bs-target="#adding-money"
              type="button"
              role="tab"
              aria-controls="adding-money"
              aria-selected="false"
            >
              Adding Money
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="paylio-card-tab"
              data-bs-toggle="tab"
              data-bs-target="#paylio-card"
              type="button"
              role="tab"
              aria-controls="paylio-card"
              aria-selected="false"
            >
              Paylio Card
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="sending-money-tab"
              data-bs-toggle="tab"
              data-bs-target="#sending-money"
              type="button"
              role="tab"
              aria-controls="sending-money"
              aria-selected="false"
            >
              Sending Money
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="account-mangament-tab"
              data-bs-toggle="tab"
              data-bs-target="#account-mangament"
              type="button"
              role="tab"
              aria-controls="account-mangament"
              aria-selected="false"
            >
              Account Mangament
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="adding-recipient-tab"
              data-bs-toggle="tab"
              data-bs-target="#adding-recipient"
              type="button"
              role="tab"
              aria-controls="adding-recipient"
              aria-selected="false"
            >
              Adding Recipient
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
