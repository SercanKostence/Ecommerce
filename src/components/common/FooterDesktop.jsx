import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

export class FooterDesktop extends Component {
    render() {
        return (
            <Fragment>
                <div className="bg-gray-800 mt-5 pt-3 shadow-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap my-5">
                            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2">
                                <h5 className="text-white text-lg font-bold">OFFICE ADDRESS</h5>
                                <p className="text-gray-400">
                                    1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104 <br />
                                    Email: Support@easylearningbd.com
                                </p>
                            </div>

                            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2">
                                <h5 className="text-white text-lg font-bold">THE COMPANY</h5>
                                <Link to="/contact" className="text-gray-400 block mt-2 hover:underline">About Us</Link>
                                <Link to="/contact" className="text-gray-400 block mt-2 hover:underline">Company Profile</Link>
                                <Link to="/contact" className="text-gray-400 block mt-2 hover:underline">Contact Us</Link>
                            </div>

                            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2">
                                <h5 className="text-white text-lg font-bold">MORE INFO</h5>
                                <Link to="/purchase" className="text-gray-400 block mt-2 hover:underline">How To Purchase</Link>
                                <Link to="/privacy" className="text-gray-400 block mt-2 hover:underline">Privacy Policy</Link>
                                <Link to="/refund" className="text-gray-400 block mt-2 hover:underline">Refund Policy</Link>
                            </div>

                            {/* Social Links and Download Apps in the same row */}
                            <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 flex flex-col">
                                <h5 className="text-white text-lg font-bold">SOCIAL LINKS</h5>
                                <div className="flex space-x-2 mt-2">
                                    <a href="#" className="text-white text-2xl"><i className="fab fa-facebook"></i></a>
                                    <a href="#" className="text-white text-2xl"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="text-white text-2xl"><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>

                            <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 flex flex-col">
                                <h5 className="text-white text-lg font-bold">DOWNLOAD APPS</h5>
                                <div className="flex space-x-4 mt-2 h-full w-full">
                                    <a href="#"><img src={Google} alt="Google Play" className="h-auto" /></a>
                                    <a href="#"><img src={Apple} alt="Apple Store" className="h-auto" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black text-center py-3">
                        <div className="container mx-auto px-4">
                            <h6 className="text-white">© Copyright 2024 by Easy Shop, All Rights Reserved</h6>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FooterDesktop
