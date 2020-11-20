import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card,Carousel} from "react-bootstrap";
import style from "../styles/style.module.css";
function head_bar() {
  return (
    <div className="style.carousel-inner">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            variant="top" style={{width:'100%',height:"380px"}}
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2014/08/29/15/47/landscape-431147_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>WELLCOME TO LOFOTO</h3>
            <p>Website for collecting images just for you..</p>
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
            <h3>WELLCOME TO LOFOTO</h3>
            <p>Website for collecting images just for you..</p>
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
            <h3>WELLCOME TO LOFOTO</h3>
            <p>Website for collecting images just for you.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default head_bar;
