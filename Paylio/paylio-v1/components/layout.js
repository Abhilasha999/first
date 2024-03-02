import Footer from "./footer/Footer";
import Preloader from "./preloader/Preloader";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const { default: NavBar } = require("./navBar/NavBar");

const Layout = ({ children }) => {
  return (
    <>
      {/* Pre Loader */}
      <Preloader />

      <NavBar />
      {children}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
};

export default Layout;
