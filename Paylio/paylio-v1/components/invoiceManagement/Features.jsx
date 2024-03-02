import Image from "next/image";
import invoice_1 from "/public/images/invoice-features-1.png";
import invoice_2 from "/public/images/invoice-features-2.png";
import invoice_3 from "/public/images/invoice-features-3.png";
import invoice_4 from "/public/images/invoice-features-4.png";
import invoice_5 from "/public/images/invoice-features-5.png";

const Features = () => {
  return (
    <section className="earn-cashback features">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row pb-120 align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="section-area">
                <h5 className="sub-title">Faster invoice payments</h5>
                <h2 className="title">
                  The easiest, fastest way to create invoices
                </h2>
                <p>
                  Create professional looking, tax compliant invoices that match
                  your brand. Your payment details are automatically included,
                  so it’s easier for customers to pay you.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sec-image">
                <Image src={invoice_1} alt="image" className="w-100" />
              </div>
            </div>
          </div>
          <div className="row pb-120 align-items-center justify-content-between">
            <div className="col-md-6 order-md-0 order-1">
              <div className="sec-image">
                <Image src={invoice_2} alt="image" className="w-100" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-area">
                <h5 className="sub-title">Business made simple</h5>
                <h2 className="title">
                  Know when you’re likely to get paid. So you can plan ahead
                </h2>
                <p>
                  Get a bird’s eye view of paid and unpaid invoices. Know when
                  you’re likely to be paid, so you can plan accordingly. Be in
                  the know & receive alerts as soon as you get paid.
                </p>
              </div>
            </div>
          </div>
          <div className="row pb-120 align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="section-area">
                <h5 className="sub-title">Set up automatic reminders</h5>
                <h2 className="title">
                  Set auto payment reminders for your customers
                </h2>
                <p>
                  Remind customers of an upcoming or overdue payment, without
                  being intrusive or awkward. Reduce payment delays, without
                  following up all the time.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sec-image">
                <Image src={invoice_3} alt="image" className="w-100" />
              </div>
            </div>
          </div>
          <div className="row pb-120 align-items-center justify-content-between">
            <div className="col-md-6 order-md-0 order-1">
              <div className="sec-image">
                <Image src={invoice_4} alt="image" className="w-100" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-area">
                <h5 className="sub-title">Run Your Business Your Way</h5>
                <h2 className="title">
                  Sit back and relax with automatic reconcillation
                </h2>
                <p>
                  Matching incoming transfers are automatically synced and
                  marked as paid. Experience the power of an integrated finance
                  stack.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="section-area">
                <h5 className="sub-title">
                  Professional invoices now just a few clicks away
                </h5>
                <h2 className="title">
                  Spend less time doing boring administrative tasks
                </h2>
                <p>
                  Unleash the power of Paylio’s business account along with your
                  invoices. and manage it all with a bird’s eye view. Save a
                  tonne of time, effortlessly.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sec-image ex-mar">
                <Image src={invoice_5} alt="image" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
