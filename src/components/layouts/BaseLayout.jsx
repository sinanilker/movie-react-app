import React from "react";
import Navi from "../block/Navi";
import { Outlet } from "react-router";
import Header from "../block/Header";


const Layout = () => {
  return (
    // Layout Part that can hold the Navbar Header Etc.
    // React router gives us outlet and outer part
    // <Outlet /> gives us the inner part
    <>
    <Navi></Navi>
      <Header />
      <header>Header</header>
      <Outlet></Outlet>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
