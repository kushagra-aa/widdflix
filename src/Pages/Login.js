// style
import "./../styles/css/login.css";
// Logo
import Logo from "./../assets/LOGO.png";
// banner img
import Banner from "./../assets/Banner.png";
// state
import { useEffect, useState } from "react";
// siginscreen component
import SignInScreen from "../components/SignInScreen";
import Carousel from "../components/Carousel";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  const [show, handelShow] = useState(false);

  const changeSignIn = () => setSignIn(true);

  const transitionNav = () => {
    if (window.scrollY > 1) handelShow(true);
    else handelShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return (
    <>
      <div
        className="login"
        // style={{
        //   backgroundImage: `url(${Banner})`,
        // }}
      >
        <div className="login-bg">
          <div className="login-bg-con">
            <Carousel />
          </div>
          <div className="login-bg-vignette"></div>
        </div>
        <div className={`login-top ${show && "login-top-black"}`}>
          <img src={Logo} alt="login BG" className="login-top-logo" />
          <button className="login-top-btn" onClick={changeSignIn}>
            sign in
          </button>
        </div>
        <div className="login-body">
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              <h2>
                unlimited access to movies, TV series and much much more...
              </h2>
              <h3>Watch anything anytime anywhere</h3>
              <p>
                Ready to watch? Enter your email to create a new account or
                login.
              </p>
              <form className="login-body-form">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email!"
                />
                <button onClick={changeSignIn}>get started</button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
