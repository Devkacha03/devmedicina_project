import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const About = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mt-5 mb-3"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img1.png" className=" w-100" alt="1" />
          </div>
          <div className="carousel-item">
            <img src="img2.png" className=" w-100" alt="2" />
          </div>
          {/* <div className="carousel-item">
            <img src=".png" className=" w-100" alt="3" />
          </div> */}
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <ArrowLeftCircle color="#160404" />
          {/* <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden ">Previous</span> */}
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <ArrowRightCircle color="#160404" />
          {/* <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span> */}
        </button>
      </div>

      <div className="container mt-5">
        <h3>Browse medicines & health products</h3>
        <h5 className="mt-4 mb-4">Health condition</h5>
        <div className="row">
          <div className="col-sm">
            <div className="card mt-3 mb-4" style={{ width: "24rem" }}>
              <Link to="/Medicine">
                <img src="skin.png" alt="4"></img>
              </Link>
            </div>
          </div>
          <div className="col-sm">
            <div className="card mt-3 mb-4" style={{ width: "24rem" }}>
              <Link to="/Medicine">
                <img src="weight.png" alt="4" />
              </Link>
            </div>
          </div>
          <div className="col-sm">
            <div className="card mt-3 mb-4" style={{ width: "24rem" }}>
              <Link to="/Medicine">
                <img src="pain.png" alt="5" />
              </Link>
            </div>
          </div>
        </div>
        <h5 className="mt-5 mb-4">Categories</h5>
        <div className="row">
          <div className="col">
            <div className="card mt-3 mb-4" style={{ width: "24rem" }}>
              <Link to="/Medicine">
                <img src="babycare.png" alt="6" />
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card mt-3 mb-4" style={{ width: "24rem" }}>
              <Link to="/Medicine">
                <img src="fitness.png" alt="7" />
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card mt-3 mb-4" style={{ width: "24rem" }}>
              <Link to="/Medicine">
                <img src="family.png" alt="8" />
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card mt-3 mb-4" style={{ width: "24rem" }}>
              <Link to="/Medicine">
                <img src="personalcare.png" alt="9" />
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card mt-3 mb-4" style={{ width: "24rem" }}>
              <Link to="/Medicine">
                <img src="healthcondition.png" alt="10" />
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card mt-3 mb-4" style={{ width: "24rem" }}>
              <Link to="/Medicine">
                <img src="device.png" alt="11" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------ */}
      {/* image carousel */}
      {/* <div className="container">
          <input type="radio" name="position" defaultChecked />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <main id="carousel">
            <div className="item"></div>
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <main></main>
          </main>
        </div>
      </div> */}
    </>
  );
};

export default About;
