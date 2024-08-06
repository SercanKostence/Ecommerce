import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider4 from '../../assets/images/slider4.jpg';
import slider2 from '../../assets/images/slider2.jpg';
import slider3 from '../../assets/images/slider3.jpg';

class HomeSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
    };

    return (
      <div className="w-full mx-auto pl-4 relative">
        <Slider {...settings}>
          <div className="relative">
            <img
              className="w-full h-96 md:h-full object-cover"
              src={slider4}
              alt="Slider 1"
            />
          </div>
          <div className="relative">
            <img
              className="w-full h-96 md:h-full object-cover"
              src={slider2}
              alt="Slider 2"
            />
          </div>
          <div className="relative">
            <img
              className="w-full h-96 md:h-full object-cover"
              src={slider3}
              alt="Slider 3"
            />
          </div>
        </Slider>

        <style>
          {`
            .slick-dots {
              top: 85% !important; 
            }
          `}
        </style>
      </div>
    );
  }
}

export default HomeSlider;
