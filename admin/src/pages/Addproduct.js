import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const Addproduct = () => {
  return (
    <>
      <div className="container mt-3">
        <h3 className="mt-5 mb-5">
          <Link to="/Product">
            <ArrowLeft size={36} />
          </Link>
        </h3>
        <h1 className="mb-5">Add Prodcut</h1>
        <form>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="formFileLg" className="form-label">
                  <b>Large file input example</b>
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-floating mt-4">
                <input type="text" placeholder=" " className="form-control" />
                <label>
                  <b>First Name</b>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mt-3">
                <input type="text" placeholder=" " className="form-control" />
                <label>
                  <b>Price</b>
                </label>
              </div>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary mt-4">
                Add Product
              </button>
              <button type="reset" className="btn btn-danger mt-4 ms-3">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addproduct;
