import React, { Component, Fragment } from 'react';
import HomeSlider from './HomeSlider';
import MegaMenu from './MegaMenu';

export class HomeTop extends Component {
  render() {
    return (
      <Fragment>
        <div className="flex flex-col md:flex-row mt-32">
          <div className="md:w-1/5 w-full hidden md:block">
            <MegaMenu />
          </div>
          <div className="md:w-4/5 w-full">
            <HomeSlider />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomeTop;
