import React, { Component, Fragment } from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from '../components/pages/HomePage';
import UserLoginPage from '../components/pages/UserLoginPage';
import ContactPage from '../components/pages/ContactPage';
import PrivacyPage from '../components/pages/PrivacyPage';
import PurchasePage from '../components/pages/PurchasePage';
import RefundPage from '../components/pages/RefundPage';
import ProductDetailsPage from '../components/pages/ProductDetailsPage';
import FavouritePage from '../components/pages/FavouritePage'
import CartPage from '../components/pages/CartPage';

class AppRoute extends Component {
     render() {
          return (
     <Fragment>
          <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/login" element={<UserLoginPage/>} />
  <Route path="/contact" element={<ContactPage/>} />
  <Route path="/purchase" element={<PurchasePage/>} />
  <Route path="/refund" element={<RefundPage/>} />
  <Route path="/privacy" element={<PrivacyPage/>} />
  <Route path="/favourite" element={<FavouritePage/>} />
  <Route path="/cart" element={<CartPage/>} />
  <Route path="/productdetails" element={<ProductDetailsPage />} />
</Routes>

     </Fragment>
          )
     }
}
export default AppRoute;