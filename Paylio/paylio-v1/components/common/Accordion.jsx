const Accordion = ({ tab }) => {
  return (
    <div className="accordion" id={`accordionAdding-recipient${tab}`}>
      <div className="accordion-item">
        <h6 className="accordion-header" id={`headingAdding-${tab}One`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseAdding-${tab}One`}
            aria-expanded="false"
            aria-controls={`collapseAdding-${tab}One`}>
            How can I add money using my linked bank account?
          </button>
        </h6>
        <div
          id={`collapseAdding-${tab}One`}
          className="accordion-collapse collapse"
          aria-labelledby={`headingAdding-${tab}One`}
          data-bs-parent={`#accordionAdding-recipient${tab}`}>
          <div className="accordion-body">
            <ul>
              <li>Tap the &#39;Add money&#39; button on your home screen.</li>
              <li>
                Review the different options to add money and choose &#39;Linked
                Bank Account&#39;. If you&#39;ve already linked a bank account,
                it will appear at the top of this list so you&#39;ll be able to
                select it instantly.
              </li>
              <li>Enter the amount you wish to add to your wallet.</li>
              <li>
                Once you&#39;ve entered the desired amount, your bank will send
                an OTP (one time password) over SMS to your registered number to
                verify. Simply authenticate the transaction and we’ll do the
                rest.
              </li>
              <li>Your wallet balance will be updated immediately.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h6 className="accordion-header" id={`headingAdding-${tab}Two`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseAdding-${tab}Two`}
            aria-expanded="false"
            aria-controls={`collapseAdding-${tab}Two`}>
            Is adding money with my linked bank account safe?
          </button>
        </h6>
        <div
          id={`collapseAdding-${tab}Two`}
          className="accordion-collapse collapse"
          aria-labelledby={`headingAdding-${tab}Two`}
          data-bs-parent={`#accordionAdding-recipient${tab}`}>
          <div className="accordion-body">
            <ul>
              <li>Tap the &#39;Add money&#39; button on your home screen.</li>
              <li>
                Review the different options to add money and choose &#39;Linked
                Bank Account&#39;. If you&#39;ve already linked a bank account,
                it will appear at the top of this list so you&#39;ll be able to
                select it instantly.
              </li>
              <li>Enter the amount you wish to add to your wallet.</li>
              <li>
                Once you&#39;ve entered the desired amount, your bank will send
                an OTP (one time password) over SMS to your registered number to
                verify. Simply authenticate the transaction and we&apos;ll do
                the rest.
              </li>
              <li>Your wallet balance will be updated immediately.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h6 className="accordion-header" id={`headingAdding-${tab}Three`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseAdding-${tab}Three`}
            aria-expanded="false"
            aria-controls={`collapseAdding-${tab}Three`}>
            Can I add money with a shared or joint bank account?
          </button>
        </h6>
        <div
          id={`collapseAdding-${tab}Three`}
          className="accordion-collapse collapse"
          aria-labelledby={`headingAdding-${tab}Three`}
          data-bs-parent={`#accordionAdding-recipient${tab}`}>
          <div className="accordion-body">
            <ul>
              <li>Tap the &#39;Add money&#39; button on your home screen.</li>
              <li>
                Review the different options to add money and choose &#39;Linked
                Bank Account&#39;. If you&#39;ve already linked a bank account,
                it will appear at the top of this list so you&#39;ll be able to
                select it instantly.
              </li>
              <li>Enter the amount you wish to add to your wallet.</li>
              <li>
                Once you&#39;ve entered the desired amount, your bank will send
                an OTP (one time password) over SMS to your registered number to
                verify. Simply authenticate the transaction and we&apos;ll do
                the rest.
              </li>
              <li>Your wallet balance will be updated immediately.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h6 className="accordion-header" id={`headingAdding-${tab}Four`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseAdding-${tab}Four`}
            aria-expanded="false"
            aria-controls={`collapseAdding-${tab}Four`}>
            How do I transfer money to my Paylio account from a bank account?
          </button>
        </h6>
        <div
          id={`collapseAdding-${tab}Four`}
          className="accordion-collapse collapse"
          aria-labelledby={`headingAdding-${tab}Four`}
          data-bs-parent={`#accordionAdding-recipient${tab}`}>
          <div className="accordion-body">
            <ul>
              <li>Tap the &#39;Add money&#39; button on your home screen.</li>
              <li>
                Review the different options to add money and choose &#39;Linked
                Bank Account&#39;. If you&#39;ve already linked a bank account,
                it will appear at the top of this list so you&#39;ll be able to
                select it instantly.
              </li>
              <li>Enter the amount you wish to add to your wallet.</li>
              <li>
                Once you&#39;ve entered the desired amount, your bank will send
                an OTP (one time password) over SMS to your registered number to
                verify. Simply authenticate the transaction and we’ll do the
                rest.
              </li>
              <li>Your wallet balance will be updated immediately.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h6 className="accordion-header" id={`headingAdding-${tab}Five`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseAdding-${tab}Five`}
            aria-expanded="false"
            aria-controls={`collapseAdding-${tab}Five`}>
            Can I get my salary paid into my Paylio account?
          </button>
        </h6>
        <div
          id={`collapseAdding-${tab}Five`}
          className="accordion-collapse collapse"
          aria-labelledby={`headingAdding-${tab}Five`}
          data-bs-parent={`#accordionAdding-recipient${tab}`}>
          <div className="accordion-body">
            <ul>
              <li>Tap the &#39;Add money&#39; button on your home screen.</li>
              <li>
                Review the different options to add money and choose &#39;Linked
                Bank Account&#39;. If you&#39;ve already linked a bank account,
                it will appear at the top of this list so you&#39;ll be able to
                select it instantly.
              </li>
              <li>Enter the amount you wish to add to your wallet.</li>
              <li>
                Once you&#39;ve entered the desired amount, your bank will send
                an OTP (one time password) over SMS to your registered number to
                verify. Simply authenticate the transaction and we’ll do the
                rest.
              </li>
              <li>Your wallet balance will be updated immediately.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h6 className="accordion-header" id={`headingAdding-${tab}Six`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseAdding-${tab}Six`}
            aria-expanded="false"
            aria-controls={`collapseAdding-${tab}Six`}>
            Will I be charged for an incoming transfer?
          </button>
        </h6>
        <div
          id={`collapseAdding-${tab}Six`}
          className="accordion-collapse collapse"
          aria-labelledby={`headingAdding-${tab}Six`}
          data-bs-parent={`#accordionAdding-recipient${tab}`}>
          <div className="accordion-body">
            <ul>
              <li>Tap the &#39;Add money&#39; button on your home screen.</li>
              <li>
                Review the different options to add money and choose &#39;Linked
                Bank Account&#39;. If you&#39;ve already linked a bank account,
                it will appear at the top of this list so you&#39;ll be able to
                select it instantly.
              </li>
              <li>Enter the amount you wish to add to your wallet.</li>
              <li>
                Once you&#39;ve entered the desired amount, your bank will send
                an OTP (one time password) over SMS to your registered number to
                verify. Simply authenticate the transaction and we’ll do the
                rest.
              </li>
              <li>Your wallet balance will be updated immediately.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h6 className="accordion-header" id={`headingAdding-${tab}Seven`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseAdding-${tab}Seven`}
            aria-expanded="false"
            aria-controls={`collapseAdding-${tab}Seven`}>
            How long will it take for the amount to be transferred into my
            Paylio account?
          </button>
        </h6>
        <div
          id={`collapseAdding-${tab}Seven`}
          className="accordion-collapse collapse"
          aria-labelledby={`headingAdding-${tab}Seven`}
          data-bs-parent={`#accordionAdding-recipient${tab}`}>
          <div className="accordion-body">
            <ul>
              <li>Tap the &#39;Add money&#39; button on your home screen.</li>
              <li>
                Review the different options to add money and choose &#39;Linked
                Bank Account&#39;. If you&#39;ve already linked a bank account,
                it will appear at the top of this list so you&#39;ll be able to
                select it instantly.
              </li>
              <li>Enter the amount you wish to add to your wallet.</li>
              <li>
                Once you&#39;ve entered the desired amount, your bank will send
                an OTP (one time password) over SMS to your registered number to
                verify. Simply authenticate the transaction and we’ll do the
                rest.
              </li>
              <li>Your wallet balance will be updated immediately.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
