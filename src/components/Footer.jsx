import React from "react";
import { Container } from "react-bootstrap";

let Footer = () => {
  return (
    <>
      <Container fluid className="px-4">
        <footer className="d-flex flex-wrap align-items-center py-3 border-top">
          <div className="col-md-6 d-flex align-items-center">
            <span className="text-muted">&copy; 2023, InTech Solusions</span>
          </div>
          <ul className="nav col-md-6 d-flex justify-content-end list-unstyled ms-auto">
            <li className="fs-4">
              <a
                className="text-muted"
                href="https://www.facebook.com/intechsolusions/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="ms-2 fs-4">
              <a
                className="text-muted"
                href="https://api.whatsapp.com/send?phone=923342840591"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
            <li className="ms-2 fs-4">
              <a
                className="text-muted"
                href="https://twitter.com/intechsolusions"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
