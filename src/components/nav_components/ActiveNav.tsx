import React, { useEffect } from "react";

const ActiveNav = () => {
  useEffect(() => {
    const currentLocation = window.location.href;
    const menuItem = document.querySelectorAll("a");
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
      if (menuItem[i].href === currentLocation) {
        menuItem[i].classList.add("active-nav");
      }
    }
  }, []);

  return null;
};

export default ActiveNav;
