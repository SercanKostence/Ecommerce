import React, { Component, Fragment } from 'react';
import Product1 from '../../assets/images/product1.png';

class Cart extends Component {
  renderCard(imageSrc, productName, quantity, price) {
    return (
      <div className="bg-white shadow-xl rounded-xl p-4 border-2 border-red-700">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 lg:w-1/4 p-2">
            <div className="w-full h-32 flex items-center justify-center overflow-hidden">
              <img className="w-full h-full object-contain" src={imageSrc} alt={productName} />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 p-2">
            <h5 className="text-lg font-semibold">{productName}</h5>
            <h6>Quantity = {quantity}</h6>
            <h6>Price = {price}</h6>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 p-2 flex flex-col items-center mt-8">
            <input
              placeholder="2"
              className="form-input border-2 border-gray rounded-md w-1/2 text-center"
              type="number"
            />
            <button className="mt-4 w-1/2 bg-red-700 text-white py-2 px-4 rounded-xl flex items-center justify-center">
              <i className="fa fa-trash-alt mr-2"></i> Remove
            </button>
          </div>
        </div>
      </div>
    );
  }

  calculateTotals(items) {
    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
    return { totalQuantity, totalPrice };
  }

  render() {
    const items = [
      { imageSrc: Product1, productName: "ASUS TUF A15 FA506IU Ryzen 7 4800H GTX", quantity: 5, price: "$5000" },
      { imageSrc: "https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70", productName: "Realme C21 (Cross Black, 64 GB)", quantity: 2, price: "$120" },
      // Diğer ürünler için benzer nesneler ekleyin
    ];

    const { totalQuantity, totalPrice } = this.calculateTotals(items);

    return (
      <Fragment>
        <div className="mt-36 container mx-auto px-4">
          <div className="">
            <div className="absolute right-2 top-0 p-3 bg-white shadow-md border-2 border-red-700 rounded-xl mr-4">
              <h3 className="text-xl font-semibold">Cart Summary</h3>
              <p className="mt-2">Total Quantity: {totalQuantity}</p>
              <p>Total Price: ${totalPrice}</p>
              <button className="mt-4 bg-red-700 text-white py-2 px-4 rounded-xl flex items-center justify-center">
                <i className="mr-2"></i> Ödeme Ekranına Geç
              </button>
            </div>

            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index}>
                  {this.renderCard(item.imageSrc, item.productName, item.quantity, item.price)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cart;
