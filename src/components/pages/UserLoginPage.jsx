import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../common/NavMenuDesktop'
import NavMenuMobile from '../common/NavMenuMobile'
import FooterDesktop from '../common/FooterDesktop'
import FooterMobile from '../common/FooterMobile'
import UserLogin from '../common/UserLogin'

export class UserLoginPage extends Component {
  componentDidMount() {
    window.scroll(0, 0)
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

        <UserLogin />

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

export default UserLoginPage
