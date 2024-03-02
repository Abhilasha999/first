import Link from "next/link";

const CopyRight = () => {
  return (
    <div className="footer-bottom">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-6 col-sm-8 d-flex justify-content-center justify-content-sm-start order-sm-0 order-1">
          <div className="copyright text-center text-sm-start">
            <p>
              {" "}
              Copyright © {new Date().getFullYear()}{" "}
              <Link href="/">Paylio.</Link> All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-4">
          <div className="menu-item">
            <ul className="footer-link d-flex justify-content-sm-end justify-content-center align-items-center">
              <li>
                <Link href="/privacy-policy">Terms</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
