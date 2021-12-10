import logo from "./../assets/LOGO-text.png";

import "./../styles/css/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="foot">
        <div className="foot-logo-con">
          <img src={logo} alt="widdfix" />
        </div>
        <div className="foot-det">
          <a
            href="https://kushagra-aa.github.io/portfolio/"
            target="_blank"
            className="foot-det-me"
            rel="noreferrer"
          >
            <img
              src="https://pbs.twimg.com/profile_images/1391264894192738307/YLfn-2Xk_400x400.jpg"
              alt="kushagra"
              className="foot-det-me"
            />
          </a>
          <p className="foot-det-name">kushagra agnihotri</p>
          <div className="foot-det-copy">
            &copy; widdflix, all rights reserved
          </div>
          <div className="foot-det-lang">english</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
