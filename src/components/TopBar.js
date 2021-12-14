import React, { useEffect, useState } from "react";
// link from react router
import { Link } from "react-router-dom";
// logo png
import logo from "./../assets/LOGO-text.png";
// avatar png
import Avatar from "./../assets/imgs/no-av.png";

import "./../styles/css/topbar.css";

function TopBar() {
  const [show, handelShow] = useState(false);
  // scroll to top
  const scroll = () => window.scroll(0, 0);

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
        <Link to="/profile" onClick={scroll}>
          <img className="nav-item nav-avtar" src={Avatar} alt="avatar" />
        </Link>
      </nav>
    </>
  );
}

export default TopBar;
