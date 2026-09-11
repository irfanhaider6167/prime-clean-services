import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import FloatingButtons from "../components/FloatingButtons";

const Layout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header />

      {/* Hero Slider - Home Page Only */}
      {isHomePage && <Slider />}

      <main>
        <Outlet />
      </main>

      <FloatingButtons />

      <Footer />
    </>
  );
};

export default Layout;
