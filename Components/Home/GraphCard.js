import React from "react";

const GraphCard = () => {
  return (
    <div className="graph-card p-1 my-2">
      <div className="row">
        <div className="col-md-4">
          <img
            className="w-100 rounded-3 m-2 graph-icon"
            src="/graph-icon1.png"
            alt="ICON"
          />
        </div>
        <div className="col-md-8">
          <div className="p-2">
            <h5 className="paragraph-color">Advance Care</h5>
            <p className="primary-color text-decoration-underline">
              LEARN MORE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
