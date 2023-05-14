import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import "react-toastify/dist/ReactToastify.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
let App = () => {
  useEffect(() => {
    document.body.style.zoom = "90%";
  }, []);
  return (
    <>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
