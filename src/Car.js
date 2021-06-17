import React from "react";
// import "./Car.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import pic1 from "./images/pic11.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
function Car() {
  return (
    <div className="main_div">
      <div className="car_div">
        <Carousel fade>
          <Carousel.Item style={{ height: "600px" }}>
            <img
              style={{ height: "600px" }}
              src={pic1}
              className="d-block w-100"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "600px" }}>
            <img
              style={{ height: "600px" }}
              className="d-block w-100"
              src={pic2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "600px" }}>
            <img
              style={{ height: "600px" }}
              className="d-block w-100"
              src={pic3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Car;
