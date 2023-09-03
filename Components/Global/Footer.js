import React from "react";

const Footer = () => {
  return (
    <div className="footer-bg py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3 paragraph-color ">
            <div>
              <img className="w-50" src="/Rush_logo.png" alt="LOGO" />
              <p>Privacy Policy</p>
              <p>
                Copyright @Rush 2023.
                <br />
                All right Reserved.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-3">
                <div>
                  <h5 className="paragraph-color fw-bold my-4">Home</h5>
                  <p className="paragraph-color">Home</p>
                  <p className="paragraph-color">About Us</p>
                  <p className="paragraph-color">Our Process</p>
                  <p className="paragraph-color">Services</p>
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <h5 className="paragraph-color fw-bold my-4">Resources</h5>
                  <p className="paragraph-color">Watch a Demo</p>
                  <p className="paragraph-color">Status</p>
                  <p className="paragraph-color">Integrations</p>
                  <p className="paragraph-color">Android Apps</p>
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <h5 className="paragraph-color fw-bold my-4">Company</h5>
                  <p className="paragraph-color">Investors</p>
                  <p className="paragraph-color">Customers</p>
                  <p className="paragraph-color">Partners</p>
                  <p className="paragraph-color">Press & Blogs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h5 className="paragraph-color fw-bold my-4">Stay Connected</h5>
              <div>
                <p className="paragraph-color">Facebook</p>
                <p className="paragraph-color">Instagram</p>
                <p className="paragraph-color">Twitter</p>
                <p className="paragraph-color">YouTube</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
