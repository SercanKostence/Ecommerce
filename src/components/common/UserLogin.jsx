import React, { Component, Fragment } from 'react';
import Login from '../../assets/images/login.png';

class UserLogin extends Component {
  render() {
    return (
      <Fragment>
        <div className="container mx-auto p-4 mt-24">
          <div className="flex flex-col shadow-sm bg-white mt-2">
            <div className="flex flex-row text-center">
              <div className="flex justify-center items-center w-full lg:w-1/3">
                <form className="mt-16 mb-16 w-11/12 max-w-sm p-4">
                  <h4 className="text-2xl font-semibold mb-16">USER SIGN IN</h4>
                  <h6 className="text-sm mt-0">Please Enter Your Mobile Number</h6>
                  <input
                    className="form-control m-2 border border-gray-300 rounded-lg px-4 py-2 shadow-md"
                    type="text"
                    placeholder="Enter Mobile Number"
                  />
                  <button className="font-light py-1 w-full m-2 bg-blue-900 text-white rounded-md shadow-md hover:bg-blue-500">Next</button>
                </form>
              </div>
              <div className="flex justify-end w-full lg:w-2/3">
                <img className="w-full h-auto object-cover" src={Login} alt="Login" />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UserLogin;
