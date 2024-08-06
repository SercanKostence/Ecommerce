import React, { Component, Fragment } from 'react';

export class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div className="container mx-auto mt-24 p-4">
          <div className="bg-white shadow-sm rounded-lg p-4">
            <div className="flex flex-col lg:flex-row">
              {/* Form Section */}
              <div className="flex flex-col lg:w-1/2 lg:pr-4">
                <h4 className="text-2xl font-semibold mb-4">CONTACT WITH US</h4>
                <h6 className="text-lg mb-4">Please Contact With Us</h6>
                <form className="space-y-4">
                  <input
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    type="text"
                    placeholder="Enter Mobile Number"
                  />
                  <input
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    type="email"
                    placeholder="Enter Email"
                  />
                  <input
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    type="text"
                    placeholder="Enter Your Message"
                  />
                  <button className="w-full py-2 bg-blue-900 text-white rounded font-light">
                    Send
                  </button>
                </form>
              </div>
              
              <div className="lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
                <p className="text-lg mb-4">
                  1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
                  <br />
                  Email: Support@easylearningbd.com
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1102477064!2d-74.10054944459704!3d40.70681480276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1627241390779!5m2!1sen!2sbd"
                  width="100%"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Contact;
