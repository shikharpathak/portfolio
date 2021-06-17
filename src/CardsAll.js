import React from "react";
import Cards from "./Cards.js";
import CardDeck from "react-bootstrap/CardDeck";
function CardsAll() {
  return (
    <>
      <CardDeck>
        <Cards
          url="https://shikhar-react-chat.netlify.app/"
          name="React Chat App"
        />
        <Cards url="https://netflix-clone-f4c1f.web.app/" name="Netlix-Clone" />
        <Cards
          url="https://johnivarshelbytodolist.netlify.app/"
          name="To-do List"
        />
        <Cards url="https://shikhar-recipe.netlify.app/" name="Recipe App" />
      </CardDeck>
    </>
  );
}

export default CardsAll;
