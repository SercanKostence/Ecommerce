import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

export class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <div className="container mx-auto text-center px-2 py-4 mt-16">
          <div className="section-title text-center mb-14">
            <h2 className="text-3xl font-bold">FEATURED PRODUCTS</h2>
            <p className="text-lg mt-2">Some of Our Exclusive Collection</p>
            
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
         
            {this.renderCard(
              "https://m.media-amazon.com/images/I/71hLIZTbrUL._AC_SX679_.jpg",
              "Apple iPhone 15 Plus (512 GB) - Sarı",
              "$120"
            )}
            {this.renderCard(
              "https://m.media-amazon.com/images/I/71hLIZTbrUL._AC_SX679_.jpg",
              "Apple iPhone 15 Plus (512 GB) - Sarı",
              "$120"
            )}
            {this.renderCard(
              "https://m.media-amazon.com/images/I/71hLIZTbrUL._AC_SX679_.jpg",
              "Apple iPhone 15 Plus (512 GB) - Sarı",
              "$120"
            )}
            {this.renderCard(
              "https://m.media-amazon.com/images/I/71hLIZTbrUL._AC_SX679_.jpg",
              "Apple iPhone 15 Plus (512 GB) - Sarı",
              "$120"
            )}
            {this.renderCard(
              "https://m.media-amazon.com/images/I/71hLIZTbrUL._AC_SX679_.jpg",
              "Apple iPhone 15 Plus (512 GB) - Sarı",
              "$120"
            )}
            {this.renderCard(
              "https://m.media-amazon.com/images/I/71hLIZTbrUL._AC_SX679_.jpg",
              "Apple iPhone 15 Plus (512 GB) - Sarı",
              "$120"
            )}

          </div>
        </div>
        
      </Fragment>
    );
  }

  renderCard(imageSrc, productName, price) {
    return (
      <Link to="/productdetails" className='no-underline'>
      <div className="p-2">
        <div className="bg-white shadow-md rounded overflow-hidden transition-transform hover:scale-105">
          <div className="w-full h-48 flex items-center justify-center">
            <img className="w-full h-full object-contain" src={imageSrc} alt={productName} />
          </div>
          <div className="p-4">
            <p className="text-lg font-semibold text-blue-900">{productName}</p>
            <p className='text-gray-800 text-md font-semibold'>Price: {price}</p>
          </div>
        </div>
      </div>
      </Link>
    );
  }
}

export default FeaturedProducts;
