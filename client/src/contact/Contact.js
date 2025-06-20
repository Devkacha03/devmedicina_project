import React from "react";
import "./csscontact.css";
import { Link } from "react-router-dom";
import {
  MapPin,
  PhoneCall,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Github,
} from "lucide-react";

// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ArrowRight } from "react-bootstrap-icons";
const Contact = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div
          id="map-container-google-3"
          class="z-depth-1-half map-container-3"
          style={{ borderRadius: "10px" }}
        >
          <iframe
            src="https://maps.google.com/maps?q=warsaw&t=k&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen
          ></iframe>
        </div>
        <div className="container mt-5 mb-5 p-5">
          <div className="card bg-dark p-4" style={{ borderRadius: "20px" }}>
            <form>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">
                      <b>Text</b>
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">
                      <b>Email</b>
                    </label>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea2">
                      <b>Message</b>
                    </label>
                  </div>

                  <div className="d-grid gap-2">
                    <button className="btn btn-outline-primary   mt-3 ">
                      <b>
                        <h6>
                          <b>Submit</b>
                        </h6>
                      </b>
                    </button>
                    <button className="btn btn-outline-danger   mt-1 ">
                      <b>
                        <h6>
                          <b>Cancel</b>
                        </h6>
                      </b>
                    </button>
                  </div>
                </div>
                <div className="col ms-5 ">
                  <div className="location mt-2">
                    <Link className=" text-white">
                      <label>
                        <MapPin size={30} color="#1ce9ab" />

                        <b className="ms-4 ">Rajkot,Gujrat</b>
                      </label>
                    </Link>
                  </div>
                  <div className="phone mt-5">
                    <Link className=" text-white">
                      <label>
                        <PhoneCall size={30} color="#1ce9ab" />

                        <b className="ms-4">+91 7043510120</b>
                      </label>
                    </Link>
                  </div>
                  <div className="email mt-5">
                    <Link className=" text-white" to="https://mail.google.com">
                      <label>
                        <Mail size={30} color="#1ce9ab" />

                        <b className="ms-4">Rajkot,Gujrat</b>
                      </label>
                    </Link>
                  </div>
                  <hr
                    noshade
                    className="mt-5 "
                    style={{
                      background: "red",
                      height: "5px",
                      border: "none",
                    }}
                  />
                  <div className="links d-flex justify-content-center align-items-center mt-4">
                    <label>
                      <Link to="https://www.instagram.com/dev_kacha_03/">
                        <Instagram size={25} />
                      </Link>
                    </label>
                    <label className="ms-4">
                      <Link to="https://www.instagram.com/dev_kacha_03/">
                        <Facebook size={25} />
                      </Link>
                    </label>
                    <label className="ms-4">
                      <Link to="https://www.instagram.com/dev_kacha_03/">
                        <Linkedin size={25} />
                      </Link>
                    </label>
                    <label className="ms-4">
                      <Link to="https://github.com/devkacha03">
                        <Github size={25} />
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
