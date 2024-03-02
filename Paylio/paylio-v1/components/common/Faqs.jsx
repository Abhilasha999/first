import faqData from "@/data/faqData";
import AccordionItem from "../accordionItem/AccordionItem";

const Faqs = ({ cls = "" }) => {
  return (
    <section className={`faqs-section ${cls}`}>
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <div className="section-header text-center">
                <h5 className="sub-title">Frequently Asked Questions</h5>
                <h2 className="title">If you got questions we have answer</h2>
                <p>We have a list of frequently asked questions about us</p>
              </div>
            </div>
          </div>

          <div className="row cus-mar">
            <div className="col-lg-6">
              <div className="accordion">
                {/* TODO: Accordion Item */}
                {faqData.slice(0, 5).map((singleItm) => (
                  <AccordionItem key={singleItm.id} singleItm={singleItm} />
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion">
                {/* TODO: Accordion Item */}
                {faqData.slice(5).map((singleItm) => (
                  <AccordionItem key={singleItm.id} singleItm={singleItm} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
