import Accordion from "../common/Accordion";

const AddingMoneyTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="adding-money"
      role="tabpanel"
      aria-labelledby="adding-money-tab"
    >
      <h4 className="title">Adding Money</h4>

      {/* TODO: Accordion */}
      <Accordion tab="money" />
    </div>
  );
};

export default AddingMoneyTab;
