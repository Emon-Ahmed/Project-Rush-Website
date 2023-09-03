import React from "react";

const About = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <div className="px-2">
            <h1 className="mt-4 font-nunito paragraph-color fw-bold">
              Why do Patients <br /> Say About Us
            </h1>
            <p className="paragraph-color py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ab{" "}
              <br /> eaque perferendis optio quaerat nostr quaerat nostrum.{" "}
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ab{" "}
              <br /> eaque perferendis optio quaerat nostr quaerat nostrum.{" "}
              <br />
            </p>
            <button className="btn primary-btn" type="submit">
              Learn More
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="graph-card w-75 p-4 m-2  float-start">
            <div className="row justify-content-between">
              <div className="col-md-8">
                <div className="p-2">
                  <h5 className="primary-color">Advance Care</h5>
                  <p className="paragraph-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="">
                  <img
                    className="w-75 rounded-3 graph-icon float-end"
                    src="/graph-icon1.png"
                    alt="ICON"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="graph-card w-75 p-4 m-2 float-end">
            <div className="row justify-content-between">
              <div className="col-md-8">
                <div className="p-2">
                  <h5 className="primary-color">Advance Care</h5>
                  <p className="paragraph-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="">
                  <img
                    className="w-75 rounded-3 graph-icon float-end"
                    src="/graph-icon1.png"
                    alt="ICON"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="graph-card w-75 p-4 m-2 float-start">
            <div className="row justify-content-between">
              <div className="col-md-8">
                <div className="p-2">
                  <h5 className="primary-color">Advance Care</h5>
                  <p className="paragraph-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="">
                  <img
                    className="w-75 rounded-3 graph-icon float-end"
                    src="/graph-icon1.png"
                    alt="ICON"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
