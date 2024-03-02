import Image from "next/image";
import delete_2 from "/public/images/icon/delete-2.png";
import logout from "/public/images/icon/logout.png";
import owner_profile from "/public/images/owner-profile.png";

const OwnerDetails = () => {
  return (
    <div className="owner-details">
      <div className="profile-area">
        <div className="profile-img">
          <Image src={owner_profile} alt="image" />
        </div>
        <div className="name-area">
          <h6>Alfred Davis</h6>
          <p className="active-status">Active</p>
        </div>
      </div>
      <div className="owner-info">
        <ul>
          <li>
            <p>Account ID:</p>
            <span className="mdr">Rex49484</span>
          </li>
          <li>
            <p>Joined:</p>
            <span className="mdr">Aug 25,2021</span>
          </li>
          <li>
            <p>Confirm status:</p>
            <span className="mdr">80%</span>
          </li>
        </ul>
      </div>
      <div className="owner-action">
        <button>
          <Image src={logout} alt="image" />
          Logout
        </button>
        <button className="delete">
          <Image src={delete_2} alt="image" />
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default OwnerDetails;
