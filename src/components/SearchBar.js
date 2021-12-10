import React from "react";
import SearchIcon from "./../assets/icons/search.svg";

// styles
import "./../styles/css/searchbar.css";

function SearchBar() {
  return (
    <>
      <div className="search-bar">
        <img src={SearchIcon} alt="search" />
        <form action="" className="search-bar-form">
          <input type="text" className="search-bar-form-input" />
        </form>
      </div>
    </>
  );
}

export default SearchBar;
