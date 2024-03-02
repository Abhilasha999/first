import Image from "next/image";
import Link from "next/link";
import arrow_5 from "/public/images/icon/arrow-right-5.png";

const BackEndTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="back-end"
      role="tabpanel"
      aria-labelledby="back-end-tab"
    >
      <div className="single-box d-flex align-items-center justify-content-between">
        <div className="left-box">
          <Link href="/career/1">
            <h5>Senior Website Developer</h5>
          </Link>
          <ul>
            <li>Sydney, Australia</li>
            <li>Full time</li>
            <li>Entry-Level</li>
          </ul>
          <div className="salary-limit">
            <p>$80k- 100k</p>
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
            <h5>Junior Web Developer</h5>
          </Link>
          <ul>
            <li>Sydney, Australia</li>
            <li>Full time</li>
            <li>Entry-Level</li>
          </ul>
          <div className="salary-limit">
            <p>$40k- 55k</p>
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

export default BackEndTab;
