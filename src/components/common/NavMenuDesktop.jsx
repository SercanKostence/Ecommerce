import React, { Component, Fragment } from 'react';
import Logo from '../../assets/images/easyshop.png';
import { Link } from 'react-router-dom';

class NavMenuDesktop extends Component {
     render() {
          return (
               <Fragment>
                    <div className="fixed top-0 left-0 w-full shadow-sm bg-white z-50 mb-20">
                         <nav className="flex items-center p-4 text-base font-normal bg-white shadow-md">
                              <div className="flex w-full items-center justify-between lg:justify-start">
                                   {/* Logo */}
                                   <div className="flex-none">
                                        <Link to="/">
                                             <img src={Logo} alt="Logo" className="w-[180px] h-[40px]" />
                                        </Link>
                                   </div>

                                   {/* Search and Actions */}
                                   <div className="flex flex-grow items-center justify-center space-x-4 mx-4">
                                        {/* Search Input and Button */}
                                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full max-w-xs lg:max-w-md">
                                             <input
                                                  type="text"
                                                  className="p-2 border-none outline-none text-sm lg:text-base w-full max-w-[400px] lg:max-w-[500px]"
                                                  placeholder="Search"
                                             />
                                             <button
                                                  type="button"
                                                  className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 text-sm lg:text-base"
                                             >
                                                  <i className="fa fa-search"></i>
                                             </button>
                                        </div>
                                   </div>

                                   {/* Notification, Mobile, Login, and Cart */}
                                   <div className="flex items-center space-x-4 lg:space-x-8 ml-auto">
                                        <Link to="/favourite" className="relative no-underline text-blue-900">
                                             <i className="fa fa-heart text-2xl lg:text-3xl"></i>
                                             <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                              3
                                             </span>
                                        </Link>

                                        {/* Notification Icon */}
                                        <Link to="/" className="relative no-underline">
                                             <i className="fa fa-bell text-2xl lg:text-3xl text-blue-900 mt-1"></i>
                                             <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                                  5
                                             </span>
                                        </Link>

                                        {/* Mobile Icon */}
                                        <a href="/" className="text-2xl lg:text-3xl text-blue-900">
                                             <i className="fa fa-mobile-alt"></i>
                                        </a>

                                        {/* Login Button */}
                                        <Link to="/login" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 text-sm lg:text-base no-underline">
                                             LOGIN
                                        </Link>

                                        {/* Cart Button */}
                                        <Link to='/cart' className="flex items-center space-x-2 bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-800 transition duration-300 text-sm lg:text-base no-underline">
                                             <i className="fa fa-shopping-cart"></i>
                                             <span>3 Items</span>
                                        </Link>
                                   </div>
                              </div>
                         </nav>
                    </div>
               </Fragment>
          );
     }
}

export default NavMenuDesktop;
