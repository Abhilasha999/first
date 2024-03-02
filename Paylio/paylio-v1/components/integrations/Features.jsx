import Image from "next/image";
import Link from "next/link";
import integrations_features_1 from "/public/images/integrations-features-1.png";
import integrations_features_2 from "/public/images/integrations-features-2.png";
import integrations_features_3 from "/public/images/integrations-features-3.png";

const Features = () => {
  return (
    <section className="earn-cashback features">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row pb-120 align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="section-area">
                <h5 className="sub-title">Close the books in record time</h5>
                <h2 className="title">Sync With Your Favourite Software</h2>
                <p>
                  Automate book-keeping and reconciliation, and avoid manual
                  errors with direct integrations to your accounting software.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sec-image">
                <Image
                  src={integrations_features_1}
                  alt="image"
                  className="w-100"
                />
              </div>
            </div>
          </div>
          <div className="row pb-120 align-items-center justify-content-between">
            <div className="col-md-6 order-md-0 order-1">
              <div className="sec-image">
                <Image
                  src={integrations_features_2}
                  alt="image"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-area">
                <h2 className="title">
                  Intelligent categorisation that halves your work
                </h2>
                <p>
                  Save hours each month with intelligent categorisation and
                  automated general ledger mapping to your accounting software.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="section-text">
                <h2 className="title">
                  Integrated invoicing and reconcilation
                </h2>
                <p>
                  Send invoices directly from your Paylio account. When a
                  payment is received, the invoice will be automatically marked
                  as paid and reconciled.
                </p>
              </div>
              <div className="btn-area">
                <Link href="/sign-up" className="cmn-btn">
                  Try it out
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sec-image ex-mar">
                <Image
                  src={integrations_features_3}
                  alt="image"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
