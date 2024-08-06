import React, { Component } from 'react'
import { Fragment } from 'react'
import FeaturedProducts from '../home/FeaturedProducts'
import Categories from '../home/Categories'
import Collection from '../home/Collection'
import NewArrival from '../home/NewArrival'
import HomeTop from '../home/HomeTop'
import NavMenuDesktop from '../common/NavMenuDesktop'
import NavMenuMobile from '../common/NavMenuMobile'
import FooterDesktop from '../common/FooterDesktop'
import FooterMobile from '../common/FooterMobile'


export class HomePage extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
         <div className="hidden md:block">
        <NavMenuDesktop />
      </div>
      <div className="block md:hidden">
        <NavMenuMobile />
      </div>
        <HomeTop />
        <FeaturedProducts />
        <NewArrival />
        <Collection />
        <Categories />
      
         <div className="hidden md:block">
        <FooterDesktop />
      </div>
      <div className="block md:hidden">
        <FooterMobile />
      </div>
      </Fragment>
    )
  }
}

export default HomePage
