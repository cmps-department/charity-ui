import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car from "../images/car.png";

const Carousel = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-700">
      <Slider {...settings}>
        <div>
          <img className="w-full max-h-600" src={car} alt="car" />
        </div>
        <div>
          <img className="w-full max-h-600" src={car} alt="car" />
        </div>
      </Slider>
    </div>

  );
};

export default Carousel;
