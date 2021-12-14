// 404 svg
import SVG from "./../assets/404-svg.svg";
// styles
import "./../styles/css/404.css";
// link from react router
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="con-404">
      <img src={SVG} alt="Not Found" />
      <div className="btns-404">
        <Link className="btn-404" to="/about">
          see about
        </Link>
        <Link className="btn-404 btn-mid" to="/">
          go home!
        </Link>
        <Link className="btn-404" to="/profile">
          see profile
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
