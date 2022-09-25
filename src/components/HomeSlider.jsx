import { webSlider } from "../img-api/data";

//React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {config} from "../config";

const HomeSlider = () => {
  return (
    <div className="slider">
      <Slider {...config.settings}>
        {webSlider.map((item,key) => <img key={key} src={item} alt="slider" />)}
      </Slider>
    </div>
  );
};

export default HomeSlider;
