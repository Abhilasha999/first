import Accordion from "../common/Accordion";

const PaylioCardTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="paylio-card"
      role="tabpanel"
      aria-labelledby="paylio-card-tab"
    >
      <h4 className="title">Paylio Card</h4>

      {/* TODO: Accordion */}
      <Accordion tab="card" />
    </div>
  );
};

export default PaylioCardTab;
