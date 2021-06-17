import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Car from "./Car.js";
import CardsAll from "./CardsAll.js";
import Navtab from "./Navtab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Home() {
  return (
    <>
      <Navtab className="nav" />
      <div className="carousel">
        <Car className="car" />
      </div>
      <br />
      <CardsAll />
      {/* <Container fluid="md">
        <Row>
          <Cards
            url="https://shikhar-react-chat.netlify.app/"
            name="React Chat App"
          />
          <Cards
            url="https://netflix-clone-f4c1f.web.app/"
            name="Netlix-Clone"
          />
        </Row>
        <Row>
          <Cards
            url="https://johnivarshelbytodolist.netlify.app/"
            name="To-do List"
          />
          <Cards
            url="https://shikharbooks.netlify.app/"
            name="Favourite Books"
          />
        </Row>
        <Row>
          <Cards url="https://shikhar-recipe.netlify.app/" name="Recipe App" />
          <Cards
            url="https://shikharbooks.netlify.app/"
            name="Favourite Books"
          />
        </Row>
      </Container> */}
    </>
  );
}

export default Home;
