import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="container ">
        <section className="vh-60 ">
          <div className="container py-5 h-100 p-0">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-5 text-uppercase mb-3">
                        Register
                      </h2>
                      <form>
                        <div className="row">
                          <div className="col">
                            <div className="form-floating form-outline  mb-4">
                              <input
                                type="text"
                                name="fn"
                                className="form-control"
                                id="floatingInput"
                                placeholder=""
                              />
                              <label htmlFor="floatingInput">
                                <b style={{ color: "black" }}>First Name</b>
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-floating form-outline  mb-4">
                              <input
                                type="text"
                                name="ln"
                                className="form-control"
                                id="floatingInput"
                                placeholder=""
                              />
                              <label htmlFor="floatingInput">
                                <b style={{ color: "black" }}>Last Name</b>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-floating form-outline  mb-4">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">
                            <b style={{ color: "black" }}>Email</b>
                          </label>
                        </div>
                        <div className="form-floating form-outline  mb-4">
                          <input
                            type="number"
                            name="pn"
                            className="form-control"
                            id="floatingInput"
                            placeholder=""
                          />
                          <label htmlFor="floatingInput">
                            <b style={{ color: "black" }}>Phone Number</b>
                          </label>
                        </div>
                        <div className="form-floating form-outline  mb-4">
                          <input
                            type="password"
                            name="pass"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                          />
                          <label htmlFor="floatingPassword">
                            <b style={{ color: "black" }}>Password</b>
                          </label>
                        </div>

                        <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          Register
                        </button>
                      </form>
                      <div>
                        <p className="mt-5">
                          <Link to="/login" className="text-white-50 fw-bold">
                            Login
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
