import React, { Component, Fragment } from 'react';


class Categories extends Component {
  render() {
    return (
      <Fragment>
        <div className="text-center w-full mx-auto py-12">
          <div className="mb-14">
            <h2 className="text-3xl font-bold">CATEGORIES</h2>
            <p className="text-gray-600">Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <div className="flex flex-wrap mr-2 ml-2">
            <div className="w-full lg:w-1/2 md:w-full flex flex-wrap mb-6">
              <div className="w-1/2 md:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-4 transition-transform duration-300 hover:scale-105">
                  <img
                    className="mx-auto"
                    src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                    alt="Top Offers"
                  />
                  <h5 className="category-name mt-2 font-semibold">Top Offers</h5>
                </div>
              </div>

              <div className="w-1/2 md:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-4 transition-transform duration-300 hover:scale-105">
                  <img
                    className="mx-auto"
                    src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                    alt="Grocery"
                  />
                  <h5 className="category-name mt-2 font-semibold">Grocery</h5>
                </div>
              </div>

              <div className="w-1/2 md:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-4 transition-transform duration-300 hover:scale-105">
                  <img
                    className="mx-auto"
                    src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                    alt="Mobiles"
                  />
                  <h5 className="category-name mt-2 font-semibold">Mobiles</h5>
                </div>
              </div>

              <div className="w-1/2 md:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-4 transition-transform duration-300 hover:scale-105">
                  <img
                    className="mx-auto"
                    src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
                    alt="Fashion"
                  />
                  <h5 className="category-name mt-2 font-semibold">Fashion</h5>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-wrap mb-6">
              <div className="w-1/2 md:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-4 transition-transform duration-300 hover:scale-105">
                  <img
                    className="mx-auto"
                    src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                    alt="Electronics"
                  />
                  <h5 className="category-name mt-2 font-semibold">Electronics</h5>
                </div>
              </div>

              <div className="w-1/2 md:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-4 transition-transform duration-300 hover:scale-105">
                  <img
                    className="mx-auto"
                    src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                    alt="Home"
                  />
                  <h5 className="category-name mt-2 font-semibold">Home</h5>
                </div>
              </div>

              <div className="w-1/2 md:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-4 transition-transform duration-300 hover:scale-105">
                  <img
                    className="mx-auto"
                    src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                    alt="Appliances"
                  />
                  <h5 className="category-name mt-2 font-semibold">Appliances</h5>
                </div>
              </div>

              <div className="w-1/2 md:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg text-center p-4 transition-transform duration-300 hover:scale-105">
                  <img
                    className="mx-auto"
                    src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                    alt="Beauty"
                  />
                  <h5 className="category-name mt-2 font-semibold">Beauty</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Categories;
