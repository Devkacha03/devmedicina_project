import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const Dahsboard = () => {
  return (
    <>
      <div
        className="container mt-3 p-3 "
        style={{ backgroundColor: "	#f8f8ff", borderRadius: "20px" }}
      >
        <h3 className="mt-3 mb-5">
          <Link to="/Customers" style={{ color: "black" }}>
            <ArrowRight size={36} />
          </Link>
        </h3>
        <h1>Admin Dahsboard</h1>
        {/* First Row */}
        <div className="row mt-5">
          <div className="col">
            <Link
              to="/Customers"
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <div className="card">
                <div className="card-header alert alert-primary" role="alert">
                  <h4> Customers</h4>
                </div>
                {/* <div
                  className="card-body text-bg-light alert alert-light"
                  role="alert"
                >
                  <h5>100</h5>
                </div> */}
              </div>
            </Link>
          </div>
        </div>
        {/* second row */}
        {/* <div className="row mt-5">
          <div className="col">
            <Link
              to="/Product"
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <div className="card">
                <div className="card-header alert alert-primary" role="alert">
                  <h4>Total Prodcut</h4>
                </div>
                <div
                  className="card-body text-bg-light alert alert-light"
                  role="alert"
                >
                  <h5>100</h5>
                </div>
              </div>
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default Dahsboard;
