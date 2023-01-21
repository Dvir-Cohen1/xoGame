import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Layout = () => {
  // const location = useLocation();
  // const isNotGameBoardPage = location.pathname === "/gameboard" ? false : true;

  return (
    <div id="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
