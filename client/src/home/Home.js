import React from "react";
// import med from "./medicine1.jpg";
import { Link } from "react-router-dom";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

import "./home.css";

const Home = () => {
  return (
    <>
      <div
        className="intro container-fluid mb-5 mt-5 p-5"
        style={{ borderRadius: "20px" }}
      >
        <h1>
          <label style={{ color: "orange" }}>devm</label>edi
          <label style={{ color: "green" }}>cina</label>
        </h1>

        <Link to="/About">
          <button>Learn More</button>
        </Link>
      </div>

      <div className="container-xl">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval={0}
              style={{ margin: "30px  auto 60px", padding: "0 80px" }}
            >
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              {/* Wrapper for carousel items */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div
                          className="card mt-2"
                          style={{ width: "18rem", borderRadius: "20px" }}
                        >
                          <img
                            className="card-img-top "
                            src="data:image/jpeg;base64,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"
                            alt="cold, cough or  fever"
                            style={{
                              height: "180px",
                              borderTopLeftRadius: "20px",
                              borderTopRightRadius: "20px",
                            }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">Cold, Cough or Fever</h5>

                            <Link to="Contact" className="card-link">
                              Shop Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div
                          className="card mt-2"
                          style={{ width: "18rem", borderRadius: "20px" }}
                        >
                          <img
                            src="data:image/jpeg;base64,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"
                            className="card-img"
                            alt="child not feeling well"
                            style={{
                              height: "180px",
                              borderTopLeftRadius: "20px",
                              borderTopRightRadius: "20px",
                            }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              Child Not Feelign Well
                            </h5>

                            <Link to="#" className="card-link">
                              Shop Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div
                          className="card mt-2"
                          style={{ width: "18rem", borderRadius: "20px" }}
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Hy8UO-QrkbPj4cWnjXCklgS4FUiqF8tR8g&usqp=CAU"
                            className="card-img-top"
                            alt="Depression or anxiety"
                            style={{
                              height: "180px",
                              borderTopLeftRadius: "20px",
                              borderTopRightRadius: "20px",
                            }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              Depression or anxiety
                            </h5>

                            <Link to="#" className="card-link">
                              Shop Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div
                          className="card mt-2"
                          style={{ width: "18rem", borderRadius: "20px" }}
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VcjseWi-HECcHup_nXg67FrxaXDbvmi0Mg&usqp=CAU"
                            className="card-img-top"
                            alt="pimple or skin issues"
                            style={{
                              borderTopLeftRadius: "20px",
                              borderTopRightRadius: "20px",
                            }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              Acne, Pimple or Skin issues
                            </h5>

                            <Link to="#" className="card-link">
                              Shop Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Carousel controls */}
              <a
                className="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                {/* <i className="fa fa-angle-left"></i> */}
                <ArrowLeftCircle color="#160404" />
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                {/* <i className="fa fa-angle-right"></i> */}
                <ArrowRightCircle color="#160404" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------ */}

      <div className="container mb-5 p-5 mt-5">
        <div className="row">
          <div className="col">
            <h1>Read top articles from health experts</h1>
            <h6>
              Health articles that keep you informed about good health practices
              and achieve your goals.
            </h6>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXgwORGXsGBdIHwHFrdMrUnhd0Ibp_TLy3w&usqp=CAU"
                className="card-img-top"
                alt="corona"
              />
              <div className="card-body">
                <h5 className="card-subtitle">CORONAVIRUS</h5>
                <h6 className="card-text mt-3">
                  12 Coronavirus Myths And Facts That You Shoud be Awer Of
                </h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                alt="corona"
                style={{ height: "167px" }}
              />
              <div className="card-body">
                <h6 className="card-subtitle">VITAMINS AND SUPPLEMENTS</h6>
                <h6 className="card-text mt-3">
                  12 Coronavirus Myths And Facts That You Shoud be Awer Of
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
