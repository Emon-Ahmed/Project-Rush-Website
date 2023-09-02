import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div className="container">
      <div className="service-section p-4 mb-5">
        <div className="row g-0">
          <div className="col-md-6">
            <Service />
          </div>
          <div className="col-md-6">
            <Service />
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-6">
            <Service />
          </div>
          <div className="col-md-6">
            <Service />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
