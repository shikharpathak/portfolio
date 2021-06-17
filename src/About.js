import React from "react";
import Cards from "./Cards.js";
import Navtab from "./Navtab";
function About() {
  return (
    <div>
      <Navtab className="nav" />
      <h1>About Page</h1>
      <Cards />
    </div>
  );
}

export default About;
