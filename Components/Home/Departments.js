import React from "react";
import Department from "./Department";

const Departments = () => {
  return (
    <div className="pt-3 pb-0 pb-md-5 container">
      <div className="text-center pb-5 pt-4">
        <h1 className="mt-2 departments-heading font-nunito">2,00,000+</h1>
        <h2 className="departments-des">
          Our Departments we provide sit amete <br /> commodo dui convallis
        </h2>
      </div>
      <div className="row pt-0 pt-md-5 pb-0 mb-0 pb-md-3 mb-md-3 mt-4">
        <div className="col-md-4">
          <Department />
        </div>
        <div className="col-md-4">
          <Department />
        </div>
        <div className="col-md-4">
          <Department />
        </div>
      </div>
      <div className="row pb-2 mb-2 pb-md-5 mb-md-4 pt-0 mt-0 pt-md-3 mt-md-3">
        <div className="col-md-4">
          <Department />
        </div>
        <div className="col-md-4">
          <Department />
        </div>
        <div className="col-md-4">
          <Department />
        </div>
      </div>
    </div>
  );
};

export default Departments;
