import React from "react";
import { Card, Button } from "react-bootstrap";
import Scss from "./allitem.module.scss";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_PRODUCTS = gql`
  {
    products {
      id
      name
      discription
      price
    }
  }
`;

const allitem = () => {
  const { data } = useQuery(GET_PRODUCTS);
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "fit-content", margin: "auto" }}>
        <div style={{ backgroundColor: "#D3D3D3" }}>
          <div
            style={{
              backgroundColor: "#2E8B57",
              padding: "10px",
              fontFamily: "Kanit, sans-serif",
              color: "#D3D3D3",
            }}
          >
            รายการสินค้า
          </div>
          <div className={Scss.item}>
            {data &&
              data.products.map((prod) => (
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      style={{ width: "290x", height: "180px" }}
                      src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
                    />
                    <Card.Body>
                      <Card.Title>{prod.name}</Card.Title>
                      <Card.Text>{prod.discription}</Card.Text>
                      <Button variant="primary">{prod.discription}</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default allitem;
