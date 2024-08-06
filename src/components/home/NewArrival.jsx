import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class NewArrival extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

    return (
      <Fragment>
        <style>
          {`
            .slick-prev:before,
            .slick-next:before {
              color: black;
            }
  
            .slick-dots {
              top: 100%;
            }
         
        
          `}
        </style>
        <div className="text-center w-full mx-auto py-12 bg-gray-100">
          <div className="mb-14">
            <h2 className="text-3xl font-bold">NEW ARRIVAL</h2>
            <p className="text-gray-600">Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <div className="mx-4">
            <Slider {...settings}>
              <div className="p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-2">
                  <img className="mx-auto mb-2 object-contain h-32 w-full" src="https://rukminim1.flixcart.com/image/800/960/k7z3afk0/watch/t/c/x/lcs-8188-lois-caron-original-imafq3k9ztzdkyhe.jpeg?q=50" alt="Product" />
                  <p className="font-semibold">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="text-gray-600">Price : $120</p>
                </div>
              </div>
              <div className="p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-2">
                  <img className="mx-auto mb-2 object-contain h-32 w-full" src="https://rukminim1.flixcart.com/image/800/960/jeka07k0/watch/4/p/y/38024pp25-fastrack-original-imaf37n5df3bn52n.jpeg?q=50" alt="Product" />
                  <p className="font-semibold">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="text-gray-600">Price : $120</p>
                </div>
              </div>
              <div className="p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-2">
                  <img className="mx-auto mb-2 object-contain h-32 w-full" src="https://rukminim1.flixcart.com/image/800/960/kka1si80/watch/4/t/k/tw-02524-teenager-luxurious-fashion-silicone-black-colored-led-original-imafznht7bzfmj7d.jpeg?q=50" alt="Product" />
                  <p className="font-semibold">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="text-gray-600">Price : $120</p>
                </div>
              </div>
              <div className="p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-2">
                  <img className="mx-auto mb-2 object-contain h-32 w-full" src="https://rukminim1.flixcart.com/image/800/960/jw0zr0w0/watch/c/u/r/ls2811-limestone-original-imafgrxqf8qvecjd.jpeg?q=50" alt="Product" />
                  <p className="font-semibold">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="text-gray-600">Price : $120</p>
                </div>
              </div>
              <div className="p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-2">
                  <img className="mx-auto mb-2 object-contain h-32 w-full" src="https://rukminim1.flixcart.com/image/800/960/ke353m80-0/watch/e/b/s/fresh-new-arrival-latest-men-watch-watches-men-ghadi-gents-boys-original-imafuupqgaanhtxu.jpeg?q=50" alt="Product" />
                  <p className="font-semibold">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="text-gray-600">Price : $120</p>
                </div>
              </div>
              <div className="p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-2">
                  <img className="mx-auto mb-2 object-contain h-32 w-full" src="https://rukminim1.flixcart.com/image/800/960/k48rwcw0/watch/k/v/f/lcs-8190-lois-caron-original-imafn7fsyttnpybp.jpeg?q=50" alt="Product" />
                  <p className="font-semibold">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="text-gray-600">Price : $120</p>
                </div>
              </div>
              <div className="p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-2">
                  <img className="mx-auto mb-2 object-contain h-32 w-full" src="https://rukminim1.flixcart.com/image/800/960/kpodocw0/watch/p/l/t/anlg-428-blue-blu-analogue-original-imag3uxbhfkyhahf.jpeg?q=50" alt="Product" />
                  <p className="font-semibold">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="text-gray-600">Price : $120</p>
                </div>
              </div>
              <div className="p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-2">
                  <img className="mx-auto mb-2 object-contain h-32 w-full" src="https://rukminim1.flixcart.com/image/800/960/ke353m80-0/watch/e/b/s/fresh-new-arrival-latest-men-watch-watches-men-ghadi-gents-boys-original-imafuupqgaanhtxu.jpeg?q=50" alt="Product" />
                  <p className="font-semibold">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="text-gray-600">Price : $120</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default NewArrival;
