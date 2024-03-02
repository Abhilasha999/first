import Image from "next/image";
import Link from "next/link";
import arrow_5 from "/public/images/icon/arrow-right-5.png";

const DessignerTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="dessigner"
      role="tabpanel"
      aria-labelledby="dessigner-tab"
    >
      <div className="single-box d-flex align-items-center justify-content-between">
        <div className="left-box">
          <Link href="/career/1">
            <h5>UI/UX Design Intern</h5>
          </Link>
          <ul>
            <li>Sydney, Australia</li>
            <li>Full time</li>
            <li>Entry-Level</li>
          </ul>
          <div className="salary-limit">
            <p>$30k- 50k</p>
          </div>
        </div>
        <div className="right-box">
          <Link href="/career/1">
            <Image src={arrow_5} alt="image" />
          </Link>
        </div>
      </div>
      <div className="single-box d-flex align-items-center justify-content-between">
        <div className="left-box">
          <Link href="/career/1">
            <h5>Digital Designer</h5>
          </Link>
          <ul>
            <li>Sydney, Australia</li>
            <li>Full time</li>
            <li>Entry-Level</li>
          </ul>
          <div className="salary-limit">
            <p>$30k- 50k</p>
          </div>
        </div>
        <div className="right-box">
          <Link href="/career/1">
            <Image src={arrow_5} alt="image" />
          </Link>
        </div>
      </div>
      <div className="single-box d-flex align-items-center justify-content-between">
        <div className="left-box">
          <Link href="/career/1">
            <h5>Graphic Designer</h5>
          </Link>
          <ul>
            <li>Sydney, Australia</li>
            <li>Full time</li>
            <li>Entry-Level</li>
          </ul>
          <div className="salary-limit">
            <p>$40k- 50k</p>
          </div>
        </div>
        <div className="right-box">
          <Link href="/career/1">
            <Image src={arrow_5} alt="image" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DessignerTab;
