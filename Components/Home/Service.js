import React from "react";

const Service = () => {
  return (
    <div className="service mx-0 my-2 m-md-3 p-2 p-md-5">
      <div className="row">
        <div className="col-lg-3">
          <div className="service-md-center">
            <img className="service-img" width="110%" src="/service/service-icon1.png" alt="" />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="ps-3 service-md-center">
            <h3 className="primary-color">Emergency Contact</h3>
            <p className="py-1 paragraph-color">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum{" "}
            </p>
            <button className="btn primary-sm-btn" type="submit">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
