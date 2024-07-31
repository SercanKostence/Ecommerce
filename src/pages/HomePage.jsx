import React, { Component } from 'react'
import { Fragment } from 'react'
import FeaturedProducts from '../home/FeaturedProducts'
import Categories from '../home/Categories'

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <FeaturedProducts/>
        <Categories/>
      </Fragment>
    )
  }
}

export default HomePage
