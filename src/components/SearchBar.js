import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./../assets/icons/search.svg";

// styles
import "./../styles/css/searchbar.css";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const searched = () => {
    navigate(`/search/${searchText}`);
  };
  return (
    <>
      <div className="search-bar">
        <img src={SearchIcon} alt="search" onClick={searched} />
        <input
          type="text"
          className="search-bar-form-input"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </>
  );
}

export default SearchBar;
