import React from "react";
import GraphCard from "./GraphCard";

const Graph = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="px-2">
            <img width="100%" src="/service-statistics-graph.png" alt="" />
          </div>
        </div>
        <div className="col-md-7">
          <div className="px-2">
            <h1 className="mt-4 font-nunito graph-md-head paragraph-color fw-bold">
              Why You Should Choose <br /> Our Health Services
            </h1>
            <p className="paragraph-color graph-md-p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ab{" "}
              <br /> eaque perferendis optio quaerat nostr quaerat nostrum.
            </p>
          </div>
          <div className="mx-2">
            <div className="row ">
              <div className="col-6 col-md-6">
                <GraphCard />
              </div>
              <div className="col-6 col-md-6">
                <GraphCard />
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-6">
                <GraphCard />
              </div>
              <div className="col-6 col-md-6">
                <GraphCard />
              </div>
            </div>
          </div>
          <div className="text-res-center">
            <button className="btn primary-btn mx-2 my-4" type="submit">
              Make Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
