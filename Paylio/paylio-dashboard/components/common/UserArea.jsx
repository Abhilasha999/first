import Image from "next/image";
import Link from "next/link";
import { FaCog, FaSignOutAlt, FaSortDown } from "react-icons/fa";
import avatar_2 from "/public/images/avatar-2.png";
import avatar from "/public/images/avatar.png";

const UserArea = () => {
  return (
    <div className="single-item user-area" onClick={(e) => e.stopPropagation()}>
      <div
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        className="profile-area dropdown d-flex align-items-center">
        <span className="user-profile">
          <Image src={avatar} alt="User" />
        </span>
        <i className="ms-0">
          <FaSortDown />
        </i>
      </div>
      <div
        onClick={(e) => e.nativeEvent.stopImmediatePropagation()}
        className={`main-area dropdown-menu user-content`}>
        <div className="head-area d-flex align-items-center">
          <div className="profile-img">
            <Image src={avatar_2} alt="User" />
          </div>
          <div className="profile-head">
            <Link href="#">
              <h5>Kevin Martin</h5>
            </Link>
            <p className="wallet-id">Wallet ID: 6264849965</p>
          </div>
        </div>
        <ul>
          <li className="border-area">
            <Link href="/account" className="d-flex align-items-center gap-2">
              <FaCog />
              Settings
            </Link>
          </li>
          <li>
            <button className="d-flex bg-transparent align-items-center gap-2">
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserArea;
