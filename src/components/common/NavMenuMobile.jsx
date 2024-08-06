import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../../assets/images/easyshop.png';
import { Link } from "react-router-dom";
import MegaMenu from '../home/MegaMenu';
import { FaHome } from 'react-icons/fa'; 

class NavMenuMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideNavOpen: false,
    };
    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  toggleSideNav() {
    this.setState(prevState => ({
      isSideNavOpen: !prevState.isSideNavOpen,
    }));
  }

  render() {
    const { isSideNavOpen } = this.state;
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Container fluid={true} className="fixed-top shadow-sm p-2 mb-0 bg-white">
            <Row>
              <Col lg={4} md={4} sm={12} xs={12} className="flex justify-between items-center">
                <button
                  className="bg-blue-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 hover:ring-blue-900"
                  onClick={this.toggleSideNav}>
                  <i className="fa fa-bars"></i>
                </button>
                <Link to="/">
                  <img className="nav-logo" src={Logo} alt="Logo" />
                </Link>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 hover:ring-red-600"
                >
                  <i className="fa fa-shopping-cart"></i> 3 Items
                </button>
              </Col>
            </Row>
          </Container>

          <div className={`fixed top-0 left-0 z-50 overflow-x-hidden transition-all duration-100 bg-white shadow-lg ${isSideNavOpen ? 'w-60 mt-14 h-full pt-10' : 'w-0 h-full'}`}>
            <div className="flex flex-col w-full h-full">
              <Link to="/" className={`flex items-center justify-start bg-gray-200 text-gray-700 p-2 border border-gray-300 text-sm text-left font-semibold transition-all duration-300 ease-out shadow-sm hover:bg-blue-900 hover:text-white no-underline`}>
                <FaHome className="w-5 h-5 text-gray-500 mr-2 " />
                Home
              </Link>
              <hr className="w-full mx-auto my-2" />
              <div className="list-group w-full">
                <MegaMenu />
              </div>
            </div>
          </div>

          <div
            className={`fixed inset-0 z-40 cursor-pointer bg-black bg-opacity-50 transition-all duration-100 ${isSideNavOpen ? 'block' : 'hidden'}`}
            onClick={this.toggleSideNav}
          ></div>
        </div>
      </Fragment>
    );
  }
}

export default NavMenuMobile;
