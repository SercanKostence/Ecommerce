import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { XMarkIcon } from '@heroicons/react/24/solid'; 

export class Favourite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: [
                {
                    image: "https://rukminim1.flixcart.com/image/800/960/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50",
                    name: "Striped Men Hooded Neck Red",
                    price: "$120",
                },
                {
                    image: "https://rukminim1.flixcart.com/image/800/960/keykscw0-0/t-shirt/l/d/q/3xl-bmrgyrnful-z12-blive-original-imafvgzkyjghf7ba.jpeg?q=50",
                    name: "Striped Men Round Neck Grey",
                    price: "$120",
                },
                {
                    image: "https://rukminim1.flixcart.com/image/800/960/jt4olu80/t-shirt/v/7/v/xl-t-shirt-0068-eg-original-imafejrfpzjkxvkq.jpeg?q=50",
                    name: "Color Block Men Round Neck Grey",
                    price: "$120",
                },
            ],
        };
    }

    handleRemove = (index) => {
        const newFavorites = [...this.state.favorites];
        newFavorites.splice(index, 1);
        this.setState({ favorites: newFavorites });
    };

    renderCard = (imageSrc, productName, price, index) => {
        return (
            <div className="col-span-1 p-2 relative" key={index}>
                <div className="bg-white shadow-xl rounded-lg border border-gray overflow-hidden relative">
                    <button
                        onClick={() => this.handleRemove(index)}
                        className="absolute top-2 right-2 bg-gray-100 text-red-900 rounded-full p-1"
                    >
                        <XMarkIcon className="w-4 h-4 text-red-700" /> 
                    </button>
                    <div className="w-full h-48 flex items-center justify-center">
                        <img className="w-full h-full object-contain mt-8" src={imageSrc} alt={productName} />
                    </div>
                    <div className="p-4">
                        <p className="text-lg font-semibold">{productName}</p>
                        <p className="text-gray-900 font-semibold">Price: {price}</p>
                    </div>
                    <div className="mb-8 p-2 flex justify-center">
                        <Link to='/cart' className="px-4 py-2 bg-red-700 text-white no-underline">
                            Satın Al
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <Fragment>
                <div className="container-fluid mx-auto text-center px-2 py-4 mt-24">
                    <div className="section-title text-center mb-14">
                        <h2 className="text-3xl font-bold">YOUR FAVOURITES</h2>
                        <p className="text-lg mt-2">Some Of Our Exclusive Collection, You May Like</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {this.state.favorites.map((item, index) =>
                            this.renderCard(item.image, item.name, item.price, index)
                        )}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Favourite;
