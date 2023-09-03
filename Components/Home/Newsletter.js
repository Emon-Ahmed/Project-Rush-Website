import React from "react";

const Newsletter = () => {
  return (
    <div className="container mt-5 pt-5 pb-4">
      <div className="row font-nunito newsletter p-5">
        <div className="col-md-9">
          <div>
            <h1 className="newsletter-title pb-2 pt-3">
              Subscribe Our Newsletter
            </h1>
            <p className="newsletter-des text-white py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              provident nobis qui adipisci. Laudantium odit optio nesciunt,
              eligendi eum, excepturi vitae voluptatem magnam suscipit dolores
              commodi
            </p>
            <div className="pb-4">
              <div className="input-group w-50">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email Address"
                  aria-label="Enter Your Email Address"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn text-white newsletter-btn py-2 px-3"
                  type="button"
                  id="button-addon2"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <img
            className="w-100 newsletter-img"
            src="/newsletter-banner.png"
            alt="NEWSLETTER"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
