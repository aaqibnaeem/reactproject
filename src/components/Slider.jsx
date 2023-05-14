import Carousel from "react-bootstrap/Carousel";
import slideOne from "../assets/images/slider-img-1.jpg";
import slideTwo from "../assets/images/slider-img-2.jpg";
import slideThree from "../assets/images/slider-img-3.jpg";

function Slider() {
  return (
    <Carousel variant="light" fade style={{ maxHeight: "70vh" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            maxHeight: "70vh",
            objectFit: "cover",
            backgroundPosition: "bottom",
          }}
          src={slideOne}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Accounts software</h2>
          <p>Powered by InTech Solusions.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            maxHeight: "70vh",
            objectFit: "cover",
            backgroundPosition: "bottom",
          }}
          src={slideTwo}
          alt="Second slide"
        />

        <Carousel.Caption className="carousel-caption">
          <h2 className="carousel-heading">School software</h2>
          <p className="carousel-para">Powered by InTech Solusions.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            maxHeight: "70vh",
            objectFit: "cover",
            backgroundPosition: "bottom",
          }}
          src={slideThree}
          alt="Third slide"
        />

        <Carousel.Caption className="carousel-caption">
          <h2 className="carousel-heading">Construction software</h2>
          <p className="carousel-para">Powered by InTech Solusions</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
