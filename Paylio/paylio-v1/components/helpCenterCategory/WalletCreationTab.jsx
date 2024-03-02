import Accordion from "../common/Accordion";

const WalletCreationTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="wallet-creation"
      role="tabpanel"
      aria-labelledby="wallet-creation-tab"
    >
      <h4 className="title">Wallet Creation</h4>

      {/* TODO: Accordion */}
      <Accordion tab="wallet" />
    </div>
  );
};

export default WalletCreationTab;
