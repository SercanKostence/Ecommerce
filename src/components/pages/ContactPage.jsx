import React, { Component, Fragment } from 'react'
import Contact from '../common/Contact'
import FooterDesktop from '../common/FooterDesktop'
import FooterMobile from '../common/FooterMobile'
import NavMenuDesktop from '../common/NavMenuDesktop'
import NavMenuMobile from '../common/NavMenuMobile'


class ContactPage extends Component {
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

                <Contact />

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

export default ContactPage