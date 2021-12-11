import React, { useEffect, useState } from "react";
import logo from "./../assets/LOGO-text.png";
import noAv from "./../assets/imgs/no-av.png";

import "./../styles/css/topbar.css";

function TopBar() {
  const [show, handelShow] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 100) handelShow(true);
    else handelShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return (
    <>
      <nav className={`${show && "nav-black"} topbar`}>
        <img
          className="nav-item nav-logo"
          src={logo}
          alt="WiddFlix"
          onClick={() => {
            window.scroll(0, 0);
          }}
        />
        <img className="nav-item nav-avtar" src={noAv} alt="avatar" />
      </nav>
    </>
  );
}

export default TopBar;
