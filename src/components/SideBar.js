// icons
import HomeIcon from "./../assets/icons/home.svg";
import AboutIcon from "./../assets/icons/about.svg";
import SearchIcon from "./../assets/icons/search.svg";
import MovieIcon from "./../assets/icons/Movies.svg";
import TvIcon from "./../assets/icons/Series.svg";
import CloseIcon from "./../assets/icons/close.svg";
// search bar
import SearchBar from "./SearchBar";
// link from react router
import { Link } from "react-router-dom";

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
  // scroll to top
  const scroll = () => window.scroll(0, 0);
  return (
    <>
      <div className="side-bar">
        <div className="side-bar-item">
          <Link to="/" onClick={scroll}>
            <img src={HomeIcon} alt="home" className="side-bar-item-icon" />
          </Link>
        </div>
        <div className="side-bar-item">
          <Link to="/about" onClick={scroll}>
            <img src={AboutIcon} alt="about" className="side-bar-item-icon" />
          </Link>
        </div>
        <div className="side-bar-item" onClick={showSearch}>
          <img src={SearchIcon} alt="search" className="side-bar-item-icon" />
        </div>
        <div className="side-bar-item">
          <Link to="/movies" onClick={scroll}>
            <img src={MovieIcon} alt="search" className="side-bar-item-icon" />
          </Link>
        </div>
        <div className="side-bar-item">
          <Link to="/tvseries" onClick={scroll}>
            <img src={TvIcon} alt="search" className="side-bar-item-icon" />
          </Link>
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
