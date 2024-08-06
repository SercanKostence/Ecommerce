import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Product1 from '../../assets/images/product1.png';
import Product2 from '../../assets/images/product2.png';
import Product3 from '../../assets/images/product3.png';
import Product4 from '../../assets/images/product4.png';

const ProductDetails = () => {
     
  return (
    <Fragment>
      <div className="container mx-auto px-4 py-6 mt-24">
        <div className="bg-white shadow-md p-4 mt-4 rounded-lg">
          <div className="flex flex-col md:flex-row">
            
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img className="w-full rounded-lg" src={Product1} alt="Product" />
              <div className="flex flex-wrap mt-4">
                <div className="w-1/4 p-1">
                  <img className="w-full rounded-lg" src={Product1} alt="Product Thumbnail" />
                </div>
                <div className="w-1/4 p-1">
                  <img className="w-full rounded-lg" src={Product2} alt="Product Thumbnail" />
                </div>
                <div className="w-1/4 p-1">
                  <img className="w-full rounded-lg" src={Product3} alt="Product Thumbnail" />
                </div>
                <div className="w-1/4 p-1">
                  <img className="w-full rounded-lg" src={Product4} alt="Product Thumbnail" />
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 px-4">
              <h5 className="text-2xl font-bold">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
              <h6 className="text-lg text-gray-600 mt-2">Some Of Our Exclusive Collection, You May Like Some Of Our Exclusive Collection</h6>
              <div className="flex mt-2">
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2">Regular Price 200</div>
                <div className="bg-red-500 text-white px-4 py-2 rounded mr-2">50% Discount</div>
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded">New Price 100</div>
              </div>
              <h6 className="mt-4">Choose Color</h6>
              <div className="flex flex-wrap mt-2">
                <label className="inline-flex items-center mr-4">
                  <input className="form-radio" type="radio" name="color" value="black" />
                  <span className="ml-2">Black</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <input className="form-radio" type="radio" name="color" value="green" />
                  <span className="ml-2">Green</span>
                </label>
                <label className="inline-flex items-center">
                  <input className="form-radio" type="radio" name="color" value="red" />
                  <span className="ml-2">Red</span>
                </label>
              </div>
              <h6 className="mt-4">Choose Size</h6>
              <div className="flex flex-wrap mt-2">
                <label className="inline-flex items-center mr-4">
                  <input className="form-radio" type="radio" name="size" value="x" />
                  <span className="ml-2">X</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <input className="form-radio" type="radio" name="size" value="xx" />
                  <span className="ml-2">XX</span>
                </label>
                <label className="inline-flex items-center">
                  <input className="form-radio" type="radio" name="size" value="xxx" />
                  <span className="ml-2">XXX</span>
                </label>
              </div>
              <h6 className="mt-4">Quantity</h6>
              <input className="form-input mt-2 w-1/6 text-center bg-gray-200" type="number" />
              <div className="flex flex-wrap mt-4">
                <Link to='/cart' className="bg-gray-800 text-white px-4 py-2 mt-2 rounded mr-4 flex items-center">
                  <i className="fa fa-shopping-cart mr-2"></i> Add To Cart
                </Link>
                <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded mr-4 flex items-center">
                  <i className="fa fa-car mr-2"></i> Order Now
                </button>
                <Link to='/favourite' className="bg-blue-500 text-white px-4 py-2 mt-2 rounded flex items-center">
                  <i className="fa fa-heart mr-2 "></i> Favourite
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md p-4 mt-4 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 px-4">
              <h6 className="text-lg font-semibold">DETAILS</h6>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              </p>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              </p>
            </div>

            <div className="md:w-1/2 px-4">
              <h6 className="text-lg font-semibold">REVIEWS</h6>
              <div className="mt-2">
                <p className="text-gray-700">
                  <span className="font-bold">Sercan Köstence</span> <span className="text-yellow-500">
                    <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                  </span>
                </p>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                <p className="mt-2 text-gray-700">
                  <span className="font-bold">Sercan Köstence</span> <span className="text-yellow-500">
                    <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                  </span>
                </p>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                <p className="mt-2 text-gray-700">
                  <span className="font-bold">Sercan Köstence</span> <span className="text-yellow-500">
                    <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                  </span>
                </p>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductDetails;
