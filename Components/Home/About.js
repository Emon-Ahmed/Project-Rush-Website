import React from "react";

const About = () => {
  return (
    <div className="container my-0 py-0 my-md-4 py-md-5">
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <div className="px-2">
            <h1 className="mt-4 font-nunito about-md-text paragraph-color fw-bold">
              Why do Patients <br /> Say About Us
            </h1>
            <p className="paragraph-color about-md-text py-0 py-md-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ab{" "}
              <br /> eaque perferendis optio quaerat nostr quaerat nostrum.{" "}
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ab{" "}
              <br /> eaque perferendis optio quaerat nostr quaerat nostrum.{" "}
              <br />
            </p>
            <div className="text-res-center pb-4 pb-md-0">
              <button className="btn primary-btn" type="submit">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="graph-card about-width w-75 p-4 mx-0 my-2 float-md-start">
            <div className="row justify-content-between">
              <div className="col-8">
                <div className="p-2">
                  <h5 className="primary-color">Advance Care</h5>
                  <p className="paragraph-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-4">
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
          <div className="graph-card about-width w-75 p-4 mx-0 my-2 float-md-end">
            <div className="row justify-content-between">
              <div className="col-8">
                <div className="p-2">
                  <h5 className="primary-color">Advance Care</h5>
                  <p className="paragraph-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-4">
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
          <div className="graph-card about-width w-75 p-4 mx-0 my-2 float-md-start">
            <div className="row justify-content-between">
              <div className="col-8">
                <div className="p-2">
                  <h5 className="primary-color">Advance Care</h5>
                  <p className="paragraph-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-4">
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
