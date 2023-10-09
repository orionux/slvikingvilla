import React from "react";
import NavLayout from "./nav_components/NavLayout";
import TopBar from "./nav_components/TopBar";

type Props = {};

function Header() {
  return (
    <header>
      <TopBar />
      <NavLayout />
    </header>
  );
}

export default Header;
