import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
    
      <Link to="/">Home </Link>
      <br />
      <Link to="/about">About us</Link>
      <br />
      <Link to="/contact">Contact us</Link> <br />
      <Link to="/counterclass">Counter Class</Link>
      <br />
      <Link to="/eventbind">EventBind</Link><br />
      {/* <Link to="https://shikhar-recipe.netlify.app/">Recipe App</Link> */}
    </div>
  );
}

export default Navbar;
