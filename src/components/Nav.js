import React, { useEffect, useState } from "react";
import Logo from "./../assets/favico.png";

import "./../styles/nav.css";

function Nav() {
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
      <nav className={`${show && "nav-black"}`}>
        <img className="nav-item nav-logo" src={Logo} alt="WiddFlix" />
        <img
          className="nav-item nav-avtar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </nav>
    </>
  );
}

export default Nav;
