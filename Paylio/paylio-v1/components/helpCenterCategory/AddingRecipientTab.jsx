import Accordion from "../common/Accordion";

const AddingRecipientTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="adding-recipient"
      role="tabpanel"
      aria-labelledby="adding-recipient-tab"
    >
      <h4 className="title">Adding Recipient</h4>

      {/* TODO: Accordion */}
      <Accordion tab="recipient" />
    </div>
  );
};

export default AddingRecipientTab;
