// styles
import "./../styles/css/about.css";
// me from components
import Me from "../components/About/Me";
// logo
import Logo from "./../assets/LOGO.png";

const About = () => {
  return (
    <div className="about">
      <img src={Logo} alt="widd flix" />
      <p>
        Widd Flix is a Web Application, a Netflix - IMDB - TMDB Clone. A user
        can view details about their favorite Movies & TV Series. It uses TMDB's
        API for the Movies data
      </p>
      <Me />
      <div className="about-btm">
        <p className="about-code">
          get the code{" "}
          <a
            target="_blank"
            href="https://github.com/kushagra-aa/widdflix"
            rel="noreferrer"
          >
            here!
          </a>
        </p>

        <a
          target="_blank"
          href="https://www.netflix.com/"
          rel="noreferrer"
          className="about-links"
        >
          Netflix
        </a>
        <a
          target="_blank"
          href="https://www.imdb.com/"
          rel="noreferrer"
          className="about-links"
        >
          IMDB
        </a>
        <a
          target="_blank"
          href="https://www.themoviedb.org"
          rel="noreferrer"
          className="about-links"
        >
          TMDB
        </a>
      </div>
    </div>
  );
};

export default About;
