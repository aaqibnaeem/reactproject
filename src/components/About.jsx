import React from "react";
import MyNav from "./MyNav";
import { redirect } from "react-router-dom";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

let About = () => {
  return (
    <>
      <MyNav />
      <div
        className="container-fluid about-heading bg-light shadow"
        style={{ height: 300, display: "flex", alignItems: "center" }}
      >
        <Container>
          <h1>About Us</h1>
        </Container>
      </div>
      <Container className="my-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>
              <span className="fw-bold">InTech Solusions </span>
              has experience in the development, testing, and implementation of
              database software. We are writing some qualities to assure you to
              provide better services to the next lines.
              <ul>
                <li>
                  "Well Defined Quality-Process" makes a strong software
                  structure.
                </li>
                <li>"Method" makes software operable for the operator.</li>
                <li>
                  "Strong Analyses" make the smooth futuristic approach for the
                  business.
                </li>
                <li>
                  "Problems-Solving Skill" drive your business to the next
                  level.
                </li>
              </ul>
              <p>
                These qualities provide better solutions for the computerization
                of manual transaction processes.
                <b>InTech Solusions </b>provides you a complete range of
                database management software with its unmatched combination of
                flexibility, usability, and productivity. We are a provider of
                Enterprise Resource Planning (ERP) whether it is customized or
                ready-made. Managing controls with administrative powers helping
                hand of business life.
              </p>
              <ul>
                <li>Retail Business</li>
                <li>Wholesale Business</li>
                <li>Institutions (School, Coaching, College, University)</li>
                <li>Hospital (Clinic, General Hospitals, Specialist Clinic)</li>
                <li>Restaurant / Hotel</li>
                <li>
                  Publishing Industry ( Traditional Print Media / Printing )
                  <br />
                </li>
                <li>Goods Transportation / Luggage Industry</li>
                <li>Garments Industry (CMT Process)</li>
                <li>Textile Industry</li>
                <li>
                  Petrol Pump / Filling Stations
                  <br />
                </li>
                <li>Auto Industry (Motorcycles)</li>
              </ul>
            </p>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default About;
