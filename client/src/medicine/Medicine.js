import React from "react";
// import medicineshopcard from "./Mediccineshopcard.json";
import "./medicinecard.css";
import { Link } from "react-router-dom";

const Medicine = ({ product, addToCart }) => {
  return (
    <>
      {/* <h1 className="mt-4 mb-5">All Medicine</h1> */}
      {/* <div className="flex">
        {product.map((productItem, productIndex) => {
          return (
            <div className="container">
              <div className="row">
                <div className="col">
                  <div>
                    <div
                      className="card"
                      style={{ width: "18rem", hover: "transform: scale()" }}
                    >
                      <div className="bg-image hover-zoom">
                        <img
                          className="card-img-top"
                          src={productItem.url}
                          alt="Card image cap"
                          style={{ height: "200px" }}
                        />
                      </div>
                      <div className="card-body">
                        <div className="card-title">
                          <h3>{productItem.pname}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
      <div className="container">
        <h1 className="mt-4 mb-5">All Medicine</h1>
        <div className="row">
          {product.map((productItem, productIndex) => (
            <div key={productIndex} className="col-md-3 mb-4">
              <div className="card">
                <div className="bg-image hover-zoom">
                  <img
                    className="card-img-top"
                    src={productItem.url}
                    alt="Card image cap"
                    style={{ height: "200px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{productItem.pname}</h5>
                  <p className="card-text">
                    <b>Rs </b>
                    <b>{productItem.price}</b>
                    <b> /-</b>
                  </p>
                  <button
                    onClick={() => addToCart(productItem)}
                    class="btn btn-outline-primary "
                  >
                    <b>add to cart</b>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Medicine;
