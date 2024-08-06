import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import AppRoute from './route/AppRoute.js'; 

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppRoute />
      </Fragment>
    );
  }
}

export default App;
