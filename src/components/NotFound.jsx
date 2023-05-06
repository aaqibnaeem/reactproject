import React from "react";
import MyNav from "./MyNav";
import Footer from "./Footer";

let NotFound = () => {
  return (
    <>
      <MyNav />

      <div
        className="container-fluid about-heading bg-light"
        style={{ height: 300, display: "flex", alignItems: "center" }}
      >
        <div className="container">
          <h1>404 - Not Found</h1>
        </div>
      </div>
      <div style={{ height: "300px" }}></div>
      <Footer/>
    </>
  );
};

export default NotFound;
