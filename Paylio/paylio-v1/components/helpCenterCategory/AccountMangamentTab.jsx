import Accordion from "../common/Accordion";

const AccountMangamentTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="account-mangament"
      role="tabpanel"
      aria-labelledby="account-mangament-tab"
    >
      <h4 className="title">Wallet Mangament</h4>

      {/* TODO: Accordion */}
      <Accordion tab="account" />
    </div>
  );
};

export default AccountMangamentTab;
