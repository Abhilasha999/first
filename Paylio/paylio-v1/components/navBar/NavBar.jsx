"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { navData } from "./navData";
import logo from "/public/images/logo.png";

const NavBar = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const menus = useRef();
  const path = usePathname();
  const hidenMenu = () => {
    menus.current.classList.remove("show");
  };

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };
  const checkMobile = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navBarTop);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("scroll", navBarTop);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <header
      className={`header-section ${
        windowHeight > 50 && "animated fadeInDown header-fixed"
      } `}>
      <div className="overlay">
        <div className="container">
          <div className="row d-flex header-area">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" href="/" onClick={hidenMenu}>
                <Image src={logo} className="logo" alt="logo" />
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-content">
                <i>
                  <FaBars />
                </i>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbar-content"
                ref={menus}>
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                  {navData.map(({ itm, url, id, dropdown, dropdown_itms }) => {
                    const isActive =
                      dropdown_itms &&
                      dropdown_itms.some(({ url }) => path == url);
                    return !dropdown ? (
                      <li className="nav-item" key={id}>
                        <Link
                          href={url}
                          className="nav-link active"
                          onClick={hidenMenu}>
                          {itm}
                        </Link>
                      </li>
                    ) : (
                      <li key={id} className="nav-item dropdown main-navbar">
                        <button
                          className={`nav-link dropdown-toggle ${
                            isActive && "active"
                          }`}
                          data-bs-toggle={`${isMobile && "dropdown"}`}
                          data-bs-auto-close="outside">
                          {itm}
                        </button>
                        <ul className="dropdown-menu main-menu shadow">
                          {dropdown_itms?.map(({ id, dp_itm, url }) => (
                            <li key={id}>
                              <Link
                                className={`nav-link ${
                                  path == url && "active"
                                }`}
                                href={url}
                                onClick={hidenMenu}>
                                {dp_itm}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
                <div className="right-area header-action d-flex align-items-center max-un">
                  <Link
                    href="/login"
                    className={`login ${path == "/login" && "active"}`}>
                    Login
                  </Link>
                  <Link href="/sign-up" className="cmn-btn">
                    Sign Up
                    <i className="icon-d-right-arrow-2"></i>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
