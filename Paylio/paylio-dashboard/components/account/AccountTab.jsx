import Image from "next/image";
import confirm from "/public/images/icon/confirm.png";
import not_confirm from "/public/images/icon/not-confirm.png";
import pending from "/public/images/icon/pending.png";
import owner_profile_2 from "/public/images/owner-profile-2.png";

const AccountTab = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="account"
      role="tabpanel"
      aria-labelledby="account-tab"
    >
      <div className="upload-avatar">
        <div className="avatar-left d-flex align-items-center">
          <div className="profile-img">
            <Image src={owner_profile_2} alt="image" />
          </div>
          <div className="instraction">
            <h6>Your Avatar</h6>
            <p>Profile picture size: 400px x 400px</p>
          </div>
        </div>
        <div className="avatar-right">
          <div className="file-upload">
            <div className="right-area">
              <label className="file">
                <input type="file" />
                <span className="file-custom"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <form action="#">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="single-input">
              <label htmlFor="fName1">First Name</label>
              <input type="text" id="fName1" placeholder="Alfred" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-input">
              <label htmlFor="lName1">Last Name</label>
              <input type="text" id="lName1" placeholder="Davis" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="single-input">
              <label htmlFor="email1">Email</label>
              <div className="row input-status d-flex align-items-center">
                <div className="col-6">
                  <input
                    type="text"
                    id="email1"
                    placeholder="alfred6598@gmail.com"
                  />
                </div>
                <div className="col-6">
                  <span className="pending">
                    <Image src={pending} alt="icon" />
                    E-mail confirmation in pending
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="single-input">
              <label htmlFor="phone1">Phone</label>
              <div className="row input-status d-flex align-items-center">
                <div className="col-6">
                  <input type="text" id="phone1" placeholder="(316) 555-0116" />
                </div>
                <div className="col-6">
                  <span className="confirm">
                    <Image src={confirm} alt="icon" />
                    Phone number confirm
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="single-input file">
              <label>ID Confirmation documents</label>
              <div className="row input-status d-flex align-items-center">
                <div className="col-6">
                  <div className="file-upload">
                    <div className="right-area">
                      <label className="file">
                        <input type="file" />
                        <span className="file-custom"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <span className="notconfirm">
                    <Image src={not_confirm} alt="icon" />
                    Person not confirmed
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="single-input">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="2972 Westheimer Rd. Santa Ana, Illinois 85486"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="btn-border">
              <button className="cmn-btn">Account</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountTab;
