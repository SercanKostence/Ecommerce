import React, { Component } from 'react';

class MegaMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: null,
        };
    }

    handleClick(index) {
        this.setState({
            activeIndex: this.state.activeIndex === index ? null : index,
        });
    }

    render() {
        const { activeIndex } = this.state;

        const categories = [
            {
                name: "Top Offers",
                items: ["Offer 1", "Offer 2", "Offer 3"],
            },
            {
                name: "Grocery",
                items: ["Milk", "Bread", "Fruits"],
            },
            {
                name: "Mobiles",
                items: ["Smartphone 1", "Smartphone 2", "Accessories"],
            },
            {
                name: "Fashion",
                items: ["Men's Tshirt", "Women's Dress", "Accessories"],
            },
            {
                name: "Electronics",
                items: ["Smart TV", "Headphones", "Speakers"],
            },
            {
                name: "Home",
                items: ["Furniture", "Decor", "Kitchenware"],
            },
            {
                name: "Appliances",
                items: ["Washing Machine", "Refrigerator", "Microwave"],
            },
            {
                name: "Beauty",
                items: ["Skincare", "Makeup", "Fragrances"],
            },
        ];

        return (
            <div className="w-full h-[380px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-hover:bg-gray-600 scrollbar-track-gray-100 rtl">
                <div className="ltr">
                    {categories.map((category, index) => (
                        <div key={index}>
                            <button
                                className={`flex items-center justify-between bg-gray-200 text-gray-700 cursor-pointer p-2 w-full border border-gray-300 text-sm text-left outline-none font-semibold font-sans transition-all duration-300 ease-out overflow-hidden shadow-sm hover:bg-blue-900 hover:text-white ${activeIndex === index ? 'bg-blue-900 text-white' : ''}`}
                                onClick={() => this.handleClick(index)}
                            >
                                <span>{category.name}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                            <div className={`transition-max-height duration-200 ease-out overflow-hidden ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                                <ul className="p-2 bg-white">
                                    {category.items.map((item, i) => (
                                        <li key={i}>
                                            <a href="#" className="text-gray-700 no-underline hover:underline">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default MegaMenu;
