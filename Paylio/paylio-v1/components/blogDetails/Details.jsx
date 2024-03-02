import Image from "next/image";
import AuthorCard from "../cards/AuthorCard";
import Social from "../social/Social";
import blog_image_14 from "/public/images/blog-image-14.png";
import blog_user from "/public/images/blog-user.png";
import facebook from "/public/images/icon/facebook.png";
import instagram from "/public/images/icon/instagram.png";
import linkedin from "/public/images/icon/linkedin.png";
import twitter from "/public/images/icon/twitter.png";

const Details = () => {
  return (
    <section className="blog-details-section">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="main-content">
                <div className="head-area">
                  <div className="left-area d-flex align-items-center">
                    <div className="profile-area d-flex align-items-center">
                      <div className="profile-img">
                        <Image src={blog_user} alt="image" />
                      </div>
                      <p>Peter Bates</p>
                    </div>
                    <div className="date">
                      <p>01/13/2023</p>
                    </div>
                  </div>
                  <div className="right-area">
                    <ul className="social-link d-flex justify-content-md-end justify-content-start align-items-center">
                      {/* TODO: social  */}
                      <Social
                        items={[
                          [facebook, "/"],
                          [linkedin, "/"],
                          [instagram, "/"],
                          [twitter, "/"],
                        ]}
                      />
                    </ul>
                  </div>
                </div>
                <div className="single-content mb-60">
                  <h2 className="title">
                    All You Need to Know About Exchange Rates
                  </h2>
                  <p>
                    We hear about exchange rates all the time, but what are they
                    and why are they so important? Let’s explore the answers to
                    these questions…
                  </p>
                </div>
                <div className="single-content">
                  <h3 className="title">What is an Exchange Rate?</h3>
                  <p>
                    A foreign currency exchange rate is a way to describe how
                    the value of one country’s currency compares to the value of
                    another currency.The exchange rate between two currencies
                    essentially answers the question “How much of this currency
                    will I need to buy one of that currency?”
                  </p>
                </div>
                <div className="single-content">
                  <h3 className="title">Understanding Exchange Rates</h3>
                  <p>
                    Exchange rates are usually labeled with the currency codes
                    of the two currencies being compared. For example, GBP/USD
                    exchange rate. The first currency listed is the one being
                    purchased, unless otherwise specified. The number describes
                    the price of one currency in terms of the other currency.For
                    instance, if the GBP/USD exchange rate is 1.32, that means
                    you’d need USD$132 to purchase GBP£100.In the same scenario,
                    the USD/GBP exchange rate is 0.76, meaning it would take
                    GBP£76 to purchase USD$100.
                  </p>
                </div>
                <div className="single-content">
                  <h3 className="title">Why do exchange rates change?</h3>
                  <p>
                    Most currencies have ‘floating’ exchange rates that are
                    always fluctuating as foreign exchange traders buy and sell
                    currencies. When a currency appreciates, its exchange rate
                    with another currency increases and more of the foreign
                    currency is needed to buy one unit. Using the above example,
                    if the UK’s Pound appreciates and the GBP/USD exchange rate
                    rises to 1.5, it would take USD$150 to buy the same GBP£100.
                  </p>
                  <p>
                    If a currency depreciates in value, that means its exchange
                    rate with a foreign currency goes down and less of the
                    foreign currency is needed to buy one unit. Read more about
                    calculating exchange rates to see how exchange rates can be
                    compared.
                  </p>
                  <p>
                    There are some currencies around the world that are managed
                    by national governments to maintain a fixed exchange rate so
                    that the value of their currency is ‘pegged’ to the value of
                    an outside currency. For instance, the BSD/USD exchange rate
                    is fixed at 1. In other words, 1 Bahamian Dollar can be
                    exchanged for 1 U.S. Dollar.
                  </p>
                </div>
                <div className="single-content">
                  <div className="blog-img">
                    <Image src={blog_image_14} alt="image" />
                  </div>
                </div>
                <div className="single-content">
                  <h3 className="title">Why exchange rates are so important</h3>
                  <p>
                    Whether you’re just traveling for a short time or moving to
                    live in a new country, it’s important to be aware of foreign
                    exchange rates when converting and spending money abroad.
                    That way, you know if you’re actually willing to pay the
                    sticker price of goods or services in terms of your home
                    currency.
                  </p>
                  <p>
                    Exchange rates are also a key factor when you’re sending
                    money internationally, as the recipient will receive the
                    funds in a different currency. When the exchange rate is
                    high, your recipient will receive more than they would when
                    the exchange rate is low, even though you’re sending the
                    same amount of cash on your end. In other words, because of
                    the high exchange rate, the same $100 is really worth more.
                  </p>
                  <p>
                    Banks and other currency exchange services often quote
                    remittance customers at poorer rates than the interbank
                    exchange rate so they can earn a profit on your
                    international money transfer transaction.
                  </p>
                  <p>
                    Revolut has no hidden fees and offers great exchange rates,
                    making it simpler and more affordable to send money abroad.
                    Just choose how much you want to send and where to. We’ll
                    take care of the rest.
                  </p>
                </div>
                <div className="single-content pb-120">
                  <h3 className="title">
                    Where can I see currency exchange rates?
                  </h3>
                  <p>
                    You can use our foreign currency converter widget to quickly
                    compare current exchange rates across all the currencies of
                    the world.Want to learn more about exchange rates? Dive
                    deeper into understanding the interbank exchange rate and
                    calculating the exchange rate yourself.Ready to send money
                    abroad? Here’s everything you need to know about making
                    international money transfers with Paylio.
                  </p>
                </div>
                {/* TODO:   Author Card */}
                <AuthorCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
