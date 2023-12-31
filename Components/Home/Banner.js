import React from "react";
import Navbar from "../Global/Navbar";

const Banner = () => {
  return (
    <div className="custom-border banner-bg">
      <div className="container py-3">
        <Navbar />
        <div className="text-center py-4 text-white">
          <div className="title py-4">
            We offer Medical <br /> Health Services for all Ages
          </div>
          <div className="pt-5 pb-5">
            <button className="btn secondary-btn my-md-0 my-2 ms-3" type="submit">
              Our Services
            </button>
            <button className="btn primary-btn  my-md-0 my-2 ms-3" type="submit">
              More Info
            </button>
          </div>
          <div className="pb-5"></div>
          <div className="pb-5"></div>
          <div className="pb-5"></div>
          <div className="pb-5"></div>
          <div className="pb-5"></div>
          <div className="pb-5"></div>
          <div className="pb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
