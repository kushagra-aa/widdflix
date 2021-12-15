// styles
import "./../styles/css/carousel.css";
// rows
import Row1 from "./../assets/carousel/row1.png";
import Row2 from "./../assets/carousel/row2.png";
import Row3 from "./../assets/carousel/row3.png";
import Row4 from "./../assets/carousel/row4.png";
import Row5 from "./../assets/carousel/row5.png";
import Row6 from "./../assets/carousel/row6.png";
import Row7 from "./../assets/carousel/row7.png";

const Carousel = () => {
  return (
    <>
      <div className="carousel">
        <div className="carousel-rows">
          <div className="carousel-rows-row">
            <img src={Row1} alt="" />
            <img src={Row1} alt="" />
          </div>
          <div className="carousel-rows-row">
            <img src={Row2} alt="" />
            <img src={Row2} alt="" />
          </div>
          <div className="carousel-rows-row">
            <img src={Row3} alt="" />
            <img src={Row3} alt="" />
          </div>
          <div className="carousel-rows-row">
            <img src={Row4} alt="" />
            <img src={Row4} alt="" />
          </div>
          <div className="carousel-rows-row">
            <img src={Row5} alt="" />
            <img src={Row5} alt="" />
          </div>
          <div className="carousel-rows-row">
            <img src={Row6} alt="" />
            <img src={Row6} alt="" />
          </div>
          <div className="carousel-rows-row">
            <img src={Row7} alt="" />
            <img src={Row7} alt="" />
          </div>
        </div>
        <div className="carousel-vignette"></div>
      </div>
    </>
  );
};

export default Carousel;
