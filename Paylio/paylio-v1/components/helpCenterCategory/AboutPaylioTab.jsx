import Accordion from "../common/Accordion";

const AboutPaylioTab = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="about-paylio"
      role="tabpanel"
      aria-labelledby="about-paylio-tab"
    >
      <h4 className="title">Adding Money</h4>
      {/* TODO: Accordion */}
      <Accordion tab="paylio" />
    </div>
  );
};

export default AboutPaylioTab;
