import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Cards({ url, name }) {
  return (
    <>
      <Card bg="dark" className="mb-2" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://picsum.photos/200/100" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="dark" style={{ color: "#bisque" }}>
            <a href={url} target="_blank">
              Go somewhere
            </a>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
