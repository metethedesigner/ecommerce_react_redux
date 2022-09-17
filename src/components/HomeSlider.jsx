import { webSlider } from "../img-api/data";

//React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {webSlider.map((item) => (
          <img src={item.image} alt="slider" />
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
