import AboutPaylioTab from "./AboutPaylioTab";
import AccountMangamentTab from "./AccountMangamentTab";
import AddingMoneyTab from "./AddingMoneyTab";
import AddingRecipientTab from "./AddingRecipientTab";
import Categories from "./Categories";
import PaylioCardTab from "./PaylioCardTab";
import SendingMoneyTab from "./SendingMoneyTab";
import WalletCreationTab from "./WalletCreationTab";

const Details = () => {
  return (
    <section className="faqs-section help-category">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center justify-content-between">
            <div className="col-md-3">
              {/* TODO: Categories */}
              <Categories />
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                {/* TODO: About Paylio Tab */}
                <AboutPaylioTab />

                {/* TODO: Wallet Creation Tab */}
                <WalletCreationTab />

                {/* TODO: Adding Money Tab */}
                <AddingMoneyTab />

                {/* TODO: Paylio Card Tab */}
                <PaylioCardTab />

                {/* TODO: Sending Money Tab */}
                <SendingMoneyTab />

                {/* TODO: Account Mangament Tab */}
                <AccountMangamentTab />

                {/* TODO: Adding Recipient Tab */}
                <AddingRecipientTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
