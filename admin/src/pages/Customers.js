import React from "react";
import { Link } from "react-router-dom";
import {
  PlusCircle,
  ArrowLeft,
  // ArrowRight,
  ArrowUpFromLine,
} from "lucide-react";

const Customers = () => {
  return (
    <>
      <div className="container">
        <h3 className="mt-3">
          <Link to="/Dashboard" style={{ color: "black" }}>
            <ArrowLeft size={36} />
          </Link>
          <Link to="/Dashboard" style={{ color: "black" }}>
            <ArrowUpFromLine size={36} />
          </Link>
          {/* <Link to="/Product" style={{ color: "black" }}>
            <ArrowRight size={36} />
          </Link> */}
        </h3>
        <h1 className="mt-3 mb-5">Manage Customers / Add Customers</h1>
        <div className="row">
          <div className="col">
            <Link
              to="/Managecus"
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <div className="card">
                <div
                  className="card-header alert alert-primary mt-3"
                  role="alert"
                >
                  <h4>Manage Customers</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link
              to="/Addcustomer"
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <div className="card">
                <div
                  className="card-header alert alert-primary mt-3"
                  role="alert"
                >
                  <h4>
                    <PlusCircle color="#ee1111" />
                    <label className="ms-2"> Add Customers</label>
                  </h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
