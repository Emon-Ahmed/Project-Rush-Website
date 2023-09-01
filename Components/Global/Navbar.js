import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img width="100px" src="/Rush_logo.png" alt="" srcSet="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <Link
              href={"/"}
              className="nav-item text-white text-decoration-none ms-3"
            >
              <span className="nav-link active" aria-current="page" href="#">
                Home
              </span>
            </Link>

            <Link
              href={"/"}
              className="nav-item text-white text-decoration-none ms-3"
            >
              <span className="nav-link" aria-current="page" href="#">
                Services
              </span>
            </Link>
            <Link
              href={"/"}
              className="nav-item text-white text-decoration-none ms-3"
            >
              <span className="nav-link" aria-current="page" href="#">
                Contacts
              </span>
            </Link>
          </ul>
          <button className="btn primary-btn ms-3" type="submit">
            Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;