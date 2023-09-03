import React from "react";
import Department from "./Department";

const Departments = () => {
  return (
    <div className="py-5 container">
      <div className="text-center py-5">
        <h1 className="my-3 departments-heading font-nunito">2,00,000+</h1>
        <h2 className="departments-des">
          Our Departments we provide sit amete <br /> commodo dui convallis
        </h2>
      </div>
      <div className="row pt-5 pb-3 mb-3 mt-4">
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
      <div className="row pb-5 mb-4 pt-3 mt-3">
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
