import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card,Carousel} from "react-bootstrap";
import style from "../styles/style.module.css";
function head_bar() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            variant="top" style={{width:'100%',height:"380px"}}
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2014/08/29/15/47/landscape-431147_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            variant="top" style={{width:'100%',height:"380px"}}
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/01/20/20/09/pasture-fence-1995820_960_720.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
             variant="top" style={{width:'100%',height:"380px"}}
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2018/02/05/13/15/sunset-3132179_960_720.jpg"
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
  );
}

export default head_bar;
