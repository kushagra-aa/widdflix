import React from "react";
import HomeIcon from "./../assets/icons/home.svg";
import AboutIcon from "./../assets/icons/about.svg";
import SearchIcon from "./../assets/icons/search.svg";
import CloseIcon from "./../assets/icons/close.svg";

import SearchBar from "./SearchBar";

// style
import "./../styles/css/sidebar.css";
const showSearch = () => {
  let search = document.querySelector(".search");
  search.classList.add("active");
};
const hideSearch = () => {
  let search = document.querySelector(".search");
  search.classList.remove("active");
};
function SideBar() {
  return (
    <>
      <div className="side-bar">
        <div className="side-bar-item">
          <img src={HomeIcon} alt="home" className="side-bar-item-icon" />
        </div>
        <div className="side-bar-item">
          <img src={AboutIcon} alt="about" className="side-bar-item-icon" />
        </div>
        <div className="side-bar-item" onClick={showSearch}>
          <img src={SearchIcon} alt="search" className="side-bar-item-icon" />
        </div>
      </div>
      <div className="search">
        <img
          src={CloseIcon}
          alt="search"
          className="side-bar-item-icon"
          onClick={hideSearch}
        />
        <SearchBar />
      </div>
    </>
  );
}

export default SideBar;
