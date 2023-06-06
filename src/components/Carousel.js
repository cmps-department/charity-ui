import Slider from "react-slick";
import Image from "./Image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import next from "../images/carousel-arrows/next.png";
import prev from "../images/carousel-arrows/prev.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={next}
      width={40}
      className={className}
      onClick={onClick}
      style={{ ...style, width: "40px", height: "40px", right: "-50px"}}
      alt="prev-arrow"
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={prev}
      width={40}
      className={className}
      onClick={onClick}
      style={{ ...style, width: "40px", height: "40px", left: "-50px" }}
      alt="prev-arrow"
    />
  );
}

const Carousel = ({ images }) => {
  const settings = {
    arrows: true,
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  function renderImages(images = []) {
    return images.map((image) => (
      <div className="max-h-[600px] rounded-3xl overflow-hidden" key={image}>
        <Image
          className="inline-block rounded-3xl w-full h-full object-cover"
          size={{ width: 450, height: 450 }}
          imageId={image}
          alt="application carousel"
        />
      </div>
    ));
  }

  const elements = renderImages(images);

  return (
    <div className="max-w-700">
      <Slider {...settings}>{elements}</Slider>
    </div>
  );
};

export default Carousel;
