import React from "react";
import { Link } from "react-router-dom";
import "../css/Slider.css";
import Slider from "./Slider";
function Home() {
  return (
    <>
      {/* <div className="container-fluid d-flex flex-column justify-content-center mt-0 px-2 py-5 my-3 text-center hero-wrapper">
        <h1 className="display-3 fw-bold">InTech Solusions</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 fs-6">
            InTech Solusions provides you a complete range of database
            management software with its unmatched combination of flexibility,
            usability, and productivity.
          </p>
        </div>
      </div> */}
      <Slider/>

      <h3
        data-aos="fade-right"
        data-aos-duration="1000"
        class="text-center my-5"
      >
        Product highlights
      </h3>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        class="container-fluid px-5"
      >
        <div class="row row-cols-1 row-colsm-2 row-cols-md-2 row-cols-lg-4 g-4 d-flex justify-content-center">
          <div class="col">
            <div class="card h-100">
              <div class="card-body text-center">
                <a
                  class="text-decoration-none"
                  href="./products/trademanagementerp.html"
                >
                  <i class="fa-solid fa-trademark w-100 fs-3 text-primary mb-2"></i>
                  <h5 class="card-title text-secondary">
                    Trade Management ERP
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body text-center">
                <a
                  class="text-decoration-none"
                  href="./products/schoolmanagementerp.html"
                >
                  <i class="fa-solid fa-school w-100 fs-3 text-primary mb-2"></i>
                  <h5 class="card-title text-secondary">
                    School Management ERP
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body text-center">
                <a
                  class="text-decoration-none"
                  href="./products/petrolpumpmanagement.html"
                >
                  <i class="fa-solid fa-gas-pump w-100 fs-3 text-primary mb-2"></i>
                  <h5 class="card-title text-secondary">
                    Petrol Pump Management
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body text-center">
                <a
                  class="text-decoration-none"
                  href="./products/constructionmanagement.html"
                >
                  <i class="fa-solid fa-building w-100 fs-3 text-primary mb-2"></i>
                  <h5 class="card-title text-secondary">
                    Construction Management
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container my-3 text-center">
          <Link to="/Products">All Products</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
