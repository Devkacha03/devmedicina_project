import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle, ArrowLeft, ArrowUpFromLine } from "lucide-react";
const Product = () => {
  return (
    <>
      <div className="container">
        <h3 className="mt-4">
          <Link to="/Customers" style={{ color: "black" }}>
            <ArrowLeft size={36} />
          </Link>
          <Link to="/Dashboard" style={{ color: "black" }}>
            <ArrowUpFromLine size={36} />
          </Link>
        </h3>
        <h1 className="mt-4 mb-5">Manage Prodcut / Add product</h1>
        <div className="row">
          <div className="col">
            <Link
              to="/Managepro"
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <div className="card">
                <div
                  className="card-header alert alert-primary mt-3"
                  role="alert"
                >
                  <h4>Manage Prodcut </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link
              to="/Addproduct"
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <div className="card">
                <div
                  className="card-header alert alert-primary mt-3"
                  role="alert"
                >
                  <h4>
                    <PlusCircle color="#ee1111" />
                    <label className="ms-2"> Add Product</label>
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

export default Product;
