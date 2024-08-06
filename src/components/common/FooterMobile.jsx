import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

class FooterMobile extends Component {
    render() {
        return (
            <Fragment>
                <div className="bg-gray-800 mt-5 pt-3 shadow-sm"> 
                    <div className="text-center container mx-auto px-4">
                        <div className="flex flex-wrap my-5">
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                                <h5 className="text-white text-lg font-bold">OFFICE ADDRESS</h5>
                                <p className="text-gray-400">
                                    1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104 <br />
                                    Email: Support@easylearningbd.com
                                </p>
                                <h5 className="text-white text-lg font-bold mt-4">SOCIAL LINK</h5>
                                <div className="flex space-x-2 justify-center">
                                    <a href=""><i className="fab fa-facebook text-white text-2xl"></i></a>
                                    <a href=""><i className="fab fa-instagram text-white text-2xl"></i></a>
                                    <a href=""><i className="fab fa-twitter text-white text-2xl"></i></a>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                                <h5 className="text-white text-lg font-bold">DOWNLOAD APPS</h5>
                                <a href="#"><img src={Google} alt="Google Play" className="mx-auto mt-2" /></a><br />
                                <a href="#"><img src={Apple} alt="Apple Store" className="mx-auto mt-2" /></a><br />
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

export default FooterMobile
