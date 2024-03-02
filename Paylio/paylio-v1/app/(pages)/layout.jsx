"use client";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import Preloader from "@/components/preloader/Preloader";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import { useEffect } from "react";
// modal-video
import "node_modules/react-modal-video/scss/modal-video.scss";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="description" content="Paylio React Nextjs Template" />
        <title>
          Paylio - Money Transfer and Online Payments React Next JS Template
        </title>
      </head>
      <body>
        {/* Pre Loader */}
        <Preloader />

        {/* NavBar */}
        <NavBar />

        {children}

        {/* Footer */}
        <Footer />

        {/* Scroll To Top */}
        <ScrollToTop />
      </body>
    </html>
  );
}
