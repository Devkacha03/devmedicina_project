import React from "react";
import { Link } from "react-router-dom";
import "./navbarcss.css";

//import Demo from './demo/Demo';
import * as lucideReact from "lucide-react";
const Navbar = (props) => {
  const mycss = {
    color: "white",
  };
  return (
    <>
      {/* second navbar */}
      <div
        className="container-fluid p-1 "
        style={{ backgroundColor: "green" }}
      >
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary bg-black"
          style={{ borderRadius: "20px" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/Login">
              <h4 style={mycss}>
                <label style={{ fontFamily: "cursive" }}>
                  
                  <b>devmedicina</b>
                  
                </label>
              </h4>
            </Link>
            <button
              className="navbar-toggler bg-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Home"
                  >
                    <b style={mycss}>Home</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/About"
                  >
                    <b style={mycss}>About</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Medicine"
                  >
                    <b style={mycss}>Medicine</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Contact"
                  >
                    <b style={mycss}>Contact</b>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Login"
                  >
                    <b style={mycss}>SignIn</b>
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Admin"
                  >
                    <b style={mycss}>Admin</b>
                  </Link>
                </li> */}
              </ul>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link to="/shopping" className="nav-link">
                    <lucideReact.BaggageClaim color="#24f5dc" />

                    <sup style={{ color: "#25d322", fontSize: "15px" }}>
                      <b> {props.count} </b>
                    </sup>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/Profile" className="nav-link">
                    <lucideReact.UserCircle color="#24f5dc" />
                  </Link>
                </li> */}

                <li className="nav-item">
                  {/* <a className="nav-link" href="#"> */}
                  <Link to="https://www.google.com">
                  <button
                    className="btn btn-outline-danger ms-2"
                    style={{ borderRadius: "20px" }}
                  >
                    <b>Logout</b>
                  </button>
                  </Link>
                  {/* </a> */}
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
