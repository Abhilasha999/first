import Accordion from "../common/Accordion";

const SendingMoneyTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="sending-money"
      role="tabpanel"
      aria-labelledby="sending-money-tab"
    >
      <h4 className="title">Sending Money</h4>

      {/* TODO: Accordion */}
      <Accordion tab="sendingMoney" />
    </div>
  );
};

export default SendingMoneyTab;
