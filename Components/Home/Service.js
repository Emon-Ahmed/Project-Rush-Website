import React from "react";

const Service = () => {
  return (
    <div className="service m-3 p-5">
      <div className="row">
        <div className="col-md-3">
          <div>
            <img width="110%" src="/service/service-icon1.png" alt="" />
          </div>
        </div>
        <div className="col-md-9">
          <div className="ps-3">
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
